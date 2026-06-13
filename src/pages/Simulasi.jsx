import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Fan, MemoryStick, HardDrive, Monitor, AlertTriangle, CheckCircle, XCircle, X, Power, Zap, ArrowRight } from 'lucide-react'
import { motherboardSlots, inventoryItems, coreSlots } from '../data/simulationData'

const slotIcons = { Cpu, Fan, MemoryStick, HardDrive, Monitor }

const Simulasi = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [placedSlots, setPlacedSlots] = useState({}) // { slotId: itemId }
  const [thermalApplied, setThermalApplied] = useState(false) // thermal paste on CPU
  const [logs, setLogs] = useState([])
  const [errors, setErrors] = useState(0)
  const [showBootSuccess, setShowBootSuccess] = useState(false)

  const addLog = useCallback((message, type = 'info') => {
    setLogs((prev) => [...prev, { id: Date.now() + Math.random(), message, type }])
  }, [])

  // Check which core slots are filled
  const filledCoreSlots = coreSlots.filter((sid) => placedSlots[sid])
  const allCorePlaced = filledCoreSlots.length >= coreSlots.length

  const getItemById = (id) => inventoryItems.find((i) => i.id === id)
  const getSlotById = (id) => motherboardSlots.find((s) => s.id === id)

  // Group slots by gridArea for the grid layout
  const gridAreas = {
    cpu: motherboardSlots.filter((s) => s.gridArea === 'cpu'),
    ram: motherboardSlots.filter((s) => s.gridArea === 'ram'),
    pcie: motherboardSlots.filter((s) => s.gridArea === 'pcie'),
    m2: motherboardSlots.filter((s) => s.gridArea === 'm2'),
  }

  const handleSelectItem = (item) => {
    if (showBootSuccess) return
    const alreadyPlaced = Object.values(placedSlots).includes(item.id)
    if (alreadyPlaced) {
      addLog(`${item.name} sudah terpasang.`, 'warning')
      return
    }
    setSelectedItem(selectedItem?.id === item.id ? null : item)
  }

  const handleClickSlot = (slot) => {
    if (showBootSuccess) return

    // If no item selected
    if (!selectedItem) {
      if (placedSlots[slot.id]) {
        const placed = getItemById(placedSlots[slot.id])
        addLog(`Slot ini sudah terisi: ${placed.name}`, 'info')
      } else {
        addLog('Pilih komponen dari toolbox terlebih dahulu.', 'warning')
      }
      return
    }

    // ---- SPECIAL: Thermal Paste (bypass slot filled check) ----
    if (selectedItem.id === 'thermal-paste') {
      if (slot.id !== 'cpu-socket') {
        setErrors((prev) => prev + 1)
        addLog('Error: Thermal paste hanya bisa dioleskan ke atas CPU. Pilih socket CPU!', 'error')
        setSelectedItem(null)
        return
      }
      if (!placedSlots['cpu-socket']) {
        setErrors((prev) => prev + 1)
        addLog('Error: Pasang prosesornya dulu sebelum mengoleskan thermal paste!', 'error')
        setSelectedItem(null)
        return
      }
      // Success — mark thermal as applied (bypass slot filled check)
      setThermalApplied(true)
      addLog('✅ Thermal paste berhasil dioleskan ke atas CPU.', 'success')
      setSelectedItem(null)
      return
    }

    // Check if slot is already filled (AFTER thermal paste bypass)
    if (placedSlots[slot.id]) {
      addLog(`Slot "${slot.label}" sudah terisi! Lepas dulu untuk mengganti.`, 'warning')
      return
    }

    // ---- SPECIAL: Pengecoh (SATA cable, HDD) ----
    if (selectedItem.slotType === null) {
      setErrors((prev) => prev + 1)
      addLog(`Error: ${selectedItem.name} tidak dipasang langsung ke slot Motherboard! Cari komponen lain.`, 'error')
      setSelectedItem(null)
      return
    }

    // ---- Check prerequisite (cooler requires CPU + thermal paste) ----
    if (selectedItem.requires && !placedSlots[selectedItem.requires]) {
      setErrors((prev) => prev + 1)
      if (selectedItem.id === 'cooler-noctua') {
        if (!thermalApplied) {
          addLog('Error: Oleskan thermal paste ke CPU terlebih dahulu sebelum memasang Cooler!', 'error')
        } else {
          addLog('Error: Pasang CPU terlebih dahulu sebelum memasang Cooler!', 'error')
        }
      } else {
        addLog(`Error: Komponen ini memerlukan CPU terpasang lebih dulu.`, 'error')
      }
      setSelectedItem(null)
      return
    }

    // Check if slot has a prerequisite and it's met
    if (slot.requires && !placedSlots[slot.requires]) {
      setErrors((prev) => prev + 1)
      const requiredSlot = getSlotById(slot.requires)
      addLog(`Error: Slot ini memerlukan "${requiredSlot?.label}" terpasang lebih dulu.`, 'error')
      setSelectedItem(null)
      return
    }

    // ---- Validate slot type match ----
    if (selectedItem.slotType !== null && selectedItem.slotType !== slot.id) {
      const correctSlot = getSlotById(selectedItem.slotType)

      // Check if type matches for same-category slots (e.g., RAM)
      if (selectedItem.type === slot.type && correctSlot) {
        addLog(`${selectedItem.name} harus dipasang di "${correctSlot?.label}".`, 'error')
      } else {
        setErrors((prev) => prev + 1)
        addLog('Komponen tidak kompatibel dengan slot ini!', 'error')
      }
      setSelectedItem(null)
      return
    }

    // Success!
    setPlacedSlots((prev) => ({ ...prev, [slot.id]: selectedItem.id }))
    addLog(`✅ ${selectedItem.name} berhasil dipasang di ${slot.label}!`, 'success')
    setSelectedItem(null)
  }

  const handleRemoveFromSlot = (slotId) => {
    const placed = getItemById(placedSlots[slotId])

    // If removing CPU, also remove thermal paste and cooler
    if (slotId === 'cpu-socket') {
      setThermalApplied(false)
      if (placedSlots['cooler-mount']) {
        const cooler = getItemById(placedSlots['cooler-mount'])
        setPlacedSlots((prev) => {
          const next = { ...prev }
          delete next['cooler-mount']
          return next
        })
        if (cooler) addLog(`${cooler.name} otomatis dilepas karena CPU dilepas.`, 'info')
      }
    }

    setPlacedSlots((prev) => {
      const next = { ...prev }
      delete next[slotId]
      return next
    })
    if (placed) {
      addLog(`${placed.name} dilepas dari slot.`, 'info')
    }
  }

  const handleBoot = () => {
    setShowBootSuccess(true)
    addLog('Sistem dinyalakan... POST berhasil! ✅', 'success')
    addLog('🚀 Booting ke sistem operasi... Selamat, PC berhasil dirakit!', 'success')
  }

  const handleReset = () => {
    setSelectedItem(null)
    setPlacedSlots({})
    setThermalApplied(false)
    setLogs([])
    setErrors(0)
    setShowBootSuccess(false)
  }

  const score = Math.max(0, 100 - errors * 10)

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Simulasi Rakit PC</h1>
        <p className="mt-2 text-slate-500">
          Pilih komponen dari toolbox, lalu klik slot pada motherboard untuk memasangnya.
        </p>
      </div>

      {/* Main Layout: Motherboard + Toolbox */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* ====== Left: Motherboard Map (2/3) ====== */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Mainboard Map</h2>

            {/* Motherboard Board — CSS Grid Layout */}
            <div
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-slate-600 overflow-hidden p-4 sm:p-6"
              style={{ minHeight: '420px' }}
            >
              {/* Blueprint grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
              </svg>

              {/* CSS Grid for slots */}
              <div className="relative grid grid-cols-2 gap-4 sm:gap-6" style={{ zIndex: 1 }}>
                {/* ---- Kiri Atas: CPU & Cooler ---- */}
                <div className="col-span-1">
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-1">CPU ZONE</p>
                    {gridAreas.cpu.map((slot) => {
                      const isFilled = !!placedSlots[slot.id]
                      const placedItem = isFilled ? getItemById(placedSlots[slot.id]) : null
                      const isHighlighted = selectedItem && selectedItem.slotType === slot.id
                      const IconComp = slotIcons[slot.icon] || Cpu

                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleClickSlot(slot)}
                          className={`
                            group relative w-full max-w-[200px] px-3 py-3 rounded-lg border-2 transition-all duration-200
                            ${isFilled
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : isHighlighted
                              ? 'border-indigo-400 bg-indigo-500/10 ring-2 ring-indigo-400/50'
                              : thermalApplied && slot.id === 'cpu-socket'
                              ? 'border-amber-400 bg-amber-500/10 ring-1 ring-amber-400/30'
                              : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                            }
                          `}
                        >
                          {isFilled ? (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs font-medium text-emerald-300 leading-tight truncate">
                                {placedItem.name}
                              </p>
                              <p className="text-[9px] text-emerald-400/60 mt-0.5 truncate">{placedItem.specs}</p>
                              {!showBootSuccess && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemoveFromSlot(slot.id)
                                  }}
                                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ) : (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{slot.label}</p>
                              {thermalApplied && slot.id === 'cpu-socket' && (
                                <p className="text-[9px] text-amber-400 mt-0.5">+ Thermal Paste ✓</p>
                              )}
                              {!thermalApplied && slot.id === 'cpu-socket' && (
                                <p className="text-[9px] text-slate-600 mt-0.5">[ Kosong ]</p>
                              )}
                              {slot.id !== 'cpu-socket' && (
                                <p className="text-[9px] text-slate-600 mt-0.5">[ Kosong ]</p>
                              )}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* ---- Kanan Atas: RAM ---- */}
                <div className="col-span-1">
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-1">MEMORY ZONE</p>
                    {gridAreas.ram.map((slot) => {
                      const isFilled = !!placedSlots[slot.id]
                      const placedItem = isFilled ? getItemById(placedSlots[slot.id]) : null
                      const isHighlighted = selectedItem && selectedItem.slotType === slot.id
                      const IconComp = slotIcons[slot.icon] || Cpu

                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleClickSlot(slot)}
                          className={`
                            group relative w-full max-w-[200px] px-3 py-3 rounded-lg border-2 transition-all duration-200
                            ${isFilled
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : isHighlighted
                              ? 'border-indigo-400 bg-indigo-500/10 ring-2 ring-indigo-400/50'
                              : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                            }
                          `}
                        >
                          {isFilled ? (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs font-medium text-emerald-300 leading-tight truncate">
                                {placedItem.name}
                              </p>
                              <p className="text-[9px] text-emerald-400/60 mt-0.5 truncate">{placedItem.specs}</p>
                              {!showBootSuccess && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemoveFromSlot(slot.id)
                                  }}
                                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ) : (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{slot.label}</p>
                              <p className="text-[9px] text-slate-600 mt-0.5">[ Kosong ]</p>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* ---- Kiri Bawah: PCIe (GPU) ---- */}
                <div className="col-span-1">
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-1">PCIe ZONE</p>
                    {gridAreas.pcie.map((slot) => {
                      const isFilled = !!placedSlots[slot.id]
                      const placedItem = isFilled ? getItemById(placedSlots[slot.id]) : null
                      const isHighlighted = selectedItem && selectedItem.slotType === slot.id
                      const IconComp = slotIcons[slot.icon] || Cpu

                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleClickSlot(slot)}
                          className={`
                            group relative w-full max-w-[200px] px-3 py-3 rounded-lg border-2 transition-all duration-200
                            ${isFilled
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : isHighlighted
                              ? 'border-indigo-400 bg-indigo-500/10 ring-2 ring-indigo-400/50'
                              : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                            }
                          `}
                        >
                          {isFilled ? (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs font-medium text-emerald-300 leading-tight truncate">
                                {placedItem.name}
                              </p>
                              <p className="text-[9px] text-emerald-400/60 mt-0.5 truncate">{placedItem.specs}</p>
                              {!showBootSuccess && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemoveFromSlot(slot.id)
                                  }}
                                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ) : (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{slot.label}</p>
                              <p className="text-[9px] text-slate-600 mt-0.5">[ Kosong ]</p>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* ---- Kanan Bawah: M.2 (SSD) ---- */}
                <div className="col-span-1">
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-1">STORAGE ZONE</p>
                    {gridAreas.m2.map((slot) => {
                      const isFilled = !!placedSlots[slot.id]
                      const placedItem = isFilled ? getItemById(placedSlots[slot.id]) : null
                      const isHighlighted = selectedItem && selectedItem.slotType === slot.id
                      const IconComp = slotIcons[slot.icon] || Cpu

                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleClickSlot(slot)}
                          className={`
                            group relative w-full max-w-[200px] px-3 py-3 rounded-lg border-2 transition-all duration-200
                            ${isFilled
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : isHighlighted
                              ? 'border-indigo-400 bg-indigo-500/10 ring-2 ring-indigo-400/50'
                              : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                            }
                          `}
                        >
                          {isFilled ? (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs font-medium text-emerald-300 leading-tight truncate">
                                {placedItem.name}
                              </p>
                              <p className="text-[9px] text-emerald-400/60 mt-0.5 truncate">{placedItem.specs}</p>
                              {!showBootSuccess && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemoveFromSlot(slot.id)
                                  }}
                                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ) : (
                            <div className="text-center">
                              <IconComp className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{slot.label}</p>
                              <p className="text-[9px] text-slate-600 mt-0.5">[ Kosong ]</p>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Board label */}
              <div className="absolute bottom-3 left-0 right-0 text-center" style={{ zIndex: 1 }}>
                <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">PCB Board — ATX Form Factor</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Right: Toolbox (1/3) ====== */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Technician Toolbox</h2>

            <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1">
              {inventoryItems.map((item) => {
                const isPlaced = Object.values(placedSlots).includes(item.id)
                const isSelected = selectedItem?.id === item.id
                const IconComp =
                  item.type === 'processor' ? Cpu
                  : item.type === 'memory' ? MemoryStick
                  : item.type === 'storage' || item.type === 'storage-sata' ? HardDrive
                  : item.type === 'vga' ? Monitor
                  : item.type === 'cooler' ? Fan
                  : Cpu

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    disabled={isPlaced || showBootSuccess}
                    className={`
                      text-left p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-3
                      ${isPlaced
                        ? 'border-emerald-200 bg-emerald-50 opacity-60'
                        : isSelected
                        ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-200'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
                      }
                    `}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isPlaced ? 'bg-emerald-100 text-emerald-600' :
                      isSelected ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                      <p className="text-[10px] text-slate-400">{item.specs}</p>
                      <p className="text-[10px] text-slate-400">{item.brand}</p>
                    </div>
                    {isPlaced && (
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    )}
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse flex-shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Status bar */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Progress: {filledCoreSlots.length}/{coreSlots.length} core
                </span>
                <span className="font-semibold text-slate-700">
                  Skor: <span className={score >= 70 ? 'text-emerald-600' : score >= 40 ? 'text-amber-600' : 'text-red-600'}>{score}</span>
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${(filledCoreSlots.length / coreSlots.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Boot button */}
            {allCorePlaced && !showBootSuccess && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={handleBoot}
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
              >
                <Power className="w-5 h-5" />
                Nyalakan PC
                <Zap className="w-4 h-4" />
              </motion.button>
            )}

            {showBootSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm font-bold text-emerald-700">Boot Berhasil! 🎉</p>
                <p className="text-xs text-emerald-600 mt-1">PC siap digunakan.</p>
                <div className="mt-3 flex justify-center gap-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-200 text-xs font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    Rakit Ulang
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ====== Bottom: Console Log ====== */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Console Log</h2>
          <div className="flex items-center gap-2">
            {logs.length > 0 && (
              <button
                onClick={() => setLogs([])}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                Bersihkan
              </button>
            )}
            <button
              onClick={handleReset}
              className="text-xs text-red-500 hover:text-red-600 transition-colors font-medium"
            >
              Reset Simulasi
            </button>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 max-h-[200px] overflow-y-auto font-mono">
          {logs.length === 0 ? (
            <p className="text-slate-600 text-sm">
              <span className="text-slate-500">[System]</span> Pilih komponen dari toolbox, lalu klik slot motherboard. Selamat merakit!
            </p>
          ) : (
            <AnimatePresence initial={false}>
              {logs
                .slice()
                .reverse()
                .map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm mb-1 ${
                      log.type === 'error'
                        ? 'text-red-400'
                        : log.type === 'success'
                        ? 'text-emerald-400'
                        : log.type === 'warning'
                        ? 'text-amber-400'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="text-slate-600">
                      [{log.type === 'error' ? 'ERROR' : log.type === 'success' ? 'OK' : log.type === 'warning' ? 'WARN' : 'INFO'}]
                    </span>{' '}
                    {log.message}
                  </motion.div>
                ))}
            </AnimatePresence>
          )}
        </div>

        {/* Animated boot success overlay */}
        <AnimatePresence>
          {showBootSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="text-center"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50"
                >
                  <Power className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">Boot Success!</h2>
                <p className="text-slate-300 mb-6">PC berhasil dirakit dan dinyalakan! 🎉</p>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Skor: {score}
                  </span>
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /> Error: {errors}x
                  </span>
                </div>
                <button
                  onClick={() => setShowBootSuccess(false)}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-slate-800 font-semibold text-sm hover:bg-slate-100 transition-colors"
                >
                  Lanjutkan
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Simulasi