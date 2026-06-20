import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { User, Mail, Calendar, Trophy, Brain, BookOpen, Monitor, ChevronRight } from 'lucide-react'

const Dashboard = () => {
  const { currentUser, isAuthenticated } = useAuth()

  // Protected route
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Load quiz history
  const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]')

  // Stats
  const totalQuizzes = quizHistory.length
  const averageScore =
    totalQuizzes > 0
      ? Math.round(quizHistory.reduce((sum, h) => sum + h.score, 0) / totalQuizzes)
      : 0
  const lastQuiz = totalQuizzes > 0 ? quizHistory[quizHistory.length - 1] : null

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-600'
    if (score >= 50) return 'text-amber-600'
    return 'text-red-600'
  }

  const getDifficultyLabel = (difficulty) => {
    const map = { easy: 'Mudah', medium: 'Menengah', hard: 'Sulit' }
    return map[difficulty] || difficulty
  }

  const getDifficultyColor = (difficulty) => {
    const map = { easy: 'bg-emerald-100 text-emerald-700', medium: 'bg-amber-100 text-amber-700', hard: 'bg-red-100 text-red-700' }
    return map[difficulty] || 'bg-slate-100 text-slate-600'
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Welcome, {currentUser.name}! 👋
        </h1>
        <p className="text-slate-500 mt-1">Selamat datang di dashboard pembelajaranmu</p>
      </div>

      {/* User Info + Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* User Card */}
        <div className="md:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
              <User className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-slate-800">{currentUser.name}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
              <Mail className="w-3 h-3" />
              {currentUser.email}
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
              <Calendar className="w-3 h-3" />
              Bergabung {new Date(currentUser.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Total Quizzes */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{totalQuizzes}</p>
            <p className="text-xs text-slate-400">Total Kuis</p>
          </div>
        </div>

        {/* Average Score */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{totalQuizzes > 0 ? averageScore : '-'}</p>
            <p className="text-xs text-slate-400">Rata-rata Skor</p>
          </div>
        </div>

        {/* Last Quiz */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6 text-purple-600" />
          </div>
          <div className="min-w-0">
            <p className="text-lg font-bold text-slate-800 truncate">
              {lastQuiz ? lastQuiz.topic : '-'}
            </p>
            <p className="text-xs text-slate-400">Kuis Terakhir</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Link
          to="/materi"
          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">Lanjutkan Belajar</p>
            <p className="text-xs text-slate-400">Lihat materi hardware PC</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </Link>

        <Link
          to="/quiz"
          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">Ambil Kuis</p>
            <p className="text-xs text-slate-400">Uji pemahamanmu</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </Link>

        <Link
          to="/simulasi"
          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <Monitor className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">Simulasi Rakit</p>
            <p className="text-xs text-slate-400">Rakit PC virtual</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </Link>
      </div>

      {/* Quiz History */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Riwayat Kuis</h2>
        {totalQuizzes === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
            <Brain className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">Belum ada kuis yang dikerjakan. Ayo mulai belajar!</p>
            <Link
              to="/materi"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Pelajari materi
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Topik</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kesulitan</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Skor</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Tanggal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {quizHistory
                    .slice()
                    .reverse()
                    .map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-3.5 text-sm text-slate-700 font-medium">{item.topic}</td>
                        <td className="px-6 py-3.5">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {getDifficultyLabel(item.difficulty)}
                          </span>
                        </td>
                        <td className={`px-6 py-3.5 text-sm font-semibold ${getScoreColor(item.score)}`}>
                          {item.score}/100
                        </td>
                        <td className="px-6 py-3.5 text-sm text-slate-400 hidden sm:table-cell">
                          {formatDate(item.date)}
                        </td>
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