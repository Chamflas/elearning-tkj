export const motherboardSlots = [
  { id: 'cpu-socket', label: 'Socket CPU (LGA1700)', type: 'processor', icon: 'Cpu', gridArea: 'cpu' },
  { id: 'cooler-mount', label: 'Mounting Cooler', type: 'cooler', icon: 'Fan', gridArea: 'cpu', requires: 'cpu-socket' },
  { id: 'dimm-1', label: 'DIMM Slot #1 (DDR5)', type: 'memory', icon: 'MemoryStick', gridArea: 'ram' },
  { id: 'dimm-2', label: 'DIMM Slot #2 (DDR5)', type: 'memory', icon: 'MemoryStick', gridArea: 'ram' },
  { id: 'm2-slot', label: 'M.2 Slot (PCIe 4.0 x4)', type: 'storage', icon: 'HardDrive', gridArea: 'm2' },
  { id: 'pcie-x16', label: 'PCIe x16 Slot (Gen 5)', type: 'vga', icon: 'Monitor', gridArea: 'pcie' },
]

export const inventoryItems = [
  { id: 'cpu-intel', name: 'Intel Core i9-14900K', type: 'processor', slotType: 'cpu-socket', brand: 'Intel', specs: '24 Cores / 32 Threads' },
  { id: 'cooler-noctua', name: 'Noctua NH-D15 Chromax', type: 'cooler', slotType: 'cooler-mount', brand: 'Noctua', specs: 'Dual Tower Air Cooler', requires: 'cpu-socket' },
  { id: 'ram-corsair', name: 'Corsair Vengeance 16GB DDR5', type: 'memory', slotType: 'dimm-1', brand: 'Corsair', specs: 'DDR5-6000MHz CL30' },
  { id: 'ram-gskill', name: 'G.Skill Trident Z5 16GB DDR5', type: 'memory', slotType: 'dimm-2', brand: 'G.Skill', specs: 'DDR5-6400MHz CL32' },
  { id: 'ssd-samsung', name: 'Samsung 990 Pro NVMe 1TB', type: 'storage', slotType: 'm2-slot', brand: 'Samsung', specs: 'Read 7450 MB/s' },
  { id: 'gpu-rtx', name: 'NVIDIA RTX 4080 Super', type: 'vga', slotType: 'pcie-x16', brand: 'NVIDIA', specs: '16GB GDDR6X' },
  { id: 'cable-sata', name: 'Kabel SATA (Pengecoh)', type: 'cable', slotType: null, brand: 'Generic', specs: 'Tidak bisa dipasang' },
  { id: 'thermal-paste', name: 'Thermal Paste Arctic MX-6', type: 'paste', slotType: 'cpu-socket', brand: 'Arctic', specs: 'Konduktivitas tinggi', requires: 'cpu-socket' },
  { id: 'hdd-seagate', name: 'Seagate Barracuda 2TB HDD', type: 'storage-sata', slotType: null, brand: 'Seagate', specs: 'SATA III, tidak kompatibel' },
]

// Which slots are considered "core" for completion
export const coreSlots = ['cpu-socket', 'dimm-1', 'm2-slot', 'pcie-x16']