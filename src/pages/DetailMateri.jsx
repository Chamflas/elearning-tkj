import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  ImageIcon,
  Cpu,
  Monitor,
  MemoryStick,
  CircuitBoard,
  HardDrive,
  Zap,
  Box,
  Play,
  Keyboard,
  Tv,
} from "lucide-react";
import hardwareData from "../data/hardwareData";

const iconMap = {
  Cpu,
  Monitor,
  MemoryStick,
  CircuitBoard,
  HardDrive,
  Zap,
  Box,
  Keyboard,
  Tv,
};

const DetailMateri = () => {
  const { id } = useParams();
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const [openDetails, setOpenDetails] = useState({});

  const component = hardwareData.find((item) => item.id === id);

  useEffect(() => {
    setActiveSubIndex(0);
    setImageKey((prev) => prev + 1);
    setOpenDetails({});
    window.scrollTo(0, 0);
  }, [id]);

  if (!component) {
    return <Navigate to="/materi" replace />;
  }

  const IconComponent = iconMap[component.icon] || Box;
  const activeSub = component.subMaterials[activeSubIndex];

  const handleSubChange = (index) => {
    setActiveSubIndex(index);
    setImageKey((prev) => prev + 1);
    setOpenDetails({});
  };

  const toggleDetail = (detailIndex) => {
    setOpenDetails((prev) => ({
      ...prev,
      [detailIndex]: !prev[detailIndex],
    }));
  };

  return (
    <div>
      {/* ---- Breadcrumbs ---- */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-6">
        <Link
          to="/materi"
          className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          Materi
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-600 dark:text-slate-300 font-medium truncate">
          {component.name}
        </span>
      </nav>

      {/* ---- Two-Column Layout ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ====== Sidebar Kiri (1/4) ====== */}
        <aside className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 overflow-hidden sticky top-20">
            <div className="p-5 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-indigo-50 to-slate-50 dark:from-indigo-900/30 dark:to-slate-800">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white truncate">
                    {component.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {component.subMaterials.length} sub-materi
                  </p>
                </div>
              </div>
            </div>

            <nav className="p-3 flex flex-col gap-1">
              {component.subMaterials.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => handleSubChange(index)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    activeSubIndex === index
                      ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium shadow-sm ring-1 ring-indigo-100 dark:ring-indigo-800"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                      activeSubIndex === index
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="truncate leading-tight">{sub.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ====== Konten Kanan (3/4) ====== */}
        <main className="lg:col-span-3">
          {/* 1. Gambar Sub-Materi (Dinamis) */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 overflow-hidden mb-6">
            <div className="relative w-full max-h-[400px] overflow-hidden">
              <img
                key={imageKey}
                src={activeSub.imageUrl}
                alt={activeSub.title}
                className="w-full max-h-[400px] object-cover animate-fadeIn"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement
                    .querySelector(".fallback")
                    .classList.remove("hidden");
                }}
              />
              <div className="fallback hidden w-full h-48 sm:h-64 lg:h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                  <span className="text-sm text-slate-400 dark:text-slate-500">
                    Gambar {activeSub.title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Teks Utama + Judul */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white text-sm font-bold shadow-sm">
                {activeSubIndex + 1}
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  {activeSub.title}
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {activeSubIndex + 1} dari {component.subMaterials.length}{" "}
                  sub-materi
                </p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[15px]">
                {activeSub.content}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Progres Sub-Materi
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {Math.round(
                    ((activeSubIndex + 1) / component.subMaterials.length) *
                      100,
                  )}
                  %
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeSubIndex + 1) / component.subMaterials.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* 3. Accordion: Detail Points */}
          {activeSub.details && activeSub.details.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 p-6 sm:p-8 mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                📋 Detail Komponen
              </h3>
              <div className="flex flex-col gap-2">
                {activeSub.details.map((detail, index) => {
                  const isOpen = !!openDetails[index];
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleDetail(index)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-800 dark:text-white">
                          {detail.name}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-4 pt-2 bg-slate-50/50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700">
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {detail.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Video Player */}
          {activeSub.videoUrl && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 p-6 sm:p-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  🎬 Video Animasi Pendukung
                </h3>
              </div>
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="aspect-video">
                  <iframe
                    src={activeSub.videoUrl}
                    title={`Video: ${activeSub.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 5. Navigasi Previous / Next */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => handleSubChange(Math.max(0, activeSubIndex - 1))}
              disabled={activeSubIndex === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Sebelumnya
            </button>

            <Link
              to="/materi"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Kembali ke Daftar Materi
            </Link>

            <button
              onClick={() =>
                handleSubChange(
                  Math.min(
                    component.subMaterials.length - 1,
                    activeSubIndex + 1,
                  ),
                )
              }
              disabled={activeSubIndex === component.subMaterials.length - 1}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm shadow-indigo-200 dark:shadow-indigo-900/50"
            >
              Selanjutnya
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>

          {/* Mobile back link */}
          <div className="flex justify-center mt-4 sm:hidden">
            <Link
              to="/materi"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Materi
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailMateri;
