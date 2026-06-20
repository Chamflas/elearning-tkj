import { Link } from 'react-router-dom'
import { BookOpen, Brain, Monitor, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Materi Interaktif',
    description:
      'Pelajari komponen PC secara mendalam melalui materi edukatif yang terstruktur — dari CPU, GPU, RAM, hingga Motherboard.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Brain,
    title: 'Kuis Pengujian',
    description:
      'Uji pemahamanmu dengan kuis interaktif yang dirancang untuk memperkuat konsep hardware PC setelah setiap materi.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Monitor,
    title: 'Simulasi Rakit',
    description:
      'Rasakan pengalaman merakit PC secara virtual dengan simulasi interaktif — pilih, pasang, dan rakit komponen layaknya teknisi profesional.',
    color: 'bg-amber-50 text-amber-600',
  },
]

const Homepage = () => {
  return (
    <div className="-mt-8">
      {/* ---- Hero Section ---- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl" />
        </div>

        <div className="relative px-6 py-16 sm:py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Kuasai Hardware PC
              <br />
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                dengan Mudah
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
              Platform belajar interaktif untuk memahami komponen hardware komputer.
              Cocok untuk siswa TKJ yang ingin menguasai perakitan PC dari dasar hingga mahir.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/materi"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all duration-200 hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                Mulai Belajar
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-white/10 backdrop-blur px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                <Brain className="w-4 h-4" />
                Ikuti Kuis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Features Section ---- */}
      <section className="mt-16 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Kenapa Belajar di Sini?
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Tiga pilar utama yang akan membantu kamu memahami hardware PC secara komprehensif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color }, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Homepage