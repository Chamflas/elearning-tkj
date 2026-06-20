import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, LayoutDashboard, Trophy, Brain, Zap, Star } from 'lucide-react'
import quizData from '../data/quizData'
import hardwareData from '../data/hardwareData'

const difficultyConfig = {
  easy: { label: 'Mudah', icon: Star, color: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100', activeColor: 'bg-emerald-600 text-white border-emerald-600' },
  medium: { label: 'Menengah', icon: Brain, color: 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100', activeColor: 'bg-amber-600 text-white border-amber-600' },
  hard: { label: 'Sulit', icon: Zap, color: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100', activeColor: 'bg-red-600 text-white border-red-600' },
}

const getScoreMessage = (score) => {
  if (score >= 90) return { text: 'Luar Biasa! 🎉', subtext: 'Kamu benar-benar menguasai materi ini!', color: 'text-emerald-600' }
  if (score >= 80) return { text: 'Sangat Bagus! 👏', subtext: 'Pemahamanmu sangat baik, pertahankan!', color: 'text-emerald-600' }
  if (score >= 70) return { text: 'Bagus! 👍', subtext: 'Cukup menguasai, tapi masih bisa ditingkatkan.', color: 'text-amber-600' }
  if (score >= 50) return { text: 'Lumayan 📚', subtext: 'Beberapa konsep perlu dipelajari ulang.', color: 'text-amber-600' }
  return { text: 'Ayo Belajar Lagi! 💪', subtext: 'Jangan menyerah, ulangi materi dan coba lagi!', color: 'text-red-600' }
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

  // ---- Derived Data ----
  const topicOptions = useMemo(() => {
    return quizData.map((quiz) => {
      const hw = hardwareData.find((h) => h.id === quiz.hardwareId)
      return { ...quiz, hardwareName: hw?.name || quiz.hardwareId }
    })
  }, [])

  const currentQuiz = useMemo(() => {
    if (!selectedTopic) return null
    return quizData.find((q) => q.hardwareId === selectedTopic)
  }, [selectedTopic])

  const questions = useMemo(() => {
    if (!currentQuiz || !selectedDifficulty) return []
    return currentQuiz.questions[selectedDifficulty] || []
  }, [currentQuiz, selectedDifficulty])

  const currentQuestion = questions[currentQuestionIndex] || null
  const totalQuestions = questions.length
  const progressPercent = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0

  // ---- Full Reset ----
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

  // ---- Calculate Score (only called once at the end) ----
  const calculateAndFinish = useCallback((finalUserAnswers) => {
    let correct = 0
    questions.forEach((q) => {
      const userAnswer = finalUserAnswers[q.id]
      if (userAnswer && userAnswer === q.correctAnswer) {
        correct++
      }
    })
    const wrong = totalQuestions - correct
    const finalScore = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
    const clampedScore = Math.min(100, Math.max(0, finalScore))

    setCorrectCount(correct)
    setWrongCount(wrong)
    setScore(clampedScore)

    // Save to localStorage
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
    const topicHw = hardwareData.find((h) => h.id === selectedTopic)
    history.push({
      topic: topicHw?.name || selectedTopic,
      difficulty: selectedDifficulty,
      score: clampedScore,
      date: new Date().toISOString(),
    })
    localStorage.setItem('quizHistory', JSON.stringify(history))

    setPhase('result')
  }, [questions, totalQuestions, selectedTopic, selectedDifficulty])

  // ---- Handlers ----
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

  const handleSelectAnswer = (option) => {
    if (showFeedback) return
    setSelectedAnswer(option)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return

    // Store answer in userAnswers object (keyed by questionId)
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer,
    }))
    setShowFeedback(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      // Restore previously selected answer if user already answered this question
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
    // Ensure current answer is saved before finishing
    let finalAnswers = { ...userAnswers }
    if (selectedAnswer && currentQuestion) {
      finalAnswers = {
        ...finalAnswers,
        [currentQuestion.id]: selectedAnswer,
      }
    }
    calculateAndFinish(finalAnswers)
  }

  // ---- Animation Variants ----
  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  }

  const cardVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  }

  // ==================== RENDER: SETUP PHASE ====================
  if (phase === 'setup') {
    return (
      <motion.div key="setup" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-800">Kuis Hardware PC</h1>
            <p className="mt-2 text-slate-500">Uji pemahamanmu tentang komponen komputer</p>
          </div>

          {/* Pilih Topik */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Pilih Topik</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topicOptions.map((topic) => (
                <button
                  key={topic.hardwareId}
                  onClick={() => setSelectedTopic(topic.hardwareId)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedTopic === topic.hardwareId
                      ? 'border-indigo-500 bg-indigo-50 shadow-md shadow-indigo-100'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <p className="font-semibold text-slate-800 text-sm">{topic.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{topic.hardwareName}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Pilih Difficulty */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Tingkat Kesulitan</h2>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(difficultyConfig).map(([key, config]) => {
                const Icon = config.icon
                const isActive = selectedDifficulty === key
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedDifficulty(key)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                      isActive ? config.activeColor + ' shadow-md' : config.color
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{config.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tombol Mulai */}
          <button
            onClick={handleStartQuiz}
            disabled={!selectedTopic || !selectedDifficulty}
            className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            Mulai Kuis
          </button>
        </div>
      </motion.div>
    )
  }

  // ==================== RENDER: QUIZ PHASE ====================
  if (phase === 'quiz' && currentQuestion) {
    const hasAnsweredCurrent = userAnswers.hasOwnProperty(currentQuestion.id)

    return (
      <motion.div key="quiz" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
        <div className="max-w-2xl mx-auto">
          {/* Header: Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500">
                Soal {currentQuestionIndex + 1} dari {totalQuestions}
              </span>
              <span className="text-xs text-slate-400">
                {selectedDifficulty === 'easy' ? 'Mudah' : selectedDifficulty === 'medium' ? 'Menengah' : 'Sulit'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-600 rounded-full"
                initial={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Pertanyaan */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-6">{currentQuestion.text}</h2>

                {/* Opsi Jawaban */}
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option, idx) => {
                    let optionStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'

                    if (showFeedback) {
                      if (option === currentQuestion.correctAnswer) {
                        optionStyle = 'border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200'
                      } else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                        optionStyle = 'border-red-400 bg-red-50 ring-1 ring-red-200'
                      } else {
                        optionStyle = 'border-slate-100 bg-slate-50 opacity-50'
                      }
                    } else if (option === selectedAnswer) {
                      optionStyle = 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-200'
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(option)}
                        disabled={showFeedback}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${optionStyle}`}
                      >
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
                          showFeedback && option === currentQuestion.correctAnswer
                            ? 'bg-emerald-600 text-white'
                            : showFeedback && option === selectedAnswer && option !== currentQuestion.correctAnswer
                            ? 'bg-red-600 text-white'
                            : selectedAnswer === option
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm text-slate-700">{option}</span>
                        {showFeedback && option === currentQuestion.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto flex-shrink-0" />
                        )}
                        {showFeedback && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-600 ml-auto flex-shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback Text */}
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border mb-6 ${
                    selectedAnswer === currentQuestion.correctAnswer
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}
                >
                  <p className="text-sm font-medium">
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? '✅ Jawaban Benar!'
                      : `❌ Jawaban Salah. Jawaban yang benar: ${currentQuestion.correctAnswer}`}
                  </p>
                </motion.div>
              )}

              {/* Tombol Navigasi */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali
                </button>

                <div className="flex items-center gap-3">
                  {!showFeedback ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                      Jawab
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : currentQuestionIndex < totalQuestions - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-sm"
                    >
                      Selanjutnya
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleFinishQuiz}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-sm"
                    >
                      Lihat Hasil
                      <Trophy className="w-4 h-4" />
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

  // ==================== RENDER: RESULT PHASE ====================
  if (phase === 'result') {
    return (
      <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
        <div className="max-w-lg mx-auto text-center">
          {/* Score Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="none" stroke="#e2e8f0" strokeWidth="12" />
              <motion.circle
                cx="80" cy="80" r="70" fill="none"
                stroke={score >= 70 ? '#059669' : score >= 50 ? '#d97706' : '#dc2626'}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 70}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                animate={{ strokeDashoffset: (2 * Math.PI * 70) * (1 - score / 100) }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-800">{score}</span>
              <span className="text-xs text-slate-400">dari 100</span>
            </div>
          </motion.div>

          {/* Score Message */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h2 className={`text-2xl font-bold ${getScoreMessage(score).color}`}>{getScoreMessage(score).text}</h2>
            <p className="text-slate-500 mt-2">{getScoreMessage(score).subtext}</p>
          </motion.div>

          {/* Detail */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6"
          >
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-slate-800">{totalQuestions}</p>
                <p className="text-xs text-slate-400">Total Soal</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">{correctCount}</p>
                <p className="text-xs text-slate-400">Benar</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{wrongCount}</p>
                <p className="text-xs text-slate-400">Salah</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={fullReset}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-all duration-200 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Kembali ke Pilihan Kuis
            </button>
            <Link
              to="/dashboard"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-200"
            >
              <LayoutDashboard className="w-4 h-4" />
              Lihat Dashboard
            </Link>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return null
}

export default Quiz