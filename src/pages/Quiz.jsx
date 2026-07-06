import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, LayoutDashboard, Trophy, Brain, Zap, Star, Terminal } from 'lucide-react'
import quizData from '../data/quizData'
import hardwareData from '../data/hardwareData'

// Konfigurasi Kesulitan dengan Tema Cyber Neon
const difficultyConfig = {
  easy: { 
    label: 'Mudah', 
    icon: Star, 
    color: 'bg-slate-800/50 text-emerald-400 border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-900/20', 
    activeColor: 'bg-emerald-900/40 text-emerald-300 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
  },
  medium: { 
    label: 'Menengah', 
    icon: Brain, 
    color: 'bg-slate-800/50 text-amber-400 border-slate-700 hover:border-amber-500/50 hover:bg-amber-900/20', 
    activeColor: 'bg-amber-900/40 text-amber-300 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
  },
  hard: { 
    label: 'Sulit', 
    icon: Zap, 
    color: 'bg-slate-800/50 text-red-400 border-slate-700 hover:border-red-500/50 hover:bg-red-900/20', 
    activeColor: 'bg-red-900/40 text-red-300 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]' 
  },
}

const getScoreMessage = (score) => {
  if (score >= 90) return { text: 'Sistem Dikuasai! 🎉', subtext: 'Kamu memiliki akurasi level teknisi profesional.', color: 'text-emerald-400', shadow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]' }
  if (score >= 80) return { text: 'Sangat Bagus! 👏', subtext: 'Pemahaman logikamu sangat tajam, pertahankan!', color: 'text-emerald-400', shadow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]' }
  if (score >= 70) return { text: 'Kompeten! 👍', subtext: 'Cukup menguasai, namun beberapa sektor memori perlu dioptimasi.', color: 'text-amber-400', shadow: 'drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]' }
  if (score >= 50) return { text: 'Perlu Kalibrasi 📚', subtext: 'Banyak file sistem yang *corrupt*. Baca kembali modul materi.', color: 'text-amber-400', shadow: 'drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]' }
  return { text: 'Sistem Gagal! 💥', subtext: 'Fatal error. Segera lakukan reset pembelajaran dan coba lagi!', color: 'text-red-500', shadow: 'drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' }
}

const INITIAL_STATE = {
  phase: 'setup',
  selectedTopic: null,
  selectedDifficulty: null,
  currentQuestionIndex: 0,
  selectedAnswer: null,
  userAnswers: {},
  showFeedback: false,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
}

const Quiz = () => {
  const [phase, setPhase] = useState(INITIAL_STATE.phase)
  const [selectedTopic, setSelectedTopic] = useState(INITIAL_STATE.selectedTopic)
  const [selectedDifficulty, setSelectedDifficulty] = useState(INITIAL_STATE.selectedDifficulty)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(INITIAL_STATE.currentQuestionIndex)
  const [selectedAnswer, setSelectedAnswer] = useState(INITIAL_STATE.selectedAnswer)
  const [userAnswers, setUserAnswers] = useState(INITIAL_STATE.userAnswers)
  const [showFeedback, setShowFeedback] = useState(INITIAL_STATE.showFeedback)
  const [score, setScore] = useState(INITIAL_STATE.score)
  const [correctCount, setCorrectCount] = useState(INITIAL_STATE.correctCount)
  const [wrongCount, setWrongCount] = useState(INITIAL_STATE.wrongCount)

  const topicOptions = useMemo(() => quizData.map((quiz) => {
    const hw = hardwareData.find((h) => h.id === quiz.hardwareId)
    return { ...quiz, hardwareName: hw?.name || quiz.hardwareId }
  }), [])

  const currentQuiz = useMemo(() => selectedTopic ? quizData.find((q) => q.hardwareId === selectedTopic) : null, [selectedTopic])
  const questions = useMemo(() => !currentQuiz || !selectedDifficulty ? [] : currentQuiz.questions[selectedDifficulty] || [], [currentQuiz, selectedDifficulty])
  const currentQuestion = questions[currentQuestionIndex] || null
  const totalQuestions = questions.length
  const progressPercent = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0

  const fullReset = useCallback(() => {
    setPhase(INITIAL_STATE.phase)
    setSelectedTopic(INITIAL_STATE.selectedTopic)
    setSelectedDifficulty(INITIAL_STATE.selectedDifficulty)
    setCurrentQuestionIndex(INITIAL_STATE.currentQuestionIndex)
    setSelectedAnswer(INITIAL_STATE.selectedAnswer)
    setUserAnswers(INITIAL_STATE.userAnswers)
    setShowFeedback(INITIAL_STATE.showFeedback)
    setScore(INITIAL_STATE.score)
    setCorrectCount(INITIAL_STATE.correctCount)
    setWrongCount(INITIAL_STATE.wrongCount)
  }, [])

  const calculateAndFinish = useCallback((finalUserAnswers) => {
    let correct = 0
    questions.forEach((q) => {
      const userAnswer = finalUserAnswers[q.id]
      if (userAnswer && userAnswer === q.correctAnswer) correct++
    })
    const wrong = totalQuestions - correct
    const finalScore = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
    const clampedScore = Math.min(100, Math.max(0, finalScore))
    setCorrectCount(correct)
    setWrongCount(wrong)
    setScore(clampedScore)
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
    const topicHw = hardwareData.find((h) => h.id === selectedTopic)
    history.push({ topic: topicHw?.name || selectedTopic, difficulty: selectedDifficulty, score: clampedScore, date: new Date().toISOString() })
    localStorage.setItem('quizHistory', JSON.stringify(history))
    setPhase('result')
  }, [questions, totalQuestions, selectedTopic, selectedDifficulty])

  const handleStartQuiz = () => {
    if (!selectedTopic || !selectedDifficulty) return
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setUserAnswers({})
    setShowFeedback(false)
    setScore(0)
    setCorrectCount(0)
    setWrongCount(0)
    setPhase('quiz')
  }

  const handleSelectAnswer = (option) => { if (showFeedback) return; setSelectedAnswer(option) }
  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedAnswer }))
    setShowFeedback(true)
  }
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1
      const nextQuestion = questions[nextIndex]
      const prevAnswer = userAnswers[nextQuestion.id] || null
      setCurrentQuestionIndex(nextIndex)
      setSelectedAnswer(prevAnswer)
      setShowFeedback(!!prevAnswer)
    }
  }
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1
      const prevQuestion = questions[prevIndex]
      const prevAnswer = userAnswers[prevQuestion.id] || null
      setCurrentQuestionIndex(prevIndex)
      setSelectedAnswer(prevAnswer)
      setShowFeedback(!!prevAnswer)
    }
  }
  const handleFinishQuiz = () => {
    let finalAnswers = { ...userAnswers }
    if (selectedAnswer && currentQuestion) finalAnswers = { ...finalAnswers, [currentQuestion.id]: selectedAnswer }
    calculateAndFinish(finalAnswers)
  }

  const pageVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } }
  const cardVariants = { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.05 } }

  if (phase === 'setup') {
    return (
      <motion.div key="setup" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Database <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Pengujian</span>
            </h1>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">Konfigurasi parameter kuis sebelum memulai evaluasi sistem.</p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            {/* Latar Belakang Tekstur */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none z-0"></div>
            
            <div className="relative z-10">
              {/* Topik Selection */}
              <div className="mb-10">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Pilih Sektor Modul
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topicOptions.map((topic) => (
                    <button key={topic.hardwareId} onClick={() => setSelectedTopic(topic.hardwareId)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${
                        selectedTopic === topic.hardwareId
                          ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.2)] transform scale-[1.02]'
                          : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800'
                      }`}
                    >
                      {selectedTopic === topic.hardwareId && <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />}
                      <p className={`font-bold text-base ${selectedTopic === topic.hardwareId ? 'text-cyan-300' : 'text-slate-200'}`}>{topic.title}</p>
                      <p className="text-xs text-slate-500 mt-1 font-mono tracking-wide">{topic.hardwareName}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Selection */}
              <div className="mb-10">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Parameter Kesulitan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(difficultyConfig).map(([key, config]) => {
                    const Icon = config.icon
                    const isActive = selectedDifficulty === key
                    return (
                      <button key={key} onClick={() => setSelectedDifficulty(key)}
                        className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 ${isActive ? config.activeColor + ' transform scale-[1.05]' : config.color}`}
                      >
                        <Icon className="w-7 h-7" />
                        <span className="text-sm font-bold tracking-wide">{config.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Start Button */}
              <button onClick={handleStartQuiz} disabled={!selectedTopic || !selectedDifficulty}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base hover:from-blue-500 hover:to-purple-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] flex items-center justify-center gap-2 group"
              >
                <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" /> INISIALISASI UJIAN
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (phase === 'quiz' && currentQuestion) {
    return (
      <motion.div key="quiz" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Bar (HUD Style) */}
          <div className="mb-8 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-cyan-400 font-mono tracking-widest">
                SEKTOR {currentQuestionIndex + 1} / {totalQuestions}
              </span>
              <span className="text-xs text-slate-500 font-mono border border-slate-700 px-2 py-1 rounded bg-slate-800">
                LEVEL: {selectedDifficulty.toUpperCase()}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
              <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 relative" initial={{ width: `${(currentQuestionIndex / totalQuestions) * 100}%` }}
                animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={currentQuestion.id} variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              
              {/* Question Card */}
              <div className="bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-10 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none z-0"></div>
                
                <h2 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                  {currentQuestion.text}
                </h2>
                
                <div className="relative z-10 flex flex-col gap-4">
                  {currentQuestion.options.map((option, idx) => {
                    // Penentuan Style Opsi Jawaban
                    let optionStyle = 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800'
                    let letterStyle = 'bg-slate-700 text-slate-400'
                    let textStyle = 'text-slate-300'

                    if (showFeedback) {
                      if (option === currentQuestion.correctAnswer) {
                        optionStyle = 'border-emerald-400 bg-emerald-900/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        letterStyle = 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.8)]'
                        textStyle = 'text-emerald-100 font-semibold'
                      }
                      else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                        optionStyle = 'border-red-500 bg-red-900/20'
                        letterStyle = 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                        textStyle = 'text-red-200'
                      }
                      else {
                        optionStyle = 'border-slate-800 bg-slate-900/50 opacity-40 grayscale'
                      }
                    } else if (option === selectedAnswer) {
                      optionStyle = 'border-cyan-400 bg-cyan-900/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] transform scale-[1.01]'
                      letterStyle = 'bg-cyan-500 text-white shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                      textStyle = 'text-cyan-100 font-bold'
                    }

                    return (
                      <button key={idx} onClick={() => handleSelectAnswer(option)} disabled={showFeedback}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${optionStyle}`}>
                        <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold transition-colors ${letterStyle}`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className={`text-base ${textStyle}`}>{option}</span>
                        
                        {/* Ikon Benar/Salah */}
                        {showFeedback && option === currentQuestion.correctAnswer && <CheckCircle className="w-6 h-6 text-emerald-400 ml-auto flex-shrink-0 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />}
                        {showFeedback && option === selectedAnswer && option !== currentQuestion.correctAnswer && <XCircle className="w-6 h-6 text-red-500 ml-auto flex-shrink-0 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback Box (Terminal Style) */}
              {showFeedback && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  className={`p-5 rounded-2xl border-2 mb-6 font-mono flex items-start gap-3 ${selectedAnswer === currentQuestion.correctAnswer
                    ? 'bg-slate-950 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-950 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]'}`}
                >
                  <Terminal className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    {selectedAnswer === currentQuestion.correctAnswer 
                      ? '✅ Jawaban Benar!.' 
                      : `❌ Jawaban Salah. Jawaban yang benar: ${currentQuestion.correctAnswer}`}
                  </p>
                </motion.div>
              )}

{/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button 
                  onClick={handlePrevQuestion} 
                  disabled={currentQuestionIndex === 0}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> KEMBALI
                </button>
                
                <div className="flex items-center gap-3">
                  {!showFeedback ? (
                    <button 
                      onClick={handleSubmitAnswer} 
                      disabled={!selectedAnswer}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:from-blue-500 hover:to-purple-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    >
                      VERIFIKASI <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : currentQuestionIndex < totalQuestions - 1 ? (
                    <button 
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 border border-slate-800 shadow-md transform hover:-translate-y-0.5"
                    >
                      LANJUTKAN <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button 
                      onClick={handleFinishQuiz}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse"
                    >
                      LIHAT HASIL <Trophy className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  if (phase === 'result') {
    const message = getScoreMessage(score)
    
    return (
      <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none z-0"></div>
            
            {/* Donut Chart Berpendar */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-48 h-48 mx-auto mb-10 z-10">
              <svg className="w-full h-full -rotate-90 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#1e293b" strokeWidth="14" />
                <motion.circle cx="80" cy="80" r="70" fill="none"
                  stroke={score >= 70 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444'} strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                  animate={{ strokeDashoffset: (2 * Math.PI * 70) * (1 - score / 100) }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }} 
                  style={{ filter: `drop-shadow(0 0 8px ${score >= 70 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444'})` }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-5xl font-black font-mono tracking-tighter ${message.color} ${message.shadow}`}>{score}</span>
                <span className="text-xs font-bold text-slate-500 tracking-widest mt-1">/ 100</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="relative z-10">
              <h2 className={`text-3xl font-extrabold mb-3 ${message.color} ${message.shadow}`}>{message.text}</h2>
              <p className="text-slate-400 text-lg">{message.subtext}</p>
            </motion.div>

            {/* Statistik HUD */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
              className="mt-10 bg-slate-950 rounded-2xl border border-slate-800 p-6 relative z-10">
              <div className="grid grid-cols-3 gap-4 divide-x divide-slate-800">
                <div>
                  <p className="text-3xl font-black text-white font-mono">{totalQuestions}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Total Soal</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-emerald-400 font-mono drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">{correctCount}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Valid</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-red-500 font-mono drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">{wrongCount}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Corrupt</p>
                </div>
              </div>
            </motion.div>

            {/* Aksi */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10">
              <button onClick={fullReset}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white font-bold text-sm hover:bg-slate-700 transition-all duration-300"
              ><RotateCcw className="w-5 h-5" /> RESTART MODUL</button>
              
              <Link to="/dashboard"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              ><LayoutDashboard className="w-5 h-5" /> DATA DASHBOARD</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return null
}

export default Quiz
