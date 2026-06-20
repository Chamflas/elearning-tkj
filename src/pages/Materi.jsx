import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Monitor, MemoryStick, CircuitBoard, HardDrive, Zap, Box } from 'lucide-react'
import hardwareData from '../data/hardwareData'

const iconMap = {
  Cpu,
  Monitor,
  MemoryStick,
  CircuitBoard,
  HardDrive,
  Zap,
  Box,
}

const Materi = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Materi Pembelajaran</h1>
        <p className="mt-2 text-slate-500">
          Pelajari setiap komponen hardware PC secara mendalam. Pilih komponen yang ingin kamu kuasai.
        </p>
      </div>

      {/* Grid List Materi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareData.map((item) => {
          const IconComponent = iconMap[item.icon] || Box

          return (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {item.shortDescription}
              </p>

              {/* Sub-material count */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {item.subMaterials.length} sub-materi
                  </span>
                  <Link
                    to={`/materi/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Pelajari
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Materi