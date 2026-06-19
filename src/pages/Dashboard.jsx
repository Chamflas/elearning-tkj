import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { User, Mail, Calendar, Trophy, Brain, BookOpen, Monitor, ChevronRight } from 'lucide-react'

const Dashboard = () => {
  const { currentUser, isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to="/login" replace />

  const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]')
  const totalQuizzes = quizHistory.length
  const averageScore = totalQuizzes > 0 ? Math.round(quizHistory.reduce((sum, h) => sum + h.score, 0) / totalQuizzes) : 0
  const lastQuiz = totalQuizzes > 0 ? quizHistory[quizHistory.length - 1] : null

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600 dark:text-emerald-400'
    if (score >= 50) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getDifficultyLabel = (difficulty) => {
    const map = { easy: 'Mudah', medium: 'Menengah', hard: 'Sulit' }
    return map[difficulty] || difficulty
  }

  const getDifficultyColor = (difficulty) => {
    const map = { 
      easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400', 
      medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400', 
      hard: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' 
    }
    return map[difficulty] || 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="transition-colors duration-300">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
          Welcome, {currentUser.name}! 👋
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-300">Selamat datang di dashboard pembelajaranmu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* User Card */}
        <div className="md:col-span-1 bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-colors duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mb-3 transition-colors duration-300">
              <User className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white transition-colors duration-300">{currentUser.name}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400 dark:text-slate-500">
              <Mail className="w-3 h-3" /> {currentUser.email}
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400 dark:text-slate-500">
              <Calendar className="w-3 h-3" /> Bergabung {new Date(currentUser.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Total Quizzes */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex items-center gap-4 transition-colors duration-300">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{totalQuizzes}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Total Kuis</p>
          </div>
        </div>

        {/* Average Score */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex items-center gap-4 transition-colors duration-300">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{totalQuizzes > 0 ? averageScore : '-'}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Rata-rata Skor</p>
          </div>
        </div>

        {/* Last Quiz */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex items-center gap-4 transition-colors duration-300">
          <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="min-w-0">
            <p className="text-lg font-bold text-slate-800 dark:text-white truncate transition-colors duration-300">{lastQuiz ? lastQuiz.topic : '-'}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Kuis Terakhir</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { to: '/materi', icon: BookOpen, title: 'Lanjutkan Belajar', desc: 'Lihat materi hardware PC', color: 'indigo' },
          { to: '/quiz', icon: Brain, title: 'Ambil Kuis', desc: 'Uji pemahamanmu', color: 'amber' },
          { to: '/simulasi', icon: Monitor, title: 'Simulasi Rakit', desc: 'Rakit PC virtual', color: 'emerald' },
        ].map((item, idx) => (
          <Link key={idx} to={item.to} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900/50 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300">
            <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
              <item.icon className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white transition-colors duration-300">{item.title}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">{item.desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 transition-colors duration-300">Riwayat Kuis</h2>
        {totalQuizzes === 0 ? (
          <div className="bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 text-center transition-colors duration-300">
            <Brain className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3 transition-colors duration-300" />
            <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">Belum ada kuis yang dikerjakan. Ayo mulai belajar!</p>
            <Link to="/materi" className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">
              Pelajari materi <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900/50 backdrop-blur rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 transition-colors duration-300">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Topik</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Kesulitan</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Skor</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:table-cell">Tanggal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {quizHistory.slice().reverse().map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
                      <td className="px-6 py-3.5 text-sm text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300">{item.topic}</td>
                      <td className="px-6 py-3.5">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)} transition-colors duration-300`}>
                          {getDifficultyLabel(item.difficulty)}
                        </span>
                      </td>
                      <td className={`px-6 py-3.5 text-sm font-semibold ${getScoreColor(item.score)} transition-colors duration-300`}>{item.score}/100</td>
                      <td className="px-6 py-3.5 text-sm text-slate-400 dark:text-slate-500 hidden sm:table-cell transition-colors duration-300">{formatDate(item.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
