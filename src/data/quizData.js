const quizData = [
  // ==================== CPU (PROSESOR) ====================
  {
    hardwareId: "cpu",
    title: "Kuis CPU (Central Processing Unit)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apakah kepanjangan dari CPU?",
          options: [
            "Control Processing Unit",
            "Computer Processing Unit",
            "Central Processing Unit",
            "Core Processing Unit",
          ],
          correctAnswer: "Central Processing Unit",
        },
        {
          id: 2,
          text: "Apa yang dimaksud dengan CPU?",
          options: [
            "Otak utama komputer yang mengeksekusi instruksi dan mengendalikan seluruh komponen sistem",
            "Perangkat keras yang digunakan untuk menyimpan data secara permanen",
            "Perangkat yang digunakan untuk menampilkan gambar pada layar monitor",
            "Alat untuk menyuplai daya listrik ke seluruh sirkuit komputer",
          ],
          correctAnswer:
            "Otak utama komputer yang mengeksekusi instruksi dan mengendalikan seluruh komponen sistem",
        },
        {
          id: 3,
          text: "Kecepatan kerja sebuah CPU umumnya diukur menggunakan satuan...",
          options: ["Megabyte", "Watt", "GHz (Gigahertz)", "RPM"],
          correctAnswer: "GHz (Gigahertz)",
        },
        {
          id: 4,
          text: "Berikut yang termasuk produsen CPU utama di pasaran saat ini adalah...",
          options: [
            "Intel dan AMD",
            "NVIDIA dan AMD Radeon",
            "Kingston dan Corsair",
            "Gigabyte dan ASUS",
          ],
          correctAnswer: "Intel dan AMD",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Semakin tinggi nilai Clock Speed suatu CPU, maka...",
          options: [
            "Semakin cepat CPU mengeksekusi instruksi",
            "Semakin besar kapasitas penyimpanan data di dalam sistem",
            "Semakin besar ukuran monitor yang dibutuhkan",
            "Semakin stabil tegangan listrik yang masuk ke CPU",
          ],
          correctAnswer: "Semakin cepat CPU mengeksekusi instruksi",
        },
        {
          id: 6,
          text: "Apa fungsi Cache Memory pada CPU?",
          options: [
            "Menyimpan sistem operasi secara permanen agar tidak hilang",
            "Menyimpan data yang paling sering diakses agar proses komputasi lebih cepat",
            "Menampilkan hasil pemrosesan grafis ke layar monitor",
            "Mencegah CPU mengalami penurunan tegangan listrik",
          ],
          correctAnswer:
            "Menyimpan data yang sering diakses agar proses lebih cepat",
        },
        {
          id: 7,
          text: "Teknologi Hyper-Threading (Intel) atau SMT (AMD) memungkinkan...",
          options: [
            "CPU bekerja secara optimal tanpa memerlukan RAM sistem",
            "Dua motherboard dapat menggunakan satu CPU secara bersamaan",
            "Satu core fisik dapat menangani dua thread logis sekaligus",
            "Kecepatan clock meningkat dua kali lipat secara permanen",
          ],
          correctAnswer: "Satu core menangani dua thread sekaligus",
        },
        {
          id: 8,
          text: "Fungsi utama CPU selain mengeksekusi instruksi program adalah...",
          options: [
            "Menyimpan data pengguna secara permanen",
            "Mengontrol aliran data antar komponen di dalam komputer",
            "Mencetak dokumen digital ke media kertas fisik",
            "Mengubah arus listrik AC menjadi arus DC",
          ],
          correctAnswer: "Mengontrol aliran data antar komponen komputer",
        },
        {
          id: 9,
          text: 'Apa yang dimaksud dengan "core" fisik di dalam CPU?',
          options: [
            "Memori cadangan berkecepatan tinggi di dekat CPU",
            "Unit pemrosesan fisik mandiri yang mengeksekusi data di dalam CPU",
            "Kipas pendingin yang menempel di atas prosesor",
            "Konektor jalur daya listrik utama",
          ],
          correctAnswer: "Unit pemrosesan fisik di dalam CPU",
        },
        {
          id: 10,
          text: "Cache level mana yang memiliki kapasitas penyimpanan paling besar di dalam CPU?",
          options: ["L1 Cache", "L2 Cache", "L3 Cache", "L4 Cache"],
          correctAnswer: "L3 Cache",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Sebuah CPU memiliki nilai TDP lebih dari 95 Watt. Berdasarkan materi, tindakan yang paling tepat saat merakitnya adalah...",
          options: [
            "Menggunakan pendingin tambahan (Aftermarket Cooling)",
            "Mengurangi kapasitas RAM sistem agar suhu menurun",
            "Mengganti monitor dengan resolusi yang lebih rendah",
            "Menurunkan tegangan listrik rumah secara manual",
          ],
          correctAnswer: "Menggunakan pendingin tambahan (Aftermarket Cooling)",
        },
        {
          id: 12,
          text: "Seorang pengguna sering menjalankan banyak aplikasi sekaligus dan membutuhkan performa multitasking yang baik. Komponen CPU yang paling berpengaruh terhadap kebutuhan tersebut adalah...",
          options: [
            "Ukuran dimensi casing komputer",
            "Jumlah Core dan Thread pada CPU",
            "Jenis monitor yang digunakan pengguna",
            "Kecepatan putar kipas power supply",
          ],
          correctAnswer: "Jumlah Core dan Thread",
        },
        {
          id: 13,
          text: "Perhatikan pernyataan berikut!\n1) L1 merupakan Cache yang paling cepat dan paling kecil.\n2) L3 merupakan Cache yang paling besar dan dibagi antar core.\n3) Cache digunakan untuk menyimpan data yang sering diakses.\nManakah pernyataan yang benar?",
          options: [
            "Benar Semua",
            "Hanya 1 dan 3",
            "Hanya 2 dan 3",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 14,
          text: "Berdasarkan materi pembelajaran, suhu kerja ideal CPU saat berada dalam kondisi beban penuh (Full Load) sebaiknya berada di kisaran...",
          options: ["30–45°C", "90–110°C", "60–85°C", "10–25°C"],
          correctAnswer: "60–85°C",
        },
        {
          id: 15,
          text: "Apa perbedaan mendasar antara arsitektur CPU CISC (seperti x86) dan RISC (seperti ARM)?",
          options: [
            "CISC menggunakan instruksi sederhana, sedangkan RISC menggunakan instruksi kompleks",
            "CISC mengutamakan instruksi kompleks namun ringkas di software, sedangkan RISC menggunakan instruksi sederhana yang dieksekusi sangat cepat",
            "CISC hanya mendukung sistem 32-bit, sedangkan RISC mendukung sistem 64-bit",
            "CISC tidak menghasilkan panas sama sekali dibanding RISC",
          ],
          correctAnswer:
            "CISC mengutamakan instruksi kompleks namun ringkas di software, sedangkan RISC menggunakan instruksi sederhana yang dieksekusi sangat cepat",
        },
        {
          id: 16,
          text: 'Apa yang dimaksud dengan "binning" dalam proses manufaktur CPU?',
          options: [
            "Proses membuang inti sasis CPU yang cacat",
            "Proses pengelompokan CPU hasil produksi berdasarkan kualitas silikon dan performa aktualnya",
            "Proses mengoleskan thermal paste ke atas permukaan logam CPU",
            "Proses peningkatan clock speed melewati batas aman pabrik",
          ],
          correctAnswer:
            "Proses pengelompokan CPU hasil produksi berdasarkan kualitas silikon dan performa aktualnya",
        },
        {
          id: 17,
          text: "Apa pengaruh fabrikasi (process node) 5nm vs 7nm pada performa dan efisiensi CPU?",
          options: [
            "Tidak ada pengaruh yang signifikan bagi kestabilan sirkuit",
            "Ukuran transistor 5nm lebih kecil → muat lebih banyak transistor → CPU bekerja lebih cepat dan jauh lebih hemat daya",
            "Ukuran 7nm lebih cepat karena jalur data tembaganya lebih lebar",
            "Fabrikasi 5nm hanya membuat ukuran fisik CPU menjadi sangat kecil",
          ],
          correctAnswer:
            "Ukuran transistor 5nm lebih kecil → muat lebih banyak transistor → CPU bekerja lebih cepat dan jauh lebih hemat daya",
        },
      ],
    },
  },

  // ==================== GPU (GRAFIS) ====================
  {
    hardwareId: "gpu",
    title: "Kuis GPU (Graphics Processing Unit)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apa yang dimaksud dengan GPU?",
          options: [
            "Perangkat penyimpanan data pada komputer",
            "Prosesor khusus grafis yang mengolah tampilan visual dan rendering",
            "Perangkat yang digunakan untuk mencetak dokumen kertas",
            "Alat untuk menstabilkan tegangan listrik motherboard",
          ],
          correctAnswer:
            "Prosesor khusus grafis yang mengolah tampilan visual dan rendering",
        },
        {
          id: 2,
          text: "Salah satu fungsi utama dari GPU adalah...",
          options: [
            "Menghubungkan jaringan komputer ke internet",
            "Menyimpan sistem operasi secara permanen",
            "Mengolah data grafis seperti gambar, video, dan animasi 3D",
            "Mengontrol kecepatan putaran piringan hard disk",
          ],
          correctAnswer:
            "Mengolah data grafis seperti gambar, video, dan animasi 3D",
        },
        {
          id: 3,
          text: "Manakah yang termasuk ke dalam contoh GPU Diskrit (Kartu Grafis terpisah)?",
          options: [
            "Intel UHD Graphics",
            "NVIDIA GeForce",
            "AMD Radeon Graphics (Terintegrasi)",
            "Intel Iris Xe",
          ],
          correctAnswer: "NVIDIA GeForce",
        },
        {
          id: 4,
          text: "Selain untuk mengolah grafis, GPU modern saat ini juga dapat digunakan secara luas untuk kebutuhan...",
          options: [
            "Menyimpan file dokumen pengguna secara permanen",
            "Mencetak berkas gambar berukuran besar",
            "Akselerasi komputasi kecerdasan buatan (AI/Machine Learning)",
            "Mengatur suplai daya kelistrikan casing",
          ],
          correctAnswer: "AI/Machine Learning",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Perbedaan utama antara GPU Terintegrasi (iGPU) dan GPU Diskrit (dGPU) adalah...",
          options: [
            "iGPU memiliki VRAM sendiri, sedangkan GPU diskrit menggunakan memori RAM sistem",
            "iGPU menggunakan memori RAM sistem, sedangkan GPU diskrit memiliki memori VRAM mandiri",
            "iGPU hanya digunakan untuk gaming berat, sedangkan dGPU khusus untuk mengetik dokumen",
            "iGPU membutuhkan power supply tambahan, sedangkan dGPU tidak",
          ],
          correctAnswer:
            "iGPU menggunakan memori RAM sistem, sedangkan GPU diskrit memiliki memori VRAM mandiri",
        },
        {
          id: 6,
          text: "VRAM (Video RAM) pada GPU berfungsi khusus untuk...",
          options: [
            "Menyimpan sistem operasi agar booting cepat",
            "Menyimpan file data pengguna secara permanen",
            "Menyimpan data tekstur, frame buffer, dan data grafis yang sedang diproses",
            "Mengatur frekuensi sirkuit kelistrikan monitor",
          ],
          correctAnswer: "Menyimpan tekstur, frame buffer, dan data grafis",
        },
        {
          id: 7,
          text: "NVIDIA menggunakan istilah... untuk core GPU paralelnya, sedangkan AMD menggunakan istilah...",
          options: [
            "Hyper Core dan Smart Core",
            "Processing Core dan Graphic Core",
            "CUDA Cores dan Stream Processors",
            "Tensor Cores dan Matrix Processors",
          ],
          correctAnswer: "CUDA Cores dan Stream Processors",
        },
        {
          id: 8,
          text: "Kapasitas VRAM yang umumnya termasuk ke dalam kategori Mainstream (standar nyaman saat ini) adalah...",
          options: ["8 GB", "24 GB+", "4 GB", "2 GB"],
          correctAnswer: "8 GB",
        },
        {
          id: 9,
          text: "Mengapa dGPU (GPU diskrit) membutuhkan kipas pendingin dan heatsink yang besar?",
          options: [
            "Hanya sebagai aksesoris estetika casing",
            "Karena dGPU memproses ribuan data secara paralel yang menghasilkan panas tinggi",
            "Agar ukuran fisiknya muat di casing mini-ITX",
            "Untuk mengalirkan arus daya AC langsung dari stop kontak",
          ],
          correctAnswer:
            "Karena dGPU memproses ribuan data secara paralel yang menghasilkan panas tinggi",
        },
        {
          id: 10,
          text: "Apakah tipe VRAM yang paling banyak digunakan pada kartu grafis kelas atas saat ini?",
          options: ["DDR5", "SDRAM", "GDDR6 atau GDDR6X", "SATA III"],
          correctAnswer: "GDDR6 atau GDDR6X",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Perhatikan pernyataan berikut!\n1) GPU diskrit memiliki VRAM sendiri.\n2) GPU terintegrasi menggunakan RAM sistem.\n3) GPU digunakan untuk rendering grafis dan komputasi AI.\nManakah pernyataan yang benar?",
          options: [
            "Benar Semua",
            "Hanya 1 dan 2",
            "Hanya 2 dan 3",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 12,
          text: "Seorang editor video profesional dan desainer 3D membutuhkan performa komputasi grafis yang sangat tinggi. Jenis GPU yang paling sesuai adalah...",
          options: [
            "Soundcard",
            "GPU Terintegrasi (iGPU)",
            "GPU Diskrit (dGPU)",
            "iGPU dengan RAM 4GB",
          ],
          correctAnswer: "GPU Diskrit (dGPU)",
        },
        {
          id: 13,
          text: "Teknologi pada GPU modern yang digunakan untuk mensimulasikan pencahayaan realistis (pantulan, bayangan lembut, dan pencahayaan global) di dalam game disebut...",
          options: ["VRAM", "Ray Tracing", "Stream Processor", "CUDA Core"],
          correctAnswer: "Ray Tracing",
        },
        {
          id: 14,
          text: "Teknologi DLSS pada GPU NVIDIA dan FSR pada GPU AMD digunakan untuk...",
          options: [
            "Meningkatkan performa FPS melalui teknologi upscaling gambar berbasis kecerdasan buatan (AI)",
            "Menghubungkan sirkuit fisik GPU ke motherboard secara langsung",
            "Menambah kapasitas fisik memori VRAM GPU",
            "Mengurangi konsumsi listrik kipas pendingin",
          ],
          correctAnswer:
            "Meningkatkan performa FPS melalui teknologi upscaling gambar berbasis kecerdasan buatan (AI)",
        },
        {
          id: 15,
          text: "Mengapa iGPU (Integrated GPU) performanya lebih lambat dibandingkan dGPU (Discrete GPU) saat menjalankan game berat?",
          options: [
            "Karena iGPU tidak terhubung ke CPU",
            "Karena iGPU tidak memiliki VRAM sendiri dan harus berbagi bandwidth memori RAM utama yang kecepatannya terbatas",
            "Karena iGPU tidak memiliki slot sasis PCIe x16",
            "Karena iGPU menggunakan teknologi sirkuit analog lawas",
          ],
          correctAnswer:
            "Karena iGPU tidak memiliki VRAM sendiri dan harus berbagi bandwidth memori RAM utama yang kecepatannya terbatas",
        },
        {
          id: 16,
          text: "Apa fungsi dari RT Cores (Ray Tracing Cores) khusus pada GPU NVIDIA modern?",
          options: [
            "Untuk mempercepat kecepatan pengisian daya baterai laptop",
            "Untuk menangani kalkulasi matematika khusus pelacakan cahaya secara real-time agar performa game tetap lancar",
            "Untuk mengkompres file tekstur di dalam SSD NVMe",
            "Untuk mengkloning thread prosesor agar multitasking lancar",
          ],
          correctAnswer:
            "Untuk menangani kalkulasi matematika khusus pelacakan cahaya secara real-time agar performa game tetap lancar",
        },
        {
          id: 17,
          text: "Bagaimana peran AI Tensor Cores pada GPU modern dalam mempengaruhi kualitas visual game?",
          options: [
            "Menggantikan fungsi RAM utama sistem",
            "Menjalankan algoritma deep learning untuk upscaling cerdas (seperti DLSS) demi gambar tajam dengan FPS tinggi",
            "Mencegah casing komputer mengalami getaran berlebih",
            "Mengatur frekuensi refresh rate layar secara mekanis",
          ],
          correctAnswer:
            "Menjalankan algoritma deep learning untuk upscaling cerdas (seperti DLSS) demi gambar tajam dengan FPS tinggi",
        },
      ],
    },
  },

  // ==================== RAM ====================
  {
    hardwareId: "ram",
    title: "Kuis RAM (Random Access Memory)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apa yang dimaksud dengan RAM?",
          options: [
            "Memori sementara berkecepatan tinggi yang menyimpan data aktif untuk akses cepat oleh CPU",
            "Media penyimpanan permanen untuk menyimpan seluruh data sistem operasi",
            "Perangkat yang digunakan untuk menampilkan sirkuit gambar ke monitor",
            "Unit penyuplai daya kelistrikan utama motherboard",
          ],
          correctAnswer:
            "Memori sementara berkecepatan tinggi yang menyimpan data aktif untuk akses cepat oleh CPU",
        },
        {
          id: 2,
          text: "Apakah kepanjangan dari RAM?",
          options: [
            "Random Accessibility Memory",
            "Rasio Access Memory",
            "Random Access Memory",
            "Rapid Application Module",
          ],
          correctAnswer: "Random Access Memory",
        },
        {
          id: 3,
          text: "Manakah yang termasuk jenis standar RAM modern yang disebutkan di dalam materi?",
          options: ["DDR5", "SSD", "SATA", "HDD"],
          correctAnswer: "DDR5",
        },
        {
          id: 4,
          text: "Data yang tersimpan di dalam RAM komputer akan...",
          options: [
            "Tetap tersimpan dengan aman meskipun komputer dimatikan",
            "Hilang secara otomatis saat komputer dimatikan (volatile)",
            "Pindah secara otomatis ke layar monitor",
            "Menjadi permanen setelah 5 menit disimpan",
          ],
          correctAnswer:
            "Hilang secara otomatis saat komputer dimatikan (volatile)",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Apakah fungsi utama dari memori RAM?",
          options: [
            "Menampilkan hasil output visual langsung ke monitor",
            "Menghubungkan sirkuit jaringan komputer ke internet",
            "Menjembatani kesenjangan kecepatan yang sangat jauh antara CPU yang super cepat dan media penyimpanan (storage)",
            "Mengubah arus AC dari stop kontak menjadi arus DC",
          ],
          correctAnswer:
            "Menjembatani kesenjangan kecepatan yang sangat jauh antara CPU yang super cepat dan media penyimpanan (storage)",
        },
        {
          id: 6,
          text: 'Berdasarkan materi, kapasitas RAM yang menjadi "sweet spot" (paling direkomendasikan dan nyaman) untuk gaming dan multitasking saat ini adalah...',
          options: ["16 GB", "8 GB", "64 GB", "4 GB"],
          correctAnswer: "16 GB",
        },
        {
          id: 7,
          text: "Dibandingkan dengan DDR4, teknologi memori DDR5 terbaru memiliki keunggulan berupa...",
          options: [
            "Kecepatan transfer yang lebih rendah dan kebutuhan tegangan listrik lebih tinggi",
            "Bandwidth transfer yang jauh lebih tinggi dan kebutuhan tegangan operasi yang lebih rendah",
            "Kapasitas kepingan memori yang selalu berukuran kecil",
            "Tidak membutuhkan motherboard yang kompatibel khusus",
          ],
          correctAnswer:
            "Bandwidth transfer yang jauh lebih tinggi dan kebutuhan tegangan operasi yang lebih rendah",
        },
        {
          id: 8,
          text: "Berdasarkan materi, kapasitas RAM yang direkomendasikan untuk kebutuhan berat seperti editing video harian dan streaming adalah...",
          options: ["32 GB", "8 GB", "16 GB", "4 GB"],
          correctAnswer: "32 GB",
        },
        {
          id: 9,
          text: "Apakah peran utama dari PMIC (Power Management Integrated Circuit) yang menempel langsung di modul RAM DDR5?",
          options: [
            "Mendinginkan suhu panas chip memori",
            "Mengatur dan menstabilkan tegangan daya listrik langsung di kepingan RAM agar lebih efisien",
            "Menyimpan salinan BIOS motherboard",
            "Menghitung kecepatan clock RAM secara dinamis",
          ],
          correctAnswer:
            "Mengatur dan menstabilkan tegangan daya listrik langsung di kepingan RAM agar lebih efisien",
        },
        {
          id: 10,
          text: 'Apa kepanjangan dari teknologi standar RAM modern "DDR"?',
          options: [
            "Direct Data Rate",
            "Double Data Rate",
            "Dynamic Data Registry",
            "Digital Data Recovery",
          ],
          correctAnswer: "Double Data Rate",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Konfigurasi Dual Channel pada RAM bekerja maksimal dengan menggunakan...",
          options: [
            "Satu keping RAM tunggal dengan kapasitas yang sangat besar",
            "Empat keping RAM dengan kapasitas dan merek yang berbeda-beda",
            "Dua keping RAM yang identik dan dipasangkan pada slot motherboard yang berpasangan",
            "Menghubungkan RAM internal dengan RAM eksternal via USB",
          ],
          correctAnswer:
            "Dua keping RAM yang identik dan dipasangkan pada slot motherboard yang berpasangan",
        },
        {
          id: 12,
          text: "Perhatikan pernyataan berikut!\n1) DDR3 sudah dianggap usang/kuno.\n2) DDR5 memiliki bandwidth lebih tinggi dibanding DDR4.\n3) DDR5 menggunakan tegangan listrik yang lebih rendah dibanding DDR4.\nManakah pernyataan yang benar?",
          options: [
            "Benar Semua",
            "Hanya 2 dan 3",
            "Hanya 1 dan 3",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 13,
          text: "Kombinasi spesifikasi RAM manakah yang paling baik untuk menghasilkan memori yang sangat responsif?",
          options: [
            "Frekuensi (MHz) Tinggi dan CAS Latency (CL) Rendah",
            "Frekuensi (MHz) Rendah dan CAS Latency (CL) Rendah",
            "Frekuensi (MHz) Rendah dan CAS Latency (CL) Tinggi",
            "Frekuensi (MHz) Tinggi dan CAS Latency (CL) Tinggi",
          ],
          correctAnswer: "Frekuensi (MHz) Tinggi dan CAS Latency (CL) Rendah",
        },
        {
          id: 14,
          text: "Platform komputer kelas atas / profesional (HEDT) mendukung lebar jalur komunikasi data RAM yang sangat besar hingga...",
          options: [
            "Single Channel",
            "Dual Channel",
            "Quad Channel",
            "Octa Channel",
          ],
          correctAnswer: "Quad Channel",
        },
        {
          id: 15,
          text: "Mengapa CAS Latency (CL) yang lebih rendah dinilai sangat penting bagi responsivitas CPU saat mengakses RAM?",
          options: [
            "Karena CL rendah menunjukkan kapasitas RAM lebih hemat daya",
            "Karena CL rendah berarti waktu jeda respons RAM dalam menjawab perintah CPU lebih singkat",
            "Karena CL rendah meningkatkan suhu dingin chip memori",
            "Karena CL rendah membuat RAM kompatibel di semua generasi motherboard",
          ],
          correctAnswer:
            "Karena CL rendah berarti waktu jeda respons RAM dalam menjawab perintah CPU lebih singkat",
        },
        {
          id: 16,
          text: "Apa fungsi dari teknologi XMP (Extreme Memory Profile) atau EXPO pada modul RAM?",
          options: [
            "Profil bawaan di chip RAM untuk mengaktifkan kecepatan overclocking aman yang diiklankan lewat satu klik di BIOS",
            "Mengunci kecepatan RAM agar berada di batas terbawah standar JEDEC",
            "Membatasi konsumsi daya listrik RAM agar tidak panas",
            "Menghubungkan sirkuit audio dari headset langsung ke RAM",
          ],
          correctAnswer:
            "Profil bawaan di chip RAM untuk mengaktifkan kecepatan overclocking aman yang diiklankan lewat satu klik di BIOS",
        },
        {
          id: 17,
          text: "Apa perbedaan mendasar antara memori standar DIMM dan SO-DIMM?",
          options: [
            "DIMM digunakan untuk smartphone, sedangkan SO-DIMM digunakan khusus untuk PC server",
            "SO-DIMM memiliki ukuran fisik lebih kecil yang dirancang untuk laptop, sedangkan DIMM berukuran panjang untuk PC desktop",
            "DIMM memiliki kecepatan transfer data yang lebih lambat dibanding SO-DIMM",
            "SO-DIMM menggunakan jalur analog, sedangkan DIMM menggunakan jalur digital murni",
          ],
          correctAnswer:
            "SO-DIMM memiliki ukuran fisik lebih kecil yang dirancang untuk laptop, sedangkan DIMM berukuran panjang untuk PC desktop",
        },
      ],
    },
  },

  // ==================== Motherboard ====================
  {
    hardwareId: "motherboard",
    title: "Kuis Motherboard (Papan Induk)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apakah fungsi utama dari motherboard?",
          options: [
            "Sebagai pendingin komponen utama sistem",
            "Sebagai papan sirkuit utama yang menghubungkan seluruh komponen komputer menjadi satu sistem",
            "Sebagai media penyimpan data secara permanen",
            "Sebagai unit pengolah pemrosesan grafis 3D",
          ],
          correctAnswer:
            "Sebagai papan sirkuit utama yang menghubungkan seluruh komponen komputer menjadi satu sistem",
        },
        {
          id: 2,
          text: "Fungsi utama dari motherboard dalam sistem komputer adalah...",
          options: [
            "Menjadi tempat seluruh komponen komputer terpasang dan saling berkomunikasi",
            "Menampilkan keluaran visual gambar ke monitor",
            "Mengolah data grafis yang dikirim dari CPU",
            "Menyuplai daya kelistrikan utama ke stop kontak",
          ],
          correctAnswer:
            "Menjadi tempat seluruh komponen komputer terpasang dan saling berkomunikasi",
        },
        {
          id: 3,
          text: "Manakah yang termasuk ke dalam standar Form Factor (ukuran) motherboard?",
          options: ["DDR5", "ATX", "PCIe", "SATA"],
          correctAnswer: "ATX",
        },
        {
          id: 4,
          text: "Bagian belakang (Back Panel) motherboard umumnya berisi...",
          options: [
            "Tempat penyimpanan Hard Disk dan SSD",
            "Tempat terpasangnya Prosesor dan RAM",
            "Port I/O seperti USB, HDMI/DisplayPort, dan Ethernet (RJ45)",
            "Kabel daya utama dari power supply",
          ],
          correctAnswer:
            "Port I/O seperti USB, HDMI/DisplayPort, dan Ethernet (RJ45)",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Form factor motherboard yang berukuran sangat ringkas (170 x 170 mm) dan cocok untuk PC Mini adalah...",
          options: ["ATX", "Micro-ATX", "Mini-ITX", "E-ATX"],
          correctAnswer: "Mini-ITX",
        },
        {
          id: 6,
          text: "Soket (Socket) pada motherboard berfungsi khusus untuk...",
          options: [
            "Menentukan kecocokan jenis CPU yang dapat dipasang",
            "Menentukan batas maksimal kapasitas memori RAM",
            "Menentukan ukuran sasis casing komputer yang kompatibel",
            "Mengunci kartu grafis agar tidak bergeser",
          ],
          correctAnswer: "Menentukan kecocokan CPU yang dapat dipasang",
        },
        {
          id: 7,
          text: "Slot yang umumnya digunakan untuk memasang Kartu Grafis (GPU) diskrit adalah...",
          options: ["Slot DIMM", "PCIe x16", "Konektor SATA", "Slot M.2 NVMe"],
          correctAnswer: "PCIe x16",
        },
        {
          id: 8,
          text: "Slot DIMM pada motherboard digunakan khusus untuk memasang...",
          options: ["RAM", "SSD NVMe", "Kartu Grafis", "Kabel Daya Sasis"],
          correctAnswer: "RAM",
        },
        {
          id: 9,
          text: "Apa perbedaan mendasar antara spesifikasi motherboard dengan Chipset Intel seri Z dibandingkan seri B?",
          options: [
            "Seri Z memiliki harga jauh lebih murah dibanding seri B",
            "Seri Z mendukung overclocking CPU sepenuhnya, sedangkan seri B umumnya tidak",
            "Seri B memiliki lebih banyak slot DIMM untuk RAM",
            "Seri Z hanya mendukung prosesor generasi lama",
          ],
          correctAnswer: "Seri Z mendukung overclocking, seri B umumnya tidak",
        },
        {
          id: 10,
          text: "Apa peran penting komponen VRM (Voltage Regulator Module) yang menempel di dekat socket CPU?",
          options: [
            "Sebagai heatsink pendingin untuk RAM",
            "Menurunkan dan menstabilkan tegangan daya 12V dari PSU menjadi sekitar 1.1V - 1.4V sesuai kebutuhan presisi CPU",
            "Mengontrol sirkulasi arah hembusan kipas casing",
            "Menyimpan file backup pengaturan firmware",
          ],
          correctAnswer:
            "Menurunkan dan menstabilkan tegangan daya 12V dari PSU menjadi sekitar 1.1V - 1.4V sesuai kebutuhan presisi CPU",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Perhatikan pernyataan mengenai motherboard berikut!\n1) ATX merupakan form factor yang paling umum digunakan.\n2) Micro-ATX berukuran lebih kecil dibandingkan ATX.\n3) Mini-ITX hanya memiliki satu slot ekspansi PCIe.\nManakah pernyataan yang benar?",
          options: [
            "Benar Semua",
            "Hanya 2 dan 3",
            "Hanya 1 dan 2",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 12,
          text: "Seorang pengguna ingin memasang SSD NVMe berkecepatan tinggi pada motherboard. Slot fisik yang harus ia gunakan adalah...",
          options: ["PCIe x16", "Slot DIMM", "Slot M.2", "Konektor SATA III"],
          correctAnswer: "Slot M.2",
        },
        {
          id: 13,
          text: "Apakah fungsi utama Chipset pada motherboard?",
          options: [
            "Menyimpan data aplikasi sementara saat komputer menyala",
            "Menampilkan gambar antarmuka visual langsung ke monitor",
            "Menentukan fitur utama sistem seperti jumlah jalur PCIe lanes, dukungan port USB, dan fitur overclocking",
            "Menjaga suhu sasis motherboard tetap dingin",
          ],
          correctAnswer:
            "Menentukan Fitur Utama Seperti Jumlah Jalur Pcie, Port USB, Dan Dukungan Overclocking",
        },
        {
          id: 14,
          text: "Seorang pengguna ingin memasang kartu tambahan berupa WiFi Card pada motherboard. Berdasarkan materi, slot yang dapat digunakan adalah...",
          options: ["PCIe x1/x4", "Slot DIMM", "Slot M.2", "Konektor SATA"],
          correctAnswer: "PCIe x1/x4",
        },
        {
          id: 15,
          text: "Mengapa motherboard kelas atas dirancang memiliki jumlah fase daya VRM yang melimpah (banyak)?",
          options: [
            "Untuk memperbanyak port keluaran USB di panel belakang",
            "Agar distribusi beban listrik lebih merata, stabil, dan dingin saat menyuplai daya ke CPU saat di-overclock",
            "Untuk menghemat ruang perakitan di dalam casing",
            "Agar RAM dapat bekerja tanpa membutuhkan arus dari PSU",
          ],
          correctAnswer:
            "Semakin banyak fase VRM → distribusi beban lebih merata → lebih stabil untuk overclocking CPU high-end",
        },
        {
          id: 16,
          text: "Apa fungsi utama baterai CMOS pada motherboard dan apa dampaknya jika daya baterai tersebut habis?",
          options: [
            "Menyuplai daya listrik utama ke CPU; jika habis PC mati total",
            "Menyimpan pengaturan firmware BIOS/UEFI dan jam internal; jika habis pengaturan akan kembali ke default setiap PC dinyalakan",
            "Mencegah timbulnya korsleting pada sirkuit motherboard",
            "Mengisi daya baterai laptop secara otomatis",
          ],
          correctAnswer:
            "Menyimpan pengaturan BIOS/UEFI saat komputer mati — jika habis, pengaturan kembali ke default setiap restart",
        },
        {
          id: 17,
          text: "Apa perbedaan bandwidth transfer data antara standar jalur PCIe 5.0 dibandingkan dengan PCIe 4.0?",
          options: [
            "Tidak memiliki perbedaan fungsional bagi sirkuit",
            "PCIe 5.0 memiliki bandwidth dua kali lipat lebih cepat dibanding PCIe 4.0 (64 GB/s vs 32 GB/s untuk jalur x16)",
            "PCIe 4.0 jauh lebih cepat karena jalurnya lebih stabil",
            "PCIe 5.0 khusus dirancang untuk modul penyimpanan RAM",
          ],
          correctAnswer:
            "PCIe 5.0 memiliki bandwidth 2x lipat PCIe 4.0 (64GB/s vs 32GB/s untuk x16)",
        },
      ],
    },
  },

  // ==================== Storage (Penyimpanan) ====================
  {
    hardwareId: "storage",
    title: "Kuis Storage (Penyimpanan)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apa yang dimaksud dengan Storage?",
          options: [
            "Perangkat keras yang berfungsi menampilkan keluaran visual ke monitor",
            "Media penyimpanan data permanen untuk sistem operasi, aplikasi, dan file milik pengguna",
            "Komponen sirkuit mikro yang bertugas mengolah instruksi program",
            "Memori volatile yang menyimpan data sementara saat menyala",
          ],
          correctAnswer:
            "Media penyimpanan data permanen untuk sistem operasi, aplikasi, dan file pengguna",
        },
        {
          id: 2,
          text: "Storage digolongkan ke dalam jenis media penyimpanan...",
          options: [
            "Non-volatile (Permanen)",
            "Volatile (Sementara)",
            "Virtual",
            "Temporary",
          ],
          correctAnswer: "Non-volatile",
        },
        {
          id: 3,
          text: "Manakah yang termasuk jenis storage modern berkecepatan tinggi yang ditancapkan langsung ke motherboard?",
          options: ["RAM DDR5", "GPU Diskrit", "SSD NVMe M.2", "PSU Modular"],
          correctAnswer: "SSD NVMe M.2",
        },
        {
          id: 4,
          text: "Data yang disimpan pada media storage akan...",
          options: [
            "Tetap tersimpan secara permanen meskipun komputer dimatikan",
            "Otomatis terhapus bersih saat komputer dimatikan",
            "Berpindah ke memori RAM secara otomatis saat PC mati",
            "Menguap menjadi panas listrik",
          ],
          correctAnswer: "Tetap tersimpan meskipun komputer dimatikan",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Salah satu keunggulan utama dari HDD (Hard Disk Drive) konvensional adalah...",
          options: [
            "Tidak memiliki komponen mekanis di dalamnya",
            "Menawarkan kapasitas penyimpanan sangat besar dengan harga yang relatif murah",
            "Memiliki kecepatan baca paling tinggi dibanding jenis storage lain",
            "Tahan terhadap guncangan fisik saat bekerja",
          ],
          correctAnswer: "Kapasitas besar dengan harga yang relatif murah",
        },
        {
          id: 6,
          text: "Teknologi penyimpanan SSD SATA bekerja dengan menggunakan...",
          options: [
            "Piringan logam magnetik yang berputar cepat",
            "Chip memori flash tanpa adanya komponen mekanis yang bergerak",
            "Chipset penstabil sirkuit daya motherboard",
            "Sinar sensor laser inframerah",
          ],
          correctAnswer: "Flash memory tanpa komponen bergerak",
        },
        {
          id: 7,
          text: "Kecepatan transfer data maksimal pada SSD SATA dibatasi oleh standar...",
          options: [
            "Interface SATA III (maksimal ~550 MB/s)",
            "Slot memori DIMM",
            "Port koneksi sasis RJ45",
            "Jalur kabel daya PCIe",
          ],
          correctAnswer: "Interface SATA III",
        },
        {
          id: 8,
          text: "Salah satu kelemahan fatal HDD jika dibandingkan dengan SSD modern adalah...",
          options: [
            "Kapasitas penyimpanan totalnya selalu berukuran kecil",
            "Sangat rentan mengalami kerusakan fisik akibat guncangan saat bekerja",
            "Tidak memiliki kemampuan menyimpan data secara permanen",
            "Membutuhkan daya listrik yang sangat tinggi untuk menyala",
          ],
          correctAnswer: "Rentan Terhadap Guncangan Fisik",
        },
        {
          id: 9,
          text: "Bagaimanakah prinsip perbedaan kecepatan transfer data teoritis antara interface SATA III dengan jalur PCIe?",
          options: [
            "SATA III jauh lebih cepat dibanding jalur PCIe",
            "SATA III mentransfer data secara serial terbatas (~550 MB/s), sedangkan PCIe mentransfer data paralel secara langsung ke CPU (mencapai ribuan MB/s)",
            "Keduanya memiliki batas kecepatan sirkuit yang sama",
            "PCIe hanya digunakan untuk transfer data suara",
          ],
          correctAnswer:
            "SATA III mentransfer data secara serial terbatas (~550 MB/s), sedangkan PCIe mentransfer data paralel secara langsung ke CPU (mencapai ribuan MB/s)",
        },
        {
          id: 10,
          text: "Apa yang dimaksud dengan siklus penulisan sel flash pada teknologi SSD?",
          options: [
            "Proses pendinginan suhu chip memori",
            "Batas maksimal berapa kali suatu sel memori flash SSD dapat ditulisi ulang sebelum akhirnya aus",
            "Kecepatan piringan logam berputar per detiknya",
            "Waktu jeda respon transfer daya",
          ],
          correctAnswer:
            "Batas maksimal berapa kali suatu sel memori flash SSD dapat ditulisi ulang sebelum akhirnya aus",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Seorang pengguna ingin menginstal OS agar proses booting dan memuat aplikasi berat berjalan sangat cepat. Storage yang paling sesuai adalah...",
          options: [
            "HDD Mekanis",
            "SSD NVMe M.2",
            "DVD-ROM",
            "SSD SATA 2.5 inci",
          ],
          correctAnswer: "SSD NVMe M.2",
        },
        {
          id: 12,
          text: "Perhatikan beberapa pernyataan berikut!\n1) HDD menggunakan piringan magnetik yang berputar.\n2) SSD SATA menggunakan flash memory tanpa komponen bergerak.\n3) SSD NVMe M.2 memanfaatkan jalur PCIe langsung di motherboard.\nManakah pernyataan yang benar?",
          options: [
            "Hanya 1 dan 2",
            "Hanya 2 dan 3",
            "Benar Semua",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 13,
          text: "Berdasarkan materi, bagaimanakah kombinasi penyimpanan (storage) yang ideal untuk PC modern?",
          options: [
            "HDD untuk menginstal OS, dan SSD NVMe untuk menyimpan arsip data",
            "SSD NVMe untuk menginstal OS, SSD SATA untuk menyimpan game library, dan HDD untuk arsip data cadangan (backup)",
            "Hanya menggunakan HDD berkapasitas besar untuk seluruh kebutuhan sistem",
            "Menggabungkan RAM dengan SSD SATA dalam satu sirkuit",
          ],
          correctAnswer:
            "Nvme SSD Untuk Sistem Operasi, SSD SATA Untuk Game, Dan HDD Untuk Arsip Atau Backup",
        },
        {
          id: 14,
          text: "Berdasarkan materi pembelajaran, kecepatan transfer data SSD NVMe M.2 generasi ke-4 (Gen4) saat ini dapat mencapai kisaran...",
          options: ["~160 MB/s", "~550 MB/s", "~7400 MB/s", "~14000 MB/s"],
          correctAnswer: "~7400 MB/s",
        },
        {
          id: 15,
          text: 'Apakah arti dari metrik "TBW (Total Bytes Written)" pada spesifikasi ketahanan SSD?',
          options: [
            "Kecepatan maksimal penulisan data dalam satu detik",
            "Jumlah total akumulasi data dalam Terabyte yang dijamin dapat ditulis ke SSD sebelum sel memorinya mulai aus",
            "Suhu kerja maksimal yang diizinkan saat SSD bekerja",
            "Batas maksimal sasis slot M.2 yang bisa menampungnya",
          ],
          correctAnswer:
            "Jumlah total akumulasi data dalam Terabyte yang dijamin dapat ditulis ke SSD sebelum sel memorinya mulai aus",
        },
        {
          id: 16,
          text: "Mengapa SSD NVMe M.2 modern berkecepatan tinggi sangat disarankan menggunakan heatsink atau M.2 shield bawaan motherboard?",
          options: [
            "Untuk menahan getaran mekanis piringan",
            "Mencegah timbulnya Thermal Throttling (penurunan kecepatan otomatis akibat sensor mendeteksi panas berlebih)",
            "Agar tidak konsumsi daya dari baterai CMOS",
            "Hanya sebagai pelindung hiasan visual RGB",
          ],
          correctAnswer:
            "Mencegah timbulnya Thermal Throttling (penurunan kecepatan otomatis akibat sensor mendeteksi panas berlebih)",
        },
        {
          id: 17,
          text: "Apa perbedaan mendasar antara wujud fisik SSD M.2 SATA dengan SSD M.2 NVMe?",
          options: [
            "Keduanya memiliki wujud fisik yang sama persis",
            "M.2 SATA menggunakan kunci konektor tipe B+M (dua celah) dan batas kecepatan SATA, sedangkan M.2 NVMe umumnya menggunakan kunci tipe M (satu celah) dengan kecepatan PCIe",
            "M.2 SATA ukurannya jauh lebih panjang daripada M.2 NVMe",
            "M.2 NVMe ditenagai kabel eksternal, sedangkan M.2 SATA tidak",
          ],
          correctAnswer:
            "M.2 SATA menggunakan kunci konektor tipe B+M (dua celah) dan batas kecepatan SATA, sedangkan M.2 NVMe umumnya menggunakan kunci tipe M (satu celah) dengan kecepatan PCIe",
        },
      ],
    },
  },

  // ==================== PSU (Power Supply Unit) ====================
  {
    hardwareId: "psu",
    title: "Kuis PSU (Power Supply Unit)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apakah yang dimaksud dengan PSU?",
          options: [
            "Komponen yang memproses pengolahan data grafis",
            "Media penyimpanan data sekunder yang bersifat non-volatile",
            "Unit catu daya yang mengkonversi arus AC menjadi DC untuk didistribusikan ke seluruh komponen PC",
            "Firmware dasar untuk mengontrol sirkuit kelistrikan sasis",
          ],
          correctAnswer:
            "Unit catu daya yang mengkonversi arus AC menjadi DC untuk didistribusikan ke seluruh komponen PC",
        },
        {
          id: 2,
          text: "Apakah kepanjangan dari PSU?",
          options: [
            "Power Supply Unit",
            "Pause Supply Unit",
            "Power Satuan Unit",
            "Portable System Utility",
          ],
          correctAnswer: "Power Supply Unit",
        },
        {
          id: 3,
          text: "Kapasitas daya keluaran utama sebuah PSU diukur dalam satuan...",
          options: ["Hertz (Hz)", "Volt (V)", "Watt (W)", "Ampere (A)"],
          correctAnswer: "Watt (W)",
        },
        {
          id: 4,
          text: "Selain bertugas mengubah arus listrik AC menjadi DC, PSU yang baik juga berfungsi sebagai...",
          options: [
            "Pengolah pemrosesan data grafis visual monitor",
            "Penstabil tegangan dan pelindung komponen dari fluktuasi arus listrik",
            "Media penyimpanan data sementara sistem",
            "Pendingin pasif sasis motherboard",
          ],
          correctAnswer:
            "Penstabil Tegangan Dan Pelindung Komponen Dari Fluktuasi Listrik",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Apakah fungsi utama dari Power Supply Unit (PSU) komputer?",
          options: [
            "Mengubah arus bolak-balik (AC) dari jaringan rumah menjadi arus searah (DC) yang dibutuhkan sirkuit komputer",
            "Menampilkan antarmuka visual grafik langsung ke monitor",
            "Menyimpan data aplikasi sementara saat komputer menyala",
            "Mengontrol kecepatan putaran kipas pendingin sasis",
          ],
          correctAnswer:
            "Mengubah Arus AC Menjadi Arus DC Yang Dibutuhkan Computer",
        },
        {
          id: 6,
          text: 'Sertifikasi rating "80 Plus" pada badan PSU digunakan khusus untuk menunjukkan...',
          options: [
            "Kecepatan transfer data sirkuit",
            "Efisiensi konversi daya listrik pada PSU",
            "Kapasitas penyimpanan total di dalam PC",
            "Jumlah kabel modular yang tersedia",
          ],
          correctAnswer: "Efisiensi daya PSU",
        },
        {
          id: 7,
          text: "Manakah di bawah ini yang merupakan tingkatan sertifikasi 80 Plus yang asli/nyata?",
          options: ["Gold", "Titanium RAM", "Platinum SSD", "Bronze Cooling"],
          correctAnswer: "Gold",
        },
        {
          id: 8,
          text: "Manakah fitur proteksi kelistrikan penting yang sebaiknya dimiliki oleh PSU berkualitas?",
          options: [
            "OVP (Over Voltage Protection)",
            "DDR (Double Data Rate)",
            "NVMe (Non-Volatile Memory)",
            "JEDEC Standar",
          ],
          correctAnswer: "OVP",
        },
        {
          id: 9,
          text: "Apa perbedaan efisiensi energi yang nyata antara rating sertifikasi 80 Plus Bronze dibandingkan dengan rating Gold?",
          options: [
            "80 Plus Bronze jauh lebih hemat listrik dibanding Gold",
            "80 Plus Gold memiliki efisiensi konversi lebih tinggi (~90% vs ~85%), menghasilkan panas lebih sedikit, dan komponen internalnya lebih berkualitas",
            "Rating Gold hanya merupakan stiker hiasan visual tanpa pengaruh performa",
            "Bronze mengonsumsi lebih sedikit daya saat PC dalam kondisi idle",
          ],
          correctAnswer:
            "80 Plus Gold memiliki efisiensi konversi lebih tinggi (~90% vs ~85%), menghasilkan panas lebih sedikit, dan komponen internalnya lebih berkualitas",
        },
        {
          id: 10,
          text: "Bagaimanakah efisiensi daya PSU mempengaruhi tagihan listrik rumah tangga Anda?",
          options: [
            "Tidak memiliki pengaruh sama sekali",
            "Semakin tinggi efisiensi PSU (misal rating Gold), semakin sedikit daya listrik yang terbuang sia-sia menjadi energi panas, sehingga menghemat tagihan listrik",
            "Semakin efisien PSU, tagihan listrik justru semakin melonjak",
            "Hanya berpengaruh jika PC menggunakan baterai internal",
          ],
          correctAnswer:
            "Semakin tinggi efisiensi PSU (misal rating Gold), semakin sedikit daya listrik yang terbuang sia-sia menjadi energi panas, sehingga menghemat tagihan listrik",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Seorang pengguna memiliki PC Gaming kelas menengah. Berdasarkan materi, kapasitas rating PSU yang paling sesuai adalah...",
          options: [
            "300–450 Watt",
            "550–650 Watt",
            "Lebih dari 1000 Watt",
            "Hanya butuh 200 Watt",
          ],
          correctAnswer: "550–650 Watt",
        },
        {
          id: 12,
          text: "Jenis PSU yang seluruh kabel konduktornya dapat dilepas dan dipasang kembali sesuai kebutuhan perakitan sasis adalah...",
          options: [
            "Semi-Modular",
            "Non-Modular",
            "Fully Modular",
            "Standard Cable",
          ],
          correctAnswer: "Fully Modular",
        },
        {
          id: 13,
          text: "Seorang pengguna ingin membeli PSU yang lebih hemat listrik dan membuang panas lebih sedikit. Sertifikasi yang lebih baik untuk ia pilih adalah...",
          options: [
            "80 Plus Gold",
            "80 Plus Standard",
            "PSU tanpa sertifikasi kelayakan",
            "PSU bawaan casing standar",
          ],
          correctAnswer: "80 Plus Gold",
        },
        {
          id: 14,
          text: "Sebuah komputer memiliki total kebutuhan daya sekitar 600 Watt. Berdasarkan materi, kisaran daya PSU yang disarankan jika mengikuti aturan headroom 20–30% adalah...",
          options: [
            "650–800 Watt",
            "400–500 Watt",
            "500–550 Watt",
            "Diatas 1200 Watt",
          ],
          correctAnswer: "650–800 Watt",
        },
        {
          id: 15,
          text: "Bagaimanakah peran penting dari sirkuit proteksi SCP (Short Circuit Protection) pada PSU berkualitas?",
          options: [
            "Mengontrol sirkulasi hembusan kipas radiator",
            "Seketika memutus aliran daya secara mandiri jika terdeteksi adanya korsleting sirkuit demi menyelamatkan seluruh komponen PC berharga lainnya",
            "Membatasi clock speed prosesor agar tidak panas",
            "Menghubungkan sensor taktil dari joystick",
          ],
          correctAnswer:
            "Seketika memutus aliran daya secara mandiri jika terdeteksi adanya korsleting sirkuit demi menyelamatkan seluruh komponen PC berharga lainnya",
        },
        {
          id: 16,
          text: "Mengapa dilarang keras menggunakan PSU kualitas rendah (tanpa proteksi/sertifikasi) saat merakit PC?",
          options: [
            "Hanya karena ukuran sasisnya tidak muat di casing",
            "Karena jika terjadi korsleting atau lonjakan daya, PSU murahan akan meledak dan menyalurkan tegangan tinggi langsung yang merusak sirkuit CPU, RAM, dan GPU",
            "Sebab PSU tanpa sertifikasi tidak mengeluarkan getaran kipas",
            "Karena warna kabelnya tidak senada dengan motherboard",
          ],
          correctAnswer:
            "Karena jika terjadi korsleting atau lonjakan daya, PSU murahan akan meledak dan menyalurkan tegangan tinggi langsung yang merusak sirkuit CPU, RAM, dan GPU",
        },
        {
          id: 17,
          text: "Bagaimanakah pengaruh pembagian jalur (rail) daya +12V tunggal (Single Rail) dibandingkan dengan jalur ganda (Multi Rail) terhadap GPU modern?",
          options: [
            "Single Rail menyalurkan seluruh batas arus daya 12V dalam satu jalur besar, sangat ideal untuk menyuplai GPU modern yang membutuhkan pasokan daya masif secara instan",
            "Multi Rail membagi arus menjadi kecil sehingga GPU modern bekerja lebih stabil",
            "Single Rail hanya dirancang khusus untuk PC kantor tanpa GPU",
            "Keduanya memiliki jalur transmisi sirkuit AC murni",
          ],
          correctAnswer:
            "Single Rail menyalurkan seluruh batas arus daya 12V dalam satu jalur besar, sangat ideal untuk menyuplai GPU modern yang membutuhkan pasokan daya masif secara instan",
        },
      ],
    },
  },

  // ==================== Casing (Chassis) ====================
  {
    hardwareId: "casing",
    title: "Kuis Casing (Chassis)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Apakah yang dimaksud dengan casing komputer?",
          options: [
            "Rumah pelindung yang menyatukan seluruh komponen PC sekaligus mengatur sirkulasi udara dan estetika",
            "Komponen mikroprosesor yang bertugas mengolah pemrosesan data grafis",
            "Media penyimpanan non-volatile untuk menyimpan data pengguna secara permanen",
            "Sirkuit papan induk tempat menempelnya RAM dan CPU",
          ],
          correctAnswer:
            "Rumah pelindung yang menyatukan seluruh komponen PC sekaligus mengatur sirkulasi udara dan estetika",
        },
        {
          id: 2,
          text: "Salah satu fungsi penting dari casing komputer adalah...",
          options: [
            "Mengolah eksekusi instruksi program",
            "Melindungi komponen internal dari debu, kotoran, dan benturan fisik",
            "Mengkonversi arus AC rumah menjadi arus DC",
            "Menyimpan sirkuit data sementara sistem",
          ],
          correctAnswer:
            "Melindungi komponen internal dari debu dan benturan fisik",
        },
        {
          id: 3,
          text: "Manakah di bawah ini yang merupakan contoh jenis Form Factor (ukuran) dari casing PC?",
          options: ["Mid Tower", "DDR5", "PCIe x16", "SATA III"],
          correctAnswer: "Mid Tower",
        },
        {
          id: 4,
          text: "Fungsi casing komputer yang berkaitan langsung dengan tampilan luar sasis adalah...",
          options: [
            "Menyimpan data dokumen milik pengguna",
            "Mengolah data pemrosesan grafis 3D",
            "Menunjang estetika visual perakitan komputer",
            "Menstabilkan tegangan daya listrik utama",
          ],
          correctAnswer: "Menunjang estetika visual",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Form factor casing komputer yang paling populer dan fleksibel digunakan untuk PC Gaming standar saat ini adalah...",
          options: ["Full Tower", "Mid Tower", "Mini Tower", "Mini-ITX"],
          correctAnswer: "Mid Tower",
        },
        {
          id: 6,
          text: "Dalam sistem manajemen sirkulasi sasis (Airflow) casing, udara dingin umumnya dialirkan masuk melalui bagian...",
          options: [
            "Bagian atas (Top) casing",
            "Bagian belakang (Back) casing",
            "Bagian depan (Front) atau bawah casing",
            "Bagian samping panel Tempered Glass",
          ],
          correctAnswer: "Depan Atau Bawah Casing",
        },
        {
          id: 7,
          text: "Material kokoh dan transparan yang sering digunakan sebagai panel samping pada sasis casing modern saat ini adalah...",
          options: [
            "Tempered Glass",
            "Plastik PVC tipis",
            "Akrilik biasa",
            "Aluminium murni",
          ],
          correctAnswer: "Tempered Glas",
        },
        {
          id: 8,
          text: "Form factor casing manakah yang paling ideal untuk rakitan PC minimalis yang menghemat ruang di atas meja kerja?",
          options: ["Full Tower", "E-ATX Chassis", "Mini-ITX", "Super Tower"],
          correctAnswer: "Mini-ITX",
        },
        {
          id: 9,
          text: "Apakah fungsi utama dari filter debu (dust filter) magnetik yang dipasang pada rongga intake sasis?",
          options: [
            "Membatasi laju putaran kipas angin casing",
            "Mencegah debu halus menyelinap masuk ke dalam sasis tanpa menghalangi sirkulasi udara dingin",
            "Mengatur frekuensi tegangan sirkuit motherboard",
            "Hanya sebagai pelindung hiasan visual RGB",
          ],
          correctAnswer:
            "Mencegah debu halus menyelinap masuk ke dalam sasis tanpa menghalangi sirkulasi udara dingin",
        },
        {
          id: 10,
          text: 'Mengapa casing dengan desain panel depan bertipe "Mesh" (jaring-jaring) dinilai lebih unggul dibanding panel tertutup?',
          options: [
            "Sebab panel mesh harganya jauh lebih murah diproduksi",
            "Karena memberikan ruang bagi masuknya udara dingin (intake) secara maksimal demi mendinginkan suhu komponen",
            "Agar suara bising kipas di dalam terdengar lebih kencang",
            "Untuk mencegah timbulnya gelombang elektromagnetik sirkuit",
          ],
          correctAnswer:
            "Karena memberikan ruang bagi masuknya udara dingin (intake) secara maksimal demi mendinginkan suhu komponen",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Seorang pengguna ingin membangun PC tingkat tinggi dengan motherboard E-ATX dan sistem pendingin cairan Custom Water Cooling yang kompleks. Jenis sasis casing yang paling sesuai untuk ia gunakan adalah...",
          options: ["Mini-ITX", "Mid Tower", "Full Tower", "SFF Chassis"],
          correctAnswer: "Full Tower",
        },
        {
          id: 12,
          text: "Konfigurasi aliran udara bertipe Tekanan Positif (Positive Pressure) pada casing terjadi ketika...",
          options: [
            "Jumlah kapasitas/hembusan kipas masuk (Intake) lebih banyak dibanding kipas keluar (Exhaust)",
            "Jumlah kapasitas/hembusan kipas keluar (Exhaust) lebih banyak dibanding kipas masuk (Intake)",
            "Sistem perakitan tidak menggunakan kipas casing sama sekali",
            "Suhu di luar sasis jauh lebih panas dari suhu bagian dalam",
          ],
          correctAnswer:
            "Jumlah Kipas Intake Lebih Banyak Daripada Kipas Exhaust",
        },
        {
          id: 13,
          text: "Seorang pengguna menginginkan perakitan PC dengan manajemen kabel yang sangat rapi di bagian belakang serta mendukung port USB-C modern di panel depan. Fitur fisik casing yang wajib ia perhatikan adalah...",
          options: [
            "Jumlah stiker logo brand pada casing",
            "Ketersediaan ruang manajemen kabel (cable routing space) di belakang tray dan dukungan port USB-C di I/O panel depan",
            "Warna cat kelistrikan sasis luar monitor",
            "Ketinggian kaki penyangga dasar casing",
          ],
          correctAnswer: "Ruang Manajemen Kabel Dan Dukungan Port USB-C",
        },
        {
          id: 14,
          text: "Apakah salah satu keuntungan utama adanya kompartemen PSU Shroud (penutup kotak PSU) pada sasis casing modern?",
          options: [
            "Membantu meningkatkan kapasitas memori RAM sistem secara otomatis",
            "Meningkatkan clock speed prosesor secara otomatis",
            "Membantu menyembunyikan gulungan kabel daya sisa dari PSU agar sasis dalam terlihat rapi dan airflow lancar",
            "Menstabilkan arus daya AC dari jaringan rumah",
          ],
          correctAnswer:
            "Membantu Merapikan Tampilan Dan Menyembunyikan Kabel PSU",
        },
        {
          id: 15,
          text: "Apa risiko teknis jika Anda memasang semua kipas casing menghadap ke arah dalam sasis (all-intake)?",
          options: [
            "Motherboard tidak akan mendeteksi sirkuit prosesor",
            "Udara panas dari CPU dan GPU akan terperangkap berputar di dalam sasis karena tidak ada jalur pembuangan (exhaust), membuat suhu melonjak kritis",
            "Konsumsi daya listrik PC akan melonjak dua kali lipat",
            "Sumbu putar sirkuit kipas akan mengalami korsleting fisik",
          ],
          correctAnswer:
            "Udara panas dari CPU dan GPU akan terperangkap berputar di dalam sasis karena tidak ada jalur pembuangan (exhaust), membuat suhu melonjak kritis",
        },
        {
          id: 16,
          text: 'Sebelum membeli kartu grafis (GPU) modern yang berukuran sangat panjang, mengapa seorang teknisi harus memeriksa parameter "GPU Clearance" pada spesifikasi casing?',
          options: [
            "Untuk memastikan panjang fisik GPU tidak membentur kipas depan atau radiator AIO yang dipasang di sasis depan",
            "Agar sistem operasi Windows mendeteksi sirkuit driver GPU",
            "Untuk mencegah timbulnya bising getaran sasis",
            "Sebab dGPU tidak membutuhkan daya dari PSU jika sasisnya pas",
          ],
          correctAnswer:
            "Untuk memastikan panjang fisik GPU tidak membentur kipas depan atau radiator AIO yang dipasang di sasis depan",
        },
        {
          id: 17,
          text: "Apa yang harus diperhitungkan teknisi saat memasang radiator pendingin cairan AIO ukuran 240mm di bagian atas (top-mount) casing?",
          options: [
            "Memastikan ukuran casing muat untuk motherboard Mini-ITX saja",
            "Toleransi jarak ketebalan radiator dan kipas agar tidak menabrak heatsink VRM motherboard atau kepingan modul RAM yang tinggi",
            "Mengisi daya cairan coolant radiator sebelum dipasang ke sasis",
            "Memasang filter debu di atas sasis dengan penutup lem permanen",
          ],
          correctAnswer:
            "Toleransi jarak ketebalan radiator dan kipas agar tidak menabrak heatsink VRM motherboard atau kepingan modul RAM yang tinggi",
        },
      ],
    },
  },

  // ==================== Perangkat Input ====================
  {
    hardwareId: "input-devices",
    title: "Kuis Perangkat Input (Masukan)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Manakah pernyataan yang benar mengenai fungsi utama dari keyboard?",
          options: [
            "Untuk memasukkan data, mengetik teks, dan mengirimkan komando instruksi ke dalam komputer",
            "Untuk menafsirkan instruksi grafis dan memproses sinyal audio komputer",
            "Untuk menyajikan tampilan visual visual hasil komputasi ke layar",
            "Sebagai media penyimpan sirkuit data permanen",
          ],
          correctAnswer:
            "Untuk Memasukkan Data, Mengetik, Dan Menjalankan Proses Input Ke Dalam Komputer.",
        },
        {
          id: 2,
          text: "Manakah tiga tombol utama yang selalu terdapat pada sebuah mouse komputer?",
          options: [
            "Klik Kanan, Klik Kiri, dan Scroll Wheel",
            "Klik Atas, Klik Bawah, dan Scroll Wheel",
            "Klik Kanan, Klik Atas, dan Klik Bawah",
            "Tombol Power, Tombol Klik, dan Tombol Reset",
          ],
          correctAnswer: "Klik Kanan, Klik Kiri, Dan Scroll",
        },
        {
          id: 3,
          text: "Apakah yang dimaksud dengan perangkat Scanner?",
          options: [
            "Perangkat keras komputer yang berfungsi untuk mencetak berkas gambar",
            "Hardware yang berfungsi menyimpan sirkuit data sementara saat menyala",
            "Perangkat masukan komputer yang bertugas memindai dan mendigitalkan lembaran fisik",
            "Alat pelacak sensor suhu udara di dalam casing",
          ],
          correctAnswer:
            "Perangkat Input Komputer Yang Bertugas Mendigitalkan Lembaran Fisik.",
        },
        {
          id: 4,
          text: "Apakah yang dimaksud dengan Touchscreen (Layar Sentuh)?",
          options: [
            "Layar monitor yang hanya digunakan untuk menampilkan gambar statis",
            "Layar sirkuit yang dirancang untuk mencetak berkas cetak biru",
            "Layar antarmuka yang dapat mendeteksi sentuhan langsung dari jari atau pena stylus",
            "Sensor pelacak suara yang dipasang di atas monitor desktop",
          ],
          correctAnswer:
            "Layar Yang Dapat Mendeteksi Sentuhan Langsung Dari Jari Atau Stylus",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Selain tombol alfanumerik (huruf dan angka), papan ketik keyboard umumnya juga memiliki...",
          options: [
            "Speaker internal dan sensor mikrofon",
            "Tombol kontrol, tombol fungsi (F1-F12), dan tombol karakter khusus",
            "Slot sasis Hard Disk dan slot memori RAM",
            "Sirkuit konversi daya AC murni ke arus DC",
          ],
          correctAnswer: "Tombol kontrol, tombol fungsi, dan karakter tertentu",
        },
        {
          id: 6,
          text: 'Fitur "Drag-and-Drop" pada perangkat mouse komputer digunakan khusus untuk...',
          options: [
            "Menyalin file dokumen langsung ke dalam hard disk",
            "Menampilkan menu pintasan pengaturan grafis komputer",
            "Memindahkan posisi objek digital dari satu lokasi ke lokasi lain di layar monitor",
            "Mengatur tingkat kecepatan resolusi tampilan piksel",
          ],
          correctAnswer:
            "Memindahkan Objek Dari Satu Lokasi Ke Lokasi Lain Di Layar",
        },
        {
          id: 7,
          text: "Manakah yang merupakan alasan utama mengapa banyak pengguna kantor lebih memilih menggunakan Scanner bertipe Flatbed?",
          options: [
            "Ukuran perangkatnya terbilang praktis dan hemat ruang, dipadukan kemampuan prima untuk memindai dokumen berukuran standar",
            "Karena scanner flatbed tidak mengeluarkan getaran yang bisa mendistorsi gambar",
            "Sebab harganya yang sangat mahal dan hanya diproduksi terbatas",
            "Karena scanner flatbed ditenagai baterai tanpa perlu colok listrik",
          ],
          correctAnswer:
            "Ukuran Perangkatnya Yang Terbilang Kecil Dan Praktis, Dipadukan Dengan Kemampuannya Untuk Mengakomodasi Dokumen-Dokumen Berukuran Standar",
        },
        {
          id: 8,
          text: "Jenis mikrofon (Microphone) manakah yang dirancang memiliki struktur khusus untuk diletakkan dengan stabil di atas permukaan meja kerja?",
          options: [
            "Hands Microphone",
            "Table Microphone",
            "Floor Stand Microphone",
            "Condenser Studio Mic",
          ],
          correctAnswer: "Table Microphone",
        },
        {
          id: 9,
          text: "Bagaimanakah cara pengoperasian perangkat USB Webcam eksternal pada komputer desktop?",
          options: [
            "Mencolokkan konektor USB ke komputer secara langsung tanpa perlu mematikan sistem terlebih dahulu (Plug and Play)",
            "Dihubungkan menggunakan sirkuit modem eksternal nirkabel",
            "Menggunakan pemindai optik laser inframerah",
            "Harus menginstal ulang sistem operasi dari awal",
          ],
          correctAnswer:
            "Mencolokkan Konektor Usb Ke Komputer Tanpa Perlu Mematikan Sistem Terlebih Dahulu",
        },
        {
          id: 10,
          text: "Cara kerja pelacakan sentuhan jari pada teknologi Touchscreen modern bertumpu pada...",
          options: [
            "Teknologi sensor pelacak kapasitif/resistif yang mengenali titik koordinat sentuhan di layar",
            "Sirkuit magnetik yang diletakkan di bawah casing laptop",
            "Sinar inframerah yang dipantulkan dari kamera webcam",
            "Sensor mekanis mekanik berputar di bawah panel",
          ],
          correctAnswer:
            "Teknologi Sensor Pelacak Yang Mengenali Titik Sentuhan",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Seorang pengguna ingin memindahkan sebuah file dari Folder A ke Folder B dengan cara menahan tombol kiri mouse dan menggesernya. Fungsi mouse yang ia gunakan adalah...",
          options: ["Scroll", "Drag-and-Drop", "Double Click", "Right Click"],
          correctAnswer: "Drag-And-Drop",
        },
        {
          id: 12,
          text: "Seorang pengguna ingin bekerja lebih efisien menggunakan laptopnya tanpa bantuan mouse eksternal, namun ia ingin touchpad-nya memiliki sensor capacitance canggih yang mendukung berbagai gestur jari. Berdasarkan materi, jenis touchpad yang ia gunakan adalah...",
          options: [
            "Touchpad Standar",
            "Touchpad Multi",
            "Trackball Touchpad",
            "Papan Sentuh Mekanis",
          ],
          correctAnswer: "Multi",
        },
        {
          id: 13,
          text: "Perhatikan beberapa pernyataan mengenai scanner berikut!\n1) Scanner dapat mengubah dokumen fisik menjadi format digital.\n2) Scanner dikelompokkan sebagai perangkat input.\n3) Scanner berfungsi menyajikan hasil komputasi gambar ke pengguna.\nManakah pernyataan yang benar?",
          options: [
            "Hanya 1 dan 2",
            "Hanya 2 dan 3",
            "Benar Semua",
            "Semua Salah",
          ],
          correctAnswer: "Hanya 1 dan 2",
        },
        {
          id: 14,
          text: "Seorang dosen sedang memberikan presentasi materi di depan peserta seminar secara aktif bergerak di atas panggung. Ia membutuhkan jenis mikrofon yang dapat dipasang kokoh di dadanya tanpa harus dipegang oleh tangan. Jenis mikrofon yang paling sesuai adalah...",
          options: [
            "Hands Microphone (Handheld)",
            "Floor Stand Microphone",
            "Lavalier Clip-On Microphone",
            "Table Microphone",
          ],
          correctAnswer: "Floor Stand Microphone",
        },
        {
          id: 15,
          text: "Apakah perbedaan fungsional utama antara USB Webcam biasa dengan Network & Wireless Camera?",
          options: [
            "USB Webcam ditenagai sirkuit baterai eksternal tanpa kabel",
            "Network & Wireless Camera dapat terhubung mandiri melalui jaringan internet tanpa kabel transfer data, sedangkan USB Webcam wajib terkoneksi port fisik USB komputer",
            "USB Webcam hanya khusus digunakan di laptop, sedangkan dGPU khusus di desktop",
            "Tidak ada perbedaan fungsional bagi pengiriman data visual",
          ],
          correctAnswer:
            "Network & Wireless Camera Dapat Terhubung Melalui Jaringan Tanpa Kabel Transfer Data",
        },
        {
          id: 16,
          text: "Seorang desainer grafis menggunakan pena khusus (stylus) untuk menggambar langsung di atas layar tabletnya. Agar goresan tangan tersebut dapat diterjemahkan menjadi gambar digital, layar tablet tersebut harus mampu...",
          options: [
            "Menyimpan gambar rancangan secara permanen di RAM",
            "Mengubah gambar menjadi berkas cetak secara instan",
            "Mengenali koordinat lokasi sentuhan ujung stylus melalui sensor pelacak kapasitif/elektromagnetik pada layar",
            "Menurunkan tegangan kelistrikan sasis laptop",
          ],
          correctAnswer:
            "Mengenali Lokasi Sentuhan Stylus Melalui Sensor Pelacak Pada Layar",
        },
        {
          id: 17,
          text: "Touchpad pada laptop umumnya mendeteksi sentuhan jari menggunakan kombinasi metode sensor...",
          options: [
            "Capacitance Shunt dan Matrix Conductor",
            "Capacitance Shunt dan Trackball Mekanis",
            "Trackball dan Multi-Touch sirkuit",
            "Sinar laser optik dan roda sensor gerak",
          ],
          correctAnswer: "Capacitance Shunt Dan Matrix Conductor.",
        },
      ],
    },
  },

  // ==================== Perangkat Output ====================
  {
    hardwareId: "output-devices",
    title: "Kuis Perangkat Output (Keluaran)",
    questions: {
      easy: [
        {
          id: 1,
          text: "Berdasarkan materi pembelajaran, berapakah jenis monitor yang umum disebutkan?",
          options: ["4 jenis", "2 jenis", "3 jenis", "5 jenis"],
          correctAnswer: "3",
        },
        {
          id: 2,
          text: "Manakah jenis pencetak printer yang mengandalkan teknologi pemanasan kertas khusus (tanpa tinta cair) sehingga bentuk fisiknya sangat kecil dan portabel?",
          options: [
            "Printer Inkjet",
            "Printer Laser",
            "Printer Thermal",
            "Printer Dot Matrix",
          ],
          correctAnswer: "Thermal",
        },
        {
          id: 3,
          text: "Apakah fungsi utama dari perangkat keras Speaker komputer?",
          options: [
            "Memproyeksikan suara yang sebelumnya telah diproses secara digital oleh komputer agar dapat didengar manusia",
            "Memberikan umpan balik taktil getaran fisik kepada pengguna",
            "Menangkap suara analog di udara dan mengonversinya menjadi sinyal digital",
            "Mengatur frekuensi refresh rate visual gambar di monitor",
          ],
          correctAnswer: "Memproyeksikan Keluaran Visual Dari Sistem Computer",
        },
        {
          id: 4,
          text: "Apakah yang dimaksud dengan Haptic Devices?",
          options: [
            "Perangkat output visual berkapasitas ultra-lebar untuk proyektor",
            "Perangkat keras yang dirancang khusus untuk memberikan umpan balik fisik berupa getaran atau sentuhan taktil kepada pengguna",
            "Komponen sirkuit konversi audio digital menjadi sinyal analog",
            "Sensor pelacak arah hembusan kipas di dalam sasis",
          ],
          correctAnswer:
            "Perangkat Keras Yang Dirancang Untuk Memberikan Umpan Balik Fisik Kepada Pengguna, Baik Melalui Sensasi Getaran Maupun Sentuhan Taktil",
        },
      ],
      medium: [
        {
          id: 5,
          text: "Dibandingkan dengan teknologi LCD lama, monitor bertipe LED memiliki keunggulan berupa...",
          options: [
            "Konsumsi daya listrik jauh lebih boros dan layar cepat panas",
            "Warna tampilan jauh lebih kaya, kerapatan piksel lebih tajam, dan masa pakai layar jauh lebih awet",
            "Ukuran fisiknya sangat besar dan tidak mendukung resolusi tinggi",
            "Dapat mencetak gambar sirkuit secara langsung tanpa printer",
          ],
          correctAnswer:
            "Warna Lebih Kaya, Kerapatan Piksel Lebih Tajam, Dan Masa Pakai Lebih Lebih Awet",
        },
        {
          id: 6,
          text: "Jenis printer manakah yang memanfaatkan bubuk tinta kering khusus (toner) sebagai media utama untuk menghasilkan cetakan?",
          options: [
            "Printer Dot Matrix",
            "Printer Inkjet",
            "Printer Laser",
            "Printer Thermal",
          ],
          correctAnswer: "Laser",
        },
        {
          id: 7,
          text: "Apakah yang dimaksud dengan Speaker bertipe Soundbar?",
          options: [
            "Speaker berbentuk memanjang yang dirancang khusus untuk meningkatkan kualitas audio televisi/monitor",
            "Speaker yang dipasang tertanam langsung di dalam sasis power supply",
            "Speaker nirkabel berukuran mini yang diikatkan di tiang panggung",
            "Kombinasi antara audio konverter dengan sirkuit SSD M.2",
          ],
          correctAnswer:
            "Speaker Yang Dirancang Untuk Meningkatkan Kualitas Suara Televisi",
        },
        {
          id: 8,
          text: "Bagaimanakah cara proyektor LCD menghasilkan kombinasi paduan warna gambar yang diproyeksikan?",
          options: [
            "Memanfaatkan pantulan cermin mikro sirkuit putar roda warna",
            "Mengandalkan penyatuan tiga panel warna primer RGB (Merah, Hijau, dan Biru) secara serentak",
            "Menggunakan sensor pelacak getaran kelistrikan kulit",
            "Memancarkan lampu halogen tunggal berdaya watt tinggi",
          ],
          correctAnswer: "Tiga Panel Warna RGB (Merah, Hijau, Dan Biru)",
        },
        {
          id: 9,
          text: "Bagaimanakah cara kerja dari mesin cetak berskala besar jenis Plotter Thermal?",
          options: [
            "Gambar dibentuk secara presisi dengan melewatkan pin bersuhu tinggi ke atas media cetak khusus yang sensitif terhadap panas",
            "Menggunakan jarum pengetuk pita tinta di atas kertas karbon",
            "Menggunakan muatan listrik statis untuk menarik partikel bubuk toner",
            "Menggerakkan satu pena fisik berwarna kontinu untuk menggambar sirkuit",
          ],
          correctAnswer:
            "Gambar Dibentuk Dengan Cara Melewatkan Pin Bersuhu Tinggi Tersebut Ke Atas Media Cetak Yang Memiliki Sensitivitas Terhadap Panas",
        },
        {
          id: 10,
          text: "Saat Anda menyentuh layar smartphone dan merasakan adanya respon getaran balik yang halus dari keyboard virtual, jenis teknologi haptik yang digunakan adalah...",
          options: [
            "Haptik Termal",
            "Haptik Kinestik",
            "Haptik Taktil",
            "Haptik Audio",
          ],
          correctAnswer: "Haptik Taktil",
        },
      ],
      hard: [
        {
          id: 11,
          text: "Perhatikan beberapa pernyataan mengenai printer berikut!\n1) Inkjet menggunakan tinta cair untuk mencetak.\n2) Laser menggunakan bubuk tinta (toner).\n3) Thermal memanfaatkan metode pemanasan khusus tanpa tinta cair.\nManakah pernyataan yang benar?",
          options: [
            "Hanya 1 dan 2",
            "Hanya 2 dan 3",
            "Benar Semua",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 12,
          text: "Perhatikan beberapa pernyataan berikut!\n1) Speaker Bluetooth terhubung secara nirkabel.\n2) Speaker Portable dilengkapi baterai rechargeable dan mudah dibawa.\n3) Speaker Soundbar dirancang meningkatkan kualitas audio TV/layar.\nManakah pernyataan yang benar?",
          options: [
            "Hanya 1 dan 2",
            "Hanya 1 dan 3",
            "Benar Semua",
            "Semua Salah",
          ],
          correctAnswer: "Benar Semua",
        },
        {
          id: 13,
          text: "Jenis proyektor canggih yang mengandalkan jutaan cermin mikroskopis berputar untuk memantulkan cahaya dan menghasilkan variasi warna tajam adalah proyektor jenis...",
          options: [
            "LCD Projector",
            "DLP Projector",
            "LED Projector",
            "CRT Projector",
          ],
          correctAnswer: "DLP",
        },
        {
          id: 14,
          text: "Bagaimanakah mekanika cara kerja dari mesin cetak presisi Plotter tipe Pena (Pen Plotter)?",
          options: [
            "Menggunakan pancaran laser statis di atas piringan magnetik",
            "Menggunakan satu atau beberapa pena berwarna mekanis yang bergerak menggambar garis lurus kontinu secara presisi di atas kertas lebar",
            "Melewatkan roller besi panas di atas lembaran berlapis lilin",
            "Menyemprotkan partikel tinta cair menggunakan getaran ultrasonik",
          ],
          correctAnswer:
            "Bekerja Menggunakan Satu Atau Beberapa Pena Beraneka Warna Untuk Menggambar Secara Langsung Di Atas Media. Output Berupa Rancangan Visual Yang Dibentuk Dari Tarikan Garis Yang Berkesinambungan",
        },
        {
          id: 15,
          text: "Apakah perbedaan fungsional utama dari modul Sound Card tipe PCI (Internal) dibandingkan dengan Sound Card Eksternal (USB DAC)?",
          options: [
            "Sound Card PCI dipasang langsung di luar sasis PC menggunakan jalur kabel analog",
            "Sound Card PCI dipasang pada slot ekspansi PCI motherboard (internal), sedangkan Sound Card Eksternal dipasang di luar sasis menggunakan jalur port USB (minim interferensi kelistrikan PC)",
            "Sound Card Eksternal tidak mendukung kualitas audio resolusi tinggi",
            "Sound Card PCI ditenagai baterai tanpa perlu suplai dari PSU",
          ],
          correctAnswer:
            "Sound Card PCI Dipasang Pada Slot PCI Motherboard, Sedangkan Sound Card External Dipasang Melalui USB",
        },
        {
          id: 16,
          text: "Seorang pengguna Virtual Reality (VR) merasakan sensasi suhu panas atau dingin secara nyata pada sarung tangan pengontrolnya saat menyentuh objek virtual. Jenis teknologi haptik yang digunakan adalah...",
          options: [
            "Haptik Taktil",
            "Haptik Kinestik",
            "Haptik Termal",
            "Haptik Audio",
          ],
          correctAnswer: "Haptik Termal",
        },
        {
          id: 17,
          text: "Seorang mahasiswa sekolah penerbangan sedang berlatih menggunakan mesin simulator kokpit pesawat terbang yang memberikan sensasi gerakan, hambatan kemudi, dan tekanan fisik nyata sesuai gravitasi. Jenis teknologi haptik yang ia rasakan adalah...",
          options: [
            "Haptik Taktil",
            "Haptik Kinestik",
            "Haptik Termal",
            "Haptik Akustik",
          ],
          correctAnswer: "Haptic Kinestik",
        },
      ],
    },
  },
];

export default quizData;
