import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Monitor, MemoryStick, CircuitBoard, HardDrive, Zap, Box } from 'lucide-react'
import hardwareData from '../data/hardwareData'

const iconMap = { Cpu, Monitor, MemoryStick, CircuitBoard, HardDrive, Zap, Box }

const Materi = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Materi Pembelajaran</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400 transition-colors duration-300">
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
              className="group relative bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 transition-colors duration-300">{item.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow transition-colors duration-300">
                {item.shortDescription}
              </p>

              {/* Sub-material count */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
                    {item.subMaterials.length} sub-materi
                  </span>
                  <Link
                    to={`/materi/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
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
