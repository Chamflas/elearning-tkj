import { video } from "framer-motion/client";

const hardwareData = [
  {
    id: "cpu",
    name: "CPU (Central Processing Unit)",
    shortDescription:
      "Otak utama komputer yang mengeksekusi instruksi dan mengendalikan seluruh komponen sistem.",
    icon: "Cpu",
    imageUrl:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi Utama CPU",
        imageUrl:
          "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2024/04/53366612939_4a328f5233_o.jpg",
        content:
          "CPU adalah otak dari komputer yang bertugas mengeksekusi instruksi dari program, melakukan kalkulasi aritmatika dan logika, serta mengontrol aliran data antar komponen. Setiap perintah yang dikirim pengguna akan diproses oleh CPU sebelum diteruskan ke komponen lain.",
        details: [
          {
            name: "ALU (Arithmetic Logic Unit)",
            text: "ALU adalah unit di dalam CPU yang bertanggung jawab menangani semua operasi aritmatika (penjumlahan, pengurangan, perkalian, pembagian) dan operasi logika (AND, OR, NOT, XOR). Ketika kamu membuka aplikasi kalkulator atau menjalankan rumus Excel, ALU-lah yang melakukan perhitungan di balik layar.",
          },
          {
            name: "CU (Control Unit)",
            text: "Control Unit adalah komponen CPU yang mengatur dan mengoordinasikan seluruh aktivitas di dalam prosesor. CU menerjemahkan instruksi dari memori, mengarahkan aliran data antara ALU, register, dan memori, serta memastikan setiap instruksi dieksekusi pada urutan yang benar.",
          },
          {
            name: "Register",
            text: "Register adalah lokasi penyimpanan kecil berkecepatan sangat tinggi yang berada langsung di dalam CPU. Register menampung data dan instruksi yang sedang aktif diproses. Contoh register penting: Program Counter (PC) menyimpan alamat instruksi berikutnya, Instruction Register (IR) menyimpan instruksi yang sedang dieksekusi, dan Accumulator (ACC) menyimpan hasil sementara operasi ALU.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/cNN_tTXABUA",
      },
      {
        title: "Kecepatan Clock (Clock Speed)",
        imageUrl: "https://techterms.com/img/xl/clock_speed_312.png",
        content:
          "Kecepatan Clock atau Clock Speed diukur dalam Gigahertz (GHz), yang secara teknis berarti miliaran pulsa listrik per detik. Setiap pulsa ini memungkinkan CPU untuk memproses satu unit data terkecil. Namun, performa CPU tidak hanya ditentukan oleh angka GHz saja, melainkan juga oleh IPC (Instructions Per Cycle) atau seberapa banyak perintah yang bisa diselesaikan dalam satu detak jantung tersebut. CPU modern kini dilengkapi dengan Base Clock sebagai kecepatan stabil untuk menghemat daya, dan Boost/Turbo Clock yang aktif secara otomatis saat sistem mendeteksi beban kerja berat (seperti saat rendering video atau gaming). Anda harus memahami bahwa CPU generasi terbaru dengan 3.0 GHz seringkali jauh lebih kuat daripada CPU generasi tua dengan 4.0 GHz karena arsitekturnya yang jauh lebih efisien",
        details: [
          {
            name: "Base Clock",
            text: "Base clock adalah kecepatan dasar CPU saat bekerja normal. Misalnya 2.4 GHz artinya CPU bisa melakukan 2,4 miliar siklus per detik",
          },
          {
            name: "Boost Clock",
            text: "Mengonsumsi lebih banyak listrik dan menghasilkan panas yang tinggi. CPU hanya bisa mempertahankan kecepatan ini sementara waktu; jika suhu komputer terlalu panas, kecepatannya akan turun kembali secara otomatis (disebut thermal throttling) untuk mencegah kerusakan komponen.",
          },
        ],
        videoUrl: "https://youtube.com/embed/3PcO10iAXTk",
      },
      {
        title: "Core & Thread",
        imageUrl: "https://ms.codes/cdn/shop/articles/2.jpg?v=1707820957",
        content:
          "Core adalah unit pemrosesan fisik di dalam CPU. CPU modern memiliki 2 hingga 64 core. Thread adalah alur eksekusi virtual — teknologi Hyper-Threading (Intel) atau SMT (AMD) memungkinkan 1 core menangani 2 thread sekaligus, meningkatkan efisiensi multitasking.",
        details: [
          {
            name: "Jenis CPU Berdasarkan Jumlah Core",
            text: "Single-Core: Komputer harus memproses tugas satu per-satu. Multi-Core: Komputer membagi tugas komputasi kepada beberapa inti.",
          },
          {
            name: "Jenis Thread Di dalam CPU",
            text: "Hardware Threads:  Jumlah maksimal jalur yang disediakan prosesor ke sistem operasi. Software Threads: Proses-proses kecil yang dibuat oleh aplikasi.",
          },
        ],
        videoUrl: "https://youtube.com/embed/17Pz64EfeN0",
      },
      {
        title: "Cache Memory",
        imageUrl:
          "https://media.geeksforgeeks.org/wp-content/uploads/20250722140316644568/cache.webp",
        content:
          "Cache (atau cache memory) adalah memori internal berukuran kecil dan berkecepatan sangat tinggi yang disematkan langsung pada atau sangat dekat dengan prosesor. Berfungsi sebagai perantara antara CPU dan RAM utama, cache menyimpan salinan data atau instruksi yang paling sering diakses.\n\nFungsi utamanya adalah menjembatani perbedaan kecepatan antara prosesor dan RAM, sehingga CPU tidak perlu menunggu terlalu lama saat mengambil data yang dibutuhkan berulang-ulang.",
        details: [
          {
            name: "L1 Cache",
            text: "Cache L1 adalah cache tercepat dan terkecil, biasanya berukuran 16KB hingga 128KB per core. Terletak langsung di dalam inti prosesor, L1 cache menyimpan instruksi dan data yang paling sering digunakan untuk eksekusi cepat.",
          },
          {
            name: "L2 Cache",
            text: "Cache L2 lebih besar (256KB hingga 8MB) dan sedikit lebih lambat dibanding L1. Biasanya terletak di dalam chip prosesor tetapi di luar inti utama, L2 cache menyimpan data yang tidak cukup sering digunakan untuk L1 tetapi masih sering diakses.",
          },
          {
            name: "L3 Cache",
            text: "Cache L3 adalah cache terbesar (2MB hingga 64MB) dan paling lambat dibanding L1 dan L2, namun tetap jauh lebih cepat daripada RAM. L3 cache biasanya dibagi di antara semua inti prosesor dan berfungsi sebagai buffer untuk data yang sering diakses oleh beberapa core sekaligus.",
          },
        ],
        videoUrl: "https://youtube.com/embed/3PcO10iAXTk",
      },
      {
        title: "Jenis CPU",
        imageUrl:
          "https://cdn.educba.com/academy/wp-content/uploads/2025/07/RISC-vs-CISC.jpg",
        content:
          "Jenis CPU menentukan bagaimana prosesor memahami dan mengeksekusi instruksi. Saat ini dunia komputasi terbagi menjadi dua kubu besar: CISC yang mengutamakan instruksi kompleks namun ringkas di sisi software, dan RISC yang menggunakan instruksi sederhana untuk mencapai efisiensi daya yang luar biasa.",
        details: [
          {
            name: "CISC (x86 - Intel & AMD)",
            text: "Complex Instruction Set Computer. Satu instruksi CISC dapat melakukan beberapa operasi rendah sekaligus (seperti mengambil data dari memori, kalkulasi, lalu menyimpan kembali). Arsitektur x86 adalah standar untuk PC dan Laptop (Intel Core, AMD Ryzen). Keunggulannya adalah performa mentah yang sangat tinggi, namun cenderung lebih boros daya dan menghasilkan panas lebih banyak.",
          },
          {
            name: "RISC ARM (Apple, Qualcomm, Samsung)",
            text: "Reduced Instruction Set Computer. Instruksinya sangat sederhana namun dieksekusi dengan sangat cepat. ARM mendominasi pasar HP (Snapdragon, Exynos) dan kini mulai menguasai laptop (Apple M-Series) karena efisiensi dayanya yang luar biasa — performa tinggi dengan baterai yang sangat awet.",
          },
          {
            name: "RISC-V (Arsitektur Masa Depan)",
            text: "Arsitektur RISC yang bersifat Open Source (bebas royalti). Jika x86 milik Intel dan ARM milik perusahaan ARM, RISC-V bebas digunakan oleh siapa saja. Saat ini banyak dikembangkan untuk chip AI, mikrokontroler, dan diprediksi akan menjadi pesaing berat ARM di masa depan karena sifatnya yang terbuka.",
          },
        ],
        videoUrl: "https://youtube.com/embed/7xWaijDmKDY",
      },
      {
        title: "TDP & Solusi Pendinginan",
        imageUrl:
          "https://darkflash-image-cloud.s3.us-west-2.amazonaws.com/cdn/article/attach/000000000000222/202506250046940.png",
        content:
          "TDP (Thermal Design Power) adalah nilai maksimal panas yang dihasilkan oleh CPU dalam kondisi beban kerja penuh, diukur dalam Watt. Memahami TDP sangat krusial untuk menentukan jenis pendingin (cooler) yang tepat agar CPU tidak mengalami 'Thermal Throttling' (penurunan kecepatan otomatis akibat terlalu panas).",
        details: [
          {
            name: "Air Cooling (Pendingin Udara)",
            text: "Menggunakan heatsink aluminium dan kipas untuk membuang panas. Terbagi menjadi Stock Cooler (bawaan pabrik untuk TDP rendah) dan Aftermarket Tower Cooler (untuk TDP menengah-tinggi). Murah, awet, dan minim perawatan.",
          },
          {
            name: "Liquid Cooling (AIO & Custom Loop)",
            text: "Menggunakan cairan (coolant) yang dialirkan melalui radiator. Sangat efektif untuk CPU dengan TDP tinggi (>125W) seperti Core i9 atau Ryzen 9. Memberikan estetika yang lebih baik dan suara yang lebih senyap dibanding air cooler.",
          },
          {
            name: "Thermal Throttling",
            text: "Kondisi di mana CPU secara otomatis menurunkan kecepatannya saat suhu menyentuh batas kritis (biasanya 95-100°C). Anda harus memastikan suhu kerja ideal berada di kisaran 35-45°C saat idle dan maksimal 85°C saat beban berat.",
          },
        ],
        videoUrl: "https://youtube.com/embed/k_3pRFxbPtQ",
      },
      {
        title: "Socket & Kompatibilitas Motherboard",
        imageUrl:
          "https://globalamericaninc.com/wp-content/uploads/2022/02/MaxPixel.net-Cpu-Socket-Computer-Motherboard-707777-1024x765.jpg",
        content:
          "Socket adalah tempat fisik di mana CPU terhubung ke motherboard. Setiap brand (Intel & AMD) memiliki jenis socket yang berbeda-beda dan tidak bisa ditukar. Memilih CPU yang salah socket dengan motherboard akan menyebabkan pin patah dan kerusakan fatal.",
        details: [
          {
            name: "LGA (Land Grid Array) - Khas Intel",
            text: "Pin tembaga berada di Motherboard, sedangkan CPU hanya memiliki titik-titik kontak emas datar. Contoh: LGA 1700 (Intel Gen 12-14). Sangat aman bagi CPU, tapi motherboard harus sangat dijaga.",
          },
          {
            name: "PGA (Pin Grid Array) - Khas AMD",
            text: "Pin tembaga berada di kaki CPU, sedangkan Motherboard memiliki lubang-lubang kecil. Contoh: Socket AM4 (Ryzen 1000-5000). Hati-hati saat mencabut CPU karena pin bisa bengkok.",
          },
          {
            name: "Chipset & Generasi",
            text: "Meskipun socketnya sama (misal LGA 1151), belum tentu chipsetnya mendukung. Anda wajib memeriksa situs resmi motherboard untuk melihat daftar 'CPU Support List' sebelum melakukan perakitan atau upgrade.",
          },
        ],
        videoUrl: "https://youtube.com/embed/rShVLBIR2VA",
      },
    ],
  },
  {
    id: "gpu",
    name: "GPU (Graphics Processing Unit)",
    shortDescription:
      "Prosesor khusus grafis yang mengolah tampilan visual, rendering 3D, dan akselerasi komputasi paralel.",
    icon: "Monitor",
    imageUrl:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi GPU",
        imageUrl:
          "https://dlcdnwebimgs.asus.com/gain/128A96DB-DA90-4C45-A7A7-2A56F9F4F48A",
        content:
          "GPU (Graphics Processing Unit) adalah prosesor khusus yang dirancang untuk mengolah data grafis secara paralel. GPU menangani rendering gambar, video, animasi 3D, dan antarmuka visual pada monitor. GPU modern juga digunakan untuk komputasi paralel seperti AI/Machine Learning dan mining cryptocurrency.",
        details: [
          {
            name: "Rendering Grafis",
            text: "Mengubah data matematika 3D menjadi piksel 2D yang kamu lihat di monitor. Ini melibatkan perhitungan cahaya, tekstur, dan bayangan dalam waktu milidetik.",
          },
          {
            name: "GPGPU (General Purpose GPU)",
            text: "Penggunaan GPU untuk tugas non-grafis, seperti kecerdasan buatan (AI), penambangan kripto, dan simulasi ilmiah yang membutuhkan pemrosesan data masif secara paralel.",
          },
        ],
        videoUrl: "https://youtube.com/embed/h9Z4oGN89MU",
      },
      {
        title: "Terintegrasi (iGPU) vs Diskrit (dGPU)",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisT9qY2CykCRVcrc8R3stndWpS0VJHmkGL4fimLQnMiX9vgtdDCBNTsU&s=10",
        content:
          "Grafis terintegrasi (yang terpasang di CPU Anda) berbagi RAM sistem dan mengonsumsi daya lebih sedikit. Grafis ini ideal untuk tugas-tugas dasar sehari-hari seperti browsing web dan pekerjaan perkantoran. Grafis khusus (kartu diskrit) memiliki VRAM khusus sendiri, yang memberikan daya pemrosesan besar yang dibutuhkan untuk game kelas atas, rendering 3D, dan tugas-tugas AI.",
        details: [
          {
            name: "Integrated GPU (iGPU)",
            text: "Menyatu di dalam chip CPU. Menggunakan RAM sistem (Shared Memory). Cocok untuk tugas kantor, browsing, dan nonton video. Contoh: Intel Iris Xe, AMD Radeon Graphics.",
          },
          {
            name: "Discrete GPU (dGPU)",
            text: "Kartu terpisah dengan chip dan memori (VRAM) sendiri. Membutuhkan daya lebih besar tapi memberikan performa ribuan kali lebih kuat. Contoh: NVIDIA RTX 4060, AMD RX 7600.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/nZ9_h2LzX9g",
      },
      {
        title: "VRAM (Video RAM)",
        imageUrl:
          "https://id.ic-components.com/upfile/images/d7/20260415104456279.jpg",
        content:
          "VRAM adalah memori khusus pada GPU yang menyimpan tekstur, frame buffer, dan data grafis. Kapasitas VRAM umum: 4GB (entry), 8GB (mainstream gaming), 12-16GB (high-end), 24GB+ (professional). Tipe VRAM terkini adalah GDDR6 dan GDDR6X dengan bandwidth hingga 1TB/s pada GPU kelas atas.",
        videoUrl: "https://youtube.com/embed/z3GP8P9nqjM",
      },
      {
        title: "Teknologi Modern: Ray Tracing & Upscaling",
        imageUrl:
          "https://i.ytimg.com/vi/9FuWHApx_Sw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUoGmHDHTet4Cl8RxThhu5xcbyeg",
        content:
          "Di dalam game modern, Ray Tracing dan DLSS saling melengkapi. Ray Tracing bertugas membuat pencahayaan yang indah, sedangkan DLSS bertugas menutupi beban berat dari Ray Tracing tersebut agar game tetap nyaman dan lancar dimainkan.",
        details: [
          {
            name: "Real-Time Ray Tracing",
            text: "Teknologi yang mensimulasikan perilaku fisik cahaya secara nyata (pantulan di kaca, bayangan lembut, pencahayaan global) seperti di dunia asli.",
          },
          {
            name: "AI Upscaling (DLSS & FSR)",
            text: "Menggunakan AI untuk merender gambar di resolusi rendah (agar ringan) lalu diperbesar ke resolusi tinggi tanpa pecah, sehingga meningkatkan FPS game secara drastis.",
          },
        ],
        videoUrl: "https://youtube.com/embed/0FMlPUEAZfs",
      },
    ],
  },
  {
    id: "ram",
    name: "RAM (Random Access Memory)",
    shortDescription:
      "Memori sementara berkecepatan tinggi yang menyimpan data aktif untuk akses cepat oleh CPU.",
    icon: "MemoryStick",
    imageUrl:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi RAM",
        imageUrl: "https://m.media-amazon.com/images/I/61D2DDpDITL.jpg",
        content:
          "RAM (Random Access Memory) adalah memori volatile yang menyimpan data sementara selama komputer menyala. RAM menjembatani kesenjangan kecepatan antara CPU yang super cepat dan storage (SSD/HDD) yang relatif lambat. Data di RAM hilang saat komputer dimatikan — berbeda dengan storage yang bersifat permanen.",
        details: [
          {
            name: "Sifat Volatile",
            text: "Data yang disimpan di RAM hanya bertahan selama komputer dialiri arus listrik (menyala). Ketika komputer dimatikan atau di-restart, semua data di dalam RAM akan terhapus total secara otomatis.",
          },
          {
            name: "Sebagai Jembatan Kecepatan",
            text: "CPU bekerja sangat cepat (dalam nanodetik), sedangkan storage bekerja relatif lambat (milidetik). RAM bertindak di tengah-tengah untuk menampung data sementara agar CPU tidak perlu menunggu storage.",
          },
        ],
      },
      {
        title: "Evolusi Standar RAM: DDR3, DDR4, DDR5",
        imageUrl: "https://bigrit.com/wp-content/uploads/2019/05/DDR-RAM-1.jpg",
        content:
          "RAM modern menggunakan teknologi DDR (Double Data Rate), yang berarti RAM dapat mengirimkan data dua kali dalam satu siklus jam. Saat ini, transisi besar sedang terjadi dari standar DDR4 ke DDR5.",
        details: [
          {
            name: "DDR3",
            text: "Generasi memori lawas yang sudah tidak diproduksi atau didukung oleh sistem komputer modern karena kecepatannya yang lambat dan konsumsi daya listriknya yang lebih tinggi (1.5V). Cocok untuk komputer lawas atau upgrade ringan.",
          },
          {
            name: "DDR4",
            text: "Generasi transisi yang saat ini masih mendominasi pasar karena harganya terjangkau, menawarkan performa sangat mumpuni untuk PC kelas menengah dengan kecepatan 2133–3200 MHz, konsumsi daya 1.2V, dan batas kapasitas hingga 32GB per keping. Cocok untuk gaming, office, dan multitasking ringan.",
          },
          {
            name: "DDR5",
            text: "Generasi terbaru yang menawarkan kecepatan lebih tinggi (4800–8400 MHz), efisiensi daya lebih baik (1.1V), dan kapasitas per keping hingga 128GB. DDR5 juga memiliki fitur onboard ECC (Error-Correcting Code) untuk meningkatkan stabilitas sistem. Cocok untuk workstation, gaming kelas atas, dan aplikasi berat seperti rendering 3D atau AI.",
          },
        ],
        videoUrl: "https://youtube.com/embed/zAI9Eihgv_0",
      },
      {
        title: "Konfigurasi Dual Channel",
        imageUrl:
          "https://www.compuram.de/blog/wp-content/uploads/2018/03/dual-channel1_en.jpg",
        content:
          "Konfigurasi RAM dual channel adalah teknik pemasangan dua keping memori identik yang memungkinkan sistem membaca dan menulis data secara paralel. Setup ini menggandakan bandwidth memori, sehingga secara signifikan dapat mendongkrak performa multitasking dan kinerja grafis (terutama dengan GPU terintegrasi)",
        details: [
          {
            name: "Single Channel (1 Keping)",
            text: "Misalnya memasang 1x 16GB. CPU hanya memiliki satu 'jalan tol' (bus 64-bit) untuk berkomunikasi dengan RAM. Akibatnya, bandwidth dibatasi dan performa game/aplikasi berat bisa tertahan.",
          },
          {
            name: "Dual Channel (2 Keping)",
            text: "Misalnya memasang 2x 8GB di slot yang direkomendasikan motherboard (biasanya selang-seling, slot 2 dan 4). Ini akan membuka dua 'jalan tol' (128-bit), melipatgandakan kecepatan transfer data antara RAM dan CPU.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/8reVZ87uASU",
      },
      {
        title: "Kecepatan (MHz) vs Latency (CL)",
        imageUrl:
          "https://images.wondershare.com/recoverit/article/check_available_ram_windows_3.png",
        content:
          "Saat membeli RAM, ada dua spesifikasi yang sering membingungkan: Kecepatan (MHz/MTs) dan CAS Latency (CL). Kombinasi keduanya menentukan 'True Latency' atau kecepatan asli RAM tersebut.",
        details: [
          {
            name: "Kecepatan (MHz) - Makin Tinggi Makin Bagus",
            text: "Angka ini menunjukkan seberapa banyak siklus data yang bisa dilakukan RAM per detiknya. Kecepatan tinggi sangat bagus untuk meningkatkan Frame Rate (FPS) pada game.",
          },
          {
            name: "CAS Latency (CL) - Makin Rendah Makin Bagus",
            text: "CL (misal: CL16, CL18) adalah jeda waktu yang dibutuhkan RAM untuk merespons perintah dari CPU. Jadi, DDR4 3200MHz CL16 lebih responsif (lebih cepat) dibandingkan DDR4 3200MHz CL18.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/Fl1uU99p6v0",
      },
    ],
  },
  {
    id: "motherboard",
    name: "Motherboard (Papan Induk)",
    shortDescription:
      "Papan sirkuit utama yang menghubungkan seluruh komponen komputer menjadi satu sistem yang utuh.",
    icon: "CircuitBoard",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi Motherboard",
        imageUrl:
          "https://intelcorp.scene7.com/is/image/intelcorp/s2-a9-1-anatomy-of-motherboard-rwd:1920-1080?wid=1072&hei=603&fmt=webp-alpha",
        content:
          "Motherboard adalah papan sirkuit cetak (PCB) utama yang menjadi fondasi tempat seluruh komponen terpasang dan berkomunikasi. Motherboard menyediakan jalur data (bus), slot ekspansi, konektor daya, port I/O, dan chipset yang mengatur komunikasi antar komponen.",
        videoUrl: "https://www.youtube.com/embed/b2pd3Y6aBag",
      },
      {
        title: "Form Factor (Ukuran)",
        imageUrl:
          "https://intelcorp.scene7.com/is/image/intelcorp/s2-a7-2-mini-itx-micro-atx-motherboards-rwd:1920-1080?wid=1072&hei=603",
        content:
          "Form factor motherboard adalah standar spesifikasi yang menentukan dimensi fisik, tata letak, dan kompatibilitas komponen. Ini mengatur penempatan lubang sekrup, konektor daya, dan slot ekspansi agar sesuai dengan casing PC. Ukurannya sangat memengaruhi jumlah komponen yang bisa dipasang.",
        details: [
          {
            name: "E-ATX (Extended ATX)",
            text: "Biasanya memiliki 8 slot RAM (mendukung Quad Channel), mendukung pemasangan lebih dari dua kartu grafis secara bersamaan, dan memiliki sistem penyaluran listrik yang sangat besar untuk CPU kelas server atau prosesor kelas atas ",
          },
          {
            name: "ATX",
            text: "Memiliki 4 slot RAM, 2 hingga 3 slot PCIe ukuran penuh (untuk GPU atau kartu tambahan), dan banyak port penyimpanan (M.2 atau SATA).",
          },
          {
            name: "Micro-ATX",
            text: "Menyediakan 4 slot RAM, tetapi biasanya hanya memiliki 1 slot PCIe utama (untuk 1 Kartu Grafis) dan mungkin 1 slot kecil tambahan untuk kartu Wi-Fi.",
          },
          {
            name: "Mini-ITX",
            text: "Hanya memiliki 2 slot RAM dan 1 slot PCIe (hanya cukup untuk satu Kartu Grafis).",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/kQ1FgGidoic",
      },
      {
        title: "Socket CPU & Chipset",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/cJBuw9hch6u7kCAQryZkoK.jpg",
        content:
          "Dua hal terpenting saat memilih motherboard adalah tipe socket dan chipset yang digunakannya. Ini menentukan prosesor apa yang kompatibel dan fitur canggih apa saja yang diaktifkan pada PC Anda.",
        details: [
          {
            name: "Socket Prosesor",
            text: "Rumah tempat menancapkan CPU. Setiap brand memiliki standar socketnya sendiri (seperti LGA 1700 untuk Intel Gen 12-14, dan AM5 untuk Ryzen generasi terbaru). Kaki pin prosesor tidak boleh dipaksa masuk ke socket yang tidak cocok.",
          },
          {
            name: "Chipset (Otak Kedua Motherboard)",
            text: "Chip khusus yang mengatur jalur komunikasi data. Chipset menentukan jumlah port USB, slot PCIe, dan kemampuan overclocking. Intel memiliki seri H (entri), B (menengah), Z (premium). AMD memiliki seri A (entri), B (menengah), X (premium).",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/eJn-qPHtfzI",
      },
      {
        title: "Slot Ekspansi & Konektor Storage",
        imageUrl: "https://miro.medium.com/1*ULmCDD2PGhcKCHH4UN_wZg.png",
        content:
          "Slot ekspansi motherboard adalah soket fisik yang memungkinkan Anda untuk menambah, meningkatkan, atau menyesuaikan kemampuan komputer Anda. Slot ini terhubung langsung ke jalur komunikasi (bus) motherboard untuk berinteraksi dengan CPU, menyediakan fungsionalitas untuk grafis, penyimpanan berkecepatan tinggi, dan jaringan.",
        details: [
          {
            name: "PCIe x16 & x1 (PCI Express)",
            text: "Slot ekspansi tercepat. PCIe x16 digunakan khusus untuk Kartu Grafis (GPU) karena membutuhkan bandwidth sangat besar. PCIe x1 digunakan untuk expansion card kecil seperti kartu WiFi, sound card, atau capture card.",
          },
          {
            name: "Slot M.2 & Port SATA",
            text: "Slot M.2 digunakan untuk menancapkan SSD NVMe super cepat langsung di atas motherboard tanpa kabel. Port SATA digunakan untuk menghubungkan Hard Disk (HDD) atau SSD 2.5 inci menggunakan kabel data SATA.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/PrXwe21biJo",
      },
      {
        title: "VRM (Sistem Catu Daya CPU)",
        imageUrl:
          "https://d1q3zw97enxzq2.cloudfront.net/images/Slide1_8skA6r6.width-1000.format-webp.webp",
        content:
          "VRM (Voltage Regulator Module) adalah rangkaian komponen di dekat socket CPU yang sangat krusial namun sering diabaikan pemula. VRM bertindak sebagai pengatur tegangan agar CPU Anda tidak terbakar akibat daya yang tidak stabil.",
        details: [
          {
            name: "Mengubah Tegangan Listrik",
            text: "PSU mengirimkan daya sebesar 12V ke motherboard, sedangkan CPU yang sensitif hanya membutuhkan tegangan sekitar 1.1V - 1.4V. VRM bertugas menurunkan dan menstabilkan tegangan 12V tersebut menjadi sangat presisi agar CPU bisa bekerja dengan aman.",
          },
          {
            name: "VRM Heatsink & Jumlah Phase",
            text: "Semakin banyak 'phase' daya pada VRM, semakin stabil suplai listrik ke CPU. Motherboard menengah ke atas dilengkapi pendingin logam (heatsink) pada VRM-nya untuk membuang panas berlebih saat CPU bekerja berat.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/OTMi5mqdIwA", // Link ke pembahasan detail VRM
      },
    ],
  },
  {
    id: "storage",
    name: "Storage (Penyimpanan)",
    shortDescription:
      "Media penyimpanan data permanen untuk sistem operasi, aplikasi, dan file pengguna.",
    icon: "HardDrive",
    imageUrl:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi Storage",
        imageUrl:
          "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&h=400&fit=crop",
        content:
          "Storage adalah media penyimpanan non-volatile yang menyimpan data secara permanen meski komputer dimatikan. Storage menyimpan sistem operasi, aplikasi, game, dokumen, foto, video, dan semua file pengguna. Kecepatan storage sangat mempengaruhi boot time dan loading aplikasi.",
        details: [
          {
            name: "Sifat Non-Volatile",
            text: "Berbeda dengan RAM yang volatil, storage bersifat non-volatil. Data di dalamnya tidak akan hilang meskipun komputer dimatikan atau tidak mendapatkan aliran listrik selama bertahun-tahun.",
          },
          {
            name: "Performa Read & Write Speed",
            text: "Kecepatan baca (Read) mempengaruhi seberapa cepat komputer melakukan booting OS atau membuka file game/aplikasi. Kecepatan tulis (Write) mempengaruhi seberapa cepat komputer menduplikasi atau menyimpan file baru.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/1vO9l1idWac",
      },
      {
        title: "HDD (Hard Disk Drive)",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hatachi_500_GB_hard_drive%2C_2011.jpg",
        content:
          "HDD adalah teknologi penyimpanan tradisional yang sudah digunakan sejak tahun 1950-an. Cara kerjanya sangat mekanis, memanfaatkan piringan magnetik yang berputar dengan kecepatan sangat tinggi.",
        details: [
          {
            name: "Bagian Mekanis HDD",
            text: "Di dalam HDD terdapat piringan logam magnetik (platter) yang berputar (umumnya 5400 atau 7200 RPM) dan sebuah jarum pembaca (actuator arm) yang bergerak maju-mundur di atas piringan tanpa menyentuhnya.",
          },
          {
            name: "Kelemahan Fisik HDD",
            text: "Karena memiliki bagian yang bergerak, HDD sangat lambat (kecepatan maksimal hanya ~100-150 MB/s). Selain itu, HDD sangat rentan terhadap guncangan fisik. Mengguncang laptop yang sedang menyala dengan HDD di dalamnya bisa merusak piringan tersebut (bad sector).",
          },
        ],
        videoUrl: "https://youtube.com/embed/wteUW2sL7bc",
      },
      {
        title: "SSD: SATA vs NVMe M.2",
        imageUrl:
          "https://blog.dimensidata.com/wp-content/uploads/Perbedaan-SSD-NVME-dan-SSD-Sata-Bagus-Mana-660x330.jpg",
        content:
          "SSD (Solid State Drive) merevolusi dunia penyimpanan komputer dengan menghilangkan semua komponen mekanis. SSD menggunakan chip flash NAND (mirip seperti flashdisk raksasa) yang bekerja sangat cepat dan hening.",
        details: [
          {
            name: "SSD SATA (Interface Tradisional)",
            text: "Menggunakan bentuk fisik 2.5 inci atau M.2, namun dibatasi oleh jalur komunikasi SATA III yang lawas. Kecepatan maksimalnya terbatas di kisaran 500 - 550 MB/s. Sangat bagus untuk upgrade laptop/PC lama agar kembali kencang.",
          },
          {
            name: "SSD NVMe M.2 (Interface PCIe)",
            text: "Menggunakan bentuk stik kecil (form factor M.2) dan dicolok langsung ke motherboard melalui jalur PCIe (bukan SATA). Kecepatannya luar biasa, mulai dari Gen 3 (3.500 MB/s) hingga Gen 4/5 yang menembus 7.000 - 14.000 MB/s.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/rYixxo875VE",
      },
      {
        title: "Ketahanan SSD: Memahami TBW",
        imageUrl:
          "https://media.kingston.com/kingston/videos/ktc-videos-blog-servers-and-data-centers-understanding-ssd-endurance-tbw-dwpd-lg.jpg",
        content:
          "Berbeda dengan HDD yang bisa terus ditulisi selama komponen mekanisnya tidak rusak, sel-sel memori flash pada SSD memiliki batas maksimal siklus penulisan ulang sebelum akhirnya memori tersebut aus dan mengunci diri menjadi read-only.",
        details: [
          {
            name: "Apa itu TBW (Total Bytes Written)?",
            text: "TBW adalah metrik yang menunjukkan seberapa banyak total data (dalam Terabyte) yang dapat ditulis ke dalam SSD sebelum masa garansinya habis atau sel memorinya mulai rusak. Contoh: SSD 1TB dengan 600 TBW berarti Anda bisa menulis ulang data sebesar 600 TB ke SSD tersebut.",
          },
          {
            name: "Pentingnya TBW",
            text: "Saat merakit PC untuk kebutuhan tulis-menulis data berat (seperti editing video 4K harian), pilihlah SSD dengan nilai TBW yang tinggi agar storage tersebut tidak cepat rusak sebelum waktunya.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/JTR7I02iNyA",
      },
    ],
  },
  {
    id: "psu",
    name: "PSU (Power Supply Unit)",
    shortDescription:
      "Unit catu daya yang mengkonversi arus AC menjadi DC untuk didistribusikan ke seluruh komponen PC.",
    icon: "Zap",
    imageUrl:
      "https://images.unsplash.com/photo-1587202372635-348c9c2afc6b?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi PSU",
        imageUrl:
          "https://bif.telkomuniversity.ac.id/wp-content/uploads/2024/05/psu1-scaled.jpg",
        content:
          "Jika CPU adalah otak, maka PSU adalah 'jantung' yang memompa darah (listrik) ke seluruh tubuh komputer. Tanpa PSU yang berkualitas, komponen mahal lainnya seperti CPU dan GPU tidak akan bisa bekerja dengan stabil, atau bahkan berisiko terbakar akibat fluktuasi tegangan.",
        details: [
          {
            name: "Konversi AC ke DC",
            text: "Listrik dari stop kontak rumah adalah arus bolak-balik (AC 220V) yang sangat kuat. Komponen PC membutuhkan arus searah (DC) dengan tegangan rendah yang sangat spesifik: 12V untuk CPU/GPU, 5V untuk SSD/Hard Disk, dan 3.3V untuk chipset motherboard. PSU bertugas mengkonversi dan membagi daya ini.",
          },
          {
            name: "Kestabilan Tegangan",
            text: "PSU yang baik harus bisa menjaga tegangan tetap stabil meskipun komputer sedang bekerja sangat berat. Fluktuasi tegangan sekecil apa pun dapat menyebabkan sistem mengalami Blue Screen (BSOD) atau crash mendadak.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/ZW1wcoERoDU",
      },
      {
        title: "Rating Watt & Kebutuhan Daya",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aot9ulZBC_JJ-CJt313gpFj8p75rPAT--jIr-uNHSw&s=10",
        content:
          "Kapasitas PSU diukur dalam Watt. Estimasi kebutuhan: Office/entry PC: 300-450W, Gaming mid-range: 550-650W, Gaming high-end: 750-850W, Workstation/enthusiast: 1000W+. Pilih PSU dengan headroom 20-30% dari total konsumsi sistem untuk efisiensi optimal dan ruang upgrade. Gunakan kalkulator PSU online untuk estimasi akurat.",
        details: [
          {
            name: "Menghitung Wattage & Headroom",
            text: "Jumlahkan konsumsi daya maksimal dari CPU, GPU, dan komponen lainnya, lalu tambahkan cadangan (headroom) sebesar 20-30%. Misalnya, jika sistem membutuhkan 450W, pilihlah PSU minimal 600W-650W agar PSU tidak dipaksa bekerja di batas maksimalnya terus-menerus.",
          },
          {
            name: "Sertifikasi 80 Plus",
            text: "Sertifikasi yang menjamin efisiensi daya PSU saat mengubah listrik AC menjadi DC. Mulai dari Standard, Bronze, Gold, hingga Titanium. PSU 80 Plus Gold memiliki efisiensi hingga 90%, artinya hanya ada 10% listrik yang terbuang menjadi panas. Semakin tinggi sertifikasi, semakin hemat listrik dan komponen internalnya semakin premium.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/iRpqGF2poJM",
      },
      {
        title: "Modular vs Non-Modular (Manajemen Kabel)",
        imageUrl:
          "https://www.murdockcruz.com/wp-content/uploads/2019/01/Seasonic-M12II-620-Evo-Feat.jpg",
        content:
          "Perbedaan utama terletak pada kabelnya: PSU modular memiliki kabel yang bisa dilepas-pasang, sedangkan PSU non-modular memiliki semua kabel yang tersambung secara permanen ke perangkat. PSU modular unggul untuk kerapian, sementara non-modular lebih ramah di kanton",
        details: [
          {
            name: "Non-Modular (Kabel Permanen)",
            text: "Semua kabel tersambung mati ke badan PSU. Harganya paling murah, namun kabel-kabel yang tidak terpakai akan menumpuk di dasar casing, merusak estetika dan bisa menghambat sirkulasi udara (airflow).",
          },
          {
            name: "Fully Modular (Kabel Bisa Dilepas)",
            text: "Semua kabel bisa dilepas-pasang. Anda hanya memasang kabel yang benar-benar dibutuhkan oleh sistem. Ini membuat manajemen kabel menjadi sangat rapi, airflow optimal, dan casing terlihat sangat bersih.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/Qk3AafaWyPc",
      },
      {
        title: "Sistem Proteksi & Bahaya PSU Murah",
        imageUrl:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiym5FuII6woNyWAyGtqF4MrLTipeV3UZ9S-Jst5ZD7OC2HSs663Nk4A7_j37V3E7eo7sqhjRllDImp4AFdGKjUipL9VWWCoDIb1OuLMac69Cgrc0u5nEwF_rjvVVo10oMYldBwZp2pvHE/s1600/image001.jpg",
        content:
          "Satu aturan emas dalam merakit PC: Jangan pernah berhemat di anggaran Power Supply. Membeli PSU murah tanpa merek terkenal (sering disebut PSU Bom) adalah ancaman terbesar bagi PC Anda.",
        details: [
          {
            name: "Fitur Proteksi Listrik (OVP/OCP/SCP)",
            text: "PSU berkualitas dilengkapi chip proteksi otomatis seperti OVP (Over Voltage Protection) untuk mencegah tegangan berlebih, OCP (Over Current Protection) untuk arus berlebih, dan SCP (Short Circuit Protection) jika ada korsleting. Jika terjadi petir atau korsleting, PSU akan langsung memutus daya secara mandiri untuk menyelamatkan CPU, RAM, dan GPU Anda.",
          },
          {
            name: "Mengapa PSU Murah Berbahaya?",
            text: "PSU murahan tidak memiliki sistem proteksi tersebut. Jika terjadi korsleting atau lonjakan listrik, PSU murahan akan meledak dan menyalurkan tegangan tinggi langsung ke sirkuit motherboard, seketika 'membunuh' CPU, RAM, dan kartu grafis Anda sekaligus.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/N7gHT6Z35r8", // Link ke video bahaya memakai PSU murah / tidak bersertifikasi
      },
    ],
  },
  {
    id: "casing",
    name: "Casing (Chassis)",
    shortDescription:
      "Rumah pelindung yang menyatukan seluruh komponen PC sekaligus mengatur sirkulasi udara dan estetika.",
    icon: "Box",
    imageUrl:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Fungsi Casing",
        imageUrl:
          "https://image.idntimes.com/post/20240318/casing-pc-putih-5912c0e5c62dc8bd055c353c53a3159f-d53a48d492d81687e74ea42fdef1ebdb.jpg",
        content:
          "Casing bukan hanya kotak untuk menyimpan komponen. Fungsinya mencakup: (1) Melindungi komponen dari debu, benturan, dan gangguan fisik; (2) Mengatur aliran udara (airflow) untuk pendinginan optimal; (3) Mengurangi noise dari komponen; (4) Menyediakan struktur mounting yang sesuai standar; (5) Estetika dan personalisasi build.",
        videoUrl: "https://youtube.com/embed/OcRxdWbwplY",
      },
      {
        title: "Form Factor Casing",
        imageUrl:
          "https://gamemaxpc.com/static/upload/image/20241024/1729754128976080.jpg",
        content:
          "Form factor casing mengacu pada ukuran fisik dan klasifikasi dimensi sasis komputer. Standar ini menentukan kompatibilitas ukuran motherboard, panjang GPU, dan kapasitas sistem pendingin. Kategori utamanya meliputi Full Tower, Mid Tower, Micro-ATX (Mini Tower), hingga Small Form Factor (SFF) atau Mini-ITX.",
        details: [
          {
            name: "Full & Mid Tower (Standar ATX)",
            text: "Ukuran paling populer dan luas. Sangat mudah dirakit, memiliki manajemen kabel yang baik, mendukung motherboard ATX, dan memiliki ruang yang cukup untuk GPU berukuran besar.",
          },
          {
            name: "Mini-ITX & Small Form Factor (SFF)",
            text: "Casing yang sangat ringkas untuk PC portabel. Merakit di casing ini adalah tantangan besar bagi teknisi karena ruangnya sangat sempit, membutuhkan manajemen kabel yang sangat rapi, dan komponen pendukung khusus yang umumnya lebih mahal.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/xhy4KrcbcQA",
      },
      {
        title: "Peran Utama & Konsep Airflow",
        imageUrl:
          "https://voltcave.com/wp-content/uploads/2022/01/Voltcave-PC-airflow-guide.webp",
        content:
          "Casing bukan sekadar kotak pembungkus. Selain melindungi komponen sensitif dari benturan fisik dan debu, casing bertindak sebagai pengatur jalur aliran udara (airflow) utama untuk menjaga suhu kerja seluruh hardware tetap dingin dan optimal.",
        details: [
          {
            name: "Prinsip Aliran Udara (Intake & Exhaust)",
            text: "Udara dingin ditarik masuk dari bagian depan atau bawah casing (Intake), sedangkan udara panas dari dalam dihisap keluar melalui bagian belakang atau atas casing (Exhaust). Udara panas selalu bergerak naik ke atas, sehingga kipas atas dan belakang wajib dipasang menghadap keluar.",
          },
          {
            name: "Tekanan Positif vs Tekanan Negatif",
            text: "Tekanan Positif terjadi jika kipas intake lebih banyak dibanding exhaust. Ini mencegah debu masuk dari sela-sela casing yang tidak difilter karena udara didorong keluar. Tekanan Negatif terjadi jika kipas exhaust lebih dominan, membuat suhu sedikit lebih dingin tetapi debu dari luar akan mudah menyelinap masuk lewat sela sasis.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/YNcd-IGMj2c",
      },
      {
        title: "Desain Fisik & Manajemen Kabel",
        imageUrl:
          "https://gamersnexus.net/u/styles/large_responsive_no_watermark_/public/inline-images/vlcsnap-2025-07-15-13h54m36s396.jpg.webp",
        content:
          "Casing PC yang bagus ditentukan oleh kemampuan sirkulasi udara (airflow) yang optimal, kompatibilitas ukuran dengan komponen Anda, kemudahan manajemen kabel, serta kualitas material yang kokoh. Casing yang tepat akan melindungi perangkat keras sekaligus menjaga performa tetap maksimal.",
        details: [
          {
            name: "Material Sasis & Filter Debu",
            text: "Casing berkualitas menggunakan bahan baja (SPCC) yang tebal untuk menopang beban komponen, kaca Tempered Glass di sisi samping (bukan akrilik murahan yang mudah baret), dan memiliki filter debu magnetik yang mudah dilepas dan dicuci di setiap lubang hisap udara.",
          },
          {
            name: "PSU Shroud & Jalur Manajemen Kabel",
            text: "Casing modern dilengkapi PSU Shroud (kotak penutup di bagian bawah) untuk menyembunyikan kabel PSU yang berantakan, serta memiliki ruang sekitar 2-3 cm di belakang papan motherboard agar kabel-kabel dapat ditata rapi tanpa menghalangi sirkulasi udara utama.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/gnv2spLqGss",
      },
      {
        title: "Pengecekan Kompatibilitas (Clearance)",
        imageUrl:
          "https://oneit-solution.com/wp-content/uploads/2021/10/PC-Case-DA-GAMING-CHASSIS-N5-2-600x600.jpg",
        content:
          "Salah satu kesalahan fatal teknisi pemula adalah membeli komponen tanpa mengukur ruang di dalam casing. Anda wajib memeriksa spesifikasi 'Clearance' sebelum merakit PC.",
        details: [
          {
            name: "GPU Clearance & CPU Cooler Height",
            text: "Periksa panjang maksimal GPU yang didukung casing (GPU modern yang sangat panjang sering mentok ke kipas depan jika casing terlalu pendek). Periksa juga tinggi maksimal CPU Air Cooler agar kaca casing bisa ditutup sempurna.",
          },
          {
            name: "Dukungan Radiator Liquid Cooling",
            text: "Jika menggunakan pendingin cairan (AIO Liquid Cooler), periksa apakah casing mendukung radiator ukuran 240mm, 280mm, atau 360mm, serta ketebalan memori RAM agar radiator di bagian atas tidak menabrak RAM.",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/vhyqtZx0NHM",
      },
    ],
  },
  {
    id: "input-devices",
    name: "Perangkat Input (Masukan)",
    shortDescription:
      "Komponen hardware yang berfungsi memasukkan data, instruksi, atau komando dari pengguna ke dalam sistem komputer.",
    icon: "Keyboard",
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Keyboard (Papan Ketik)",
        imageUrl:
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=400&fit=crop",
        content:
          "Keyboard adalah perangkat masukan pokok yang digunakan untuk berinteraksi dengan sistem komputer. Perangkat ini memungkinkan penginputan teks, angka, simbol, serta komando operasional secara cepat. Setiap tombol (key) mewakili perintah tertentu, yang terbagi dalam segmen alfanumerik, fungsi, dan navigasi.",
        details: [
          {
            name: "QWERTY Layout",
            text: "Susunan tombol standar internasional yang diatur secara acak dengan deretan huruf Q-W-E-R-T-Y di baris kiri atas. Desain ini awalnya dibuat pada era mesin ketik mekanik untuk mencegah pin besi bertabrakan saat mengetik cepat.",
          },
          {
            name: "Wireless & Bluetooth",
            text: "Menggunakan koneksi nirkabel (frekuensi radio 2.4 GHz atau Bluetooth) untuk terhubung ke komputer. Memberikan fleksibilitas tinggi dan meja kerja yang rapi tanpa kabel.",
          },
          {
            name: "Mechanical Keyboard (Tambahan Teknisi)",
            text: "Jenis keyboard yang menggunakan switch mekanik individual di bawah setiap tombol. Sangat awet, responsif, dan memberikan umpan balik (feedback) taktil yang disukai juru ketik profesional dan gamer.",
          },
        ],
      },
      {
        title: "Mouse (Tetikus)",
        imageUrl:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=400&fit=crop",
        content:
          "Mouse berfungsi mengendalikan pergerakan kursor (pointer) pada monitor untuk memilih, mengklik, dan mengeksekusi instruksi grafis. Mouse juga memfasilitasi operasi seret dan lepas (drag-and-drop) untuk memindahkan objek digital.",
        details: [
          {
            name: "Wireless Optical/Laser",
            text: "Menggunakan sensor inframerah atau laser untuk membaca pergeseran posisi di atas permukaan meja. Ditenagai oleh baterai dan terhubung tanpa kabel.",
          },
          {
            name: "Mouse Mekanis (Legacy)",
            text: "Teknologi lawas yang menggunakan bola karet kecil di bagian bawah. Ketika mouse digerakkan, bola memutar roda sensor di dalam mouse. Sangat rentan terhadap kotoran dan debu.",
          },
          {
            name: "Trackball Mouse",
            text: "Menggunakan bola besar di bagian atas atau samping yang digulirkan langsung menggunakan ibu jari. Mouse ini tetap diam di tempat, sangat menghemat ruang meja dan ergonomis.",
          },
        ],
      },
      {
        title: "Touchpad",
        imageUrl:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/esupport/esupport-pages/laptop-touchpad-tap-right-hand.png",
        content:
          "Touchpad adalah perangkat alternatif pengganti mouse yang menjadi standar wajib pada laptop. Mengandalkan gestur ujung jari untuk menggerakkan kursor dan mengeksekusi klik kiri atau klik kanan.",
        details: [
          {
            name: "Touchpad Standar",
            text: "Memiliki permukaan sensor datar dengan dua tombol fisik terpisah di bagian bawah untuk fungsi klik kiri dan klik kanan.",
          },
          {
            name: "Multi-Touchpad (Modern)",
            text: "Menggunakan sensor kapasitansi tinggi yang mengenali gestur beberapa jari sekaligus (misal: scroll dengan 2 jari, zoom-in/out, atau pindah aplikasi dengan slide 3 jari).",
          },
        ],
      },
      {
        title: "Scanner (Pemindai)",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Epson_V850_scanner_open_20230920.jpg/960px-Epson_V850_scanner_open_20230920.jpg",
        content:
          "Scanner berfungsi untuk mendigitalisasi lembaran fisik (seperti dokumen cetak, sertifikat, atau foto) menjadi file format digital (PDF/JPG) agar bisa disimpan dan disunting di komputer.",
        details: [
          {
            name: "Flatbed Scanner",
            text: "Model pemindai konvensional dengan permukaan kaca datar. Dokumen diletakkan menghadap ke bawah kaca, lalu lampu sensor akan bergerak memindai dokumen tersebut.",
          },
          {
            name: "ADF (Automatic Document Feeder) - Tambahan",
            text: "Scanner otomatis yang bisa menarik puluhan lembar dokumen sekaligus untuk dipindai secara berurutan tanpa harus meletakkan kertas satu-per-satu.",
          },
        ],
      },
      {
        title: "Microphone (Mikrofon)",
        imageUrl:
          "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=400&fit=crop",
        content:
          "Mikrofon berfungsi menangkap getaran suara di udara dan mengonversinya menjadi sinyal listrik analog, yang kemudian diubah oleh soundcard menjadi data audio digital di komputer.",
        details: [
          {
            name: "Table & Studio Mic",
            text: "Didesain khusus diletakkan di atas meja untuk kebutuhan konferensi rapat, podcast, atau rekaman profesional dengan kualitas tangkapan suara yang sangat sensitif.",
          },
          {
            name: "Hands & Stand Mic",
            text: "Mikrofon genggam (handheld) atau dipasang pada tiang tinggi (floor stand), sangat praktis digunakan oleh penyanyi atau pembicara publik di atas panggung.",
          },
        ],
      },
      {
        title: "WebCam (Kamera Web)",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logicool_StreamCam_%28cropped%29.jpg/960px-Logicool_StreamCam_%28cropped%29.jpg",
        content:
          "Webcam adalah kamera digital kecil yang terhubung ke komputer untuk menangkap video secara real-time guna panggilan video, rapat online, atau siaran langsung (streaming).",
        details: [
          {
            name: "USB WebCam",
            text: "Kamera eksternal yang dipasang di atas monitor menggunakan klip penjepit dan dihubungkan via port USB dengan sistem Plug and Play.",
          },
          {
            name: "Wireless & IP Camera",
            text: "Kamera yang terhubung menggunakan jaringan WiFi/modem tanpa membutuhkan kabel fisik untuk mengirimkan data visual ke komputer.",
          },
        ],
      },
      {
        title: "Touchscreen (Layar Sentuh)",
        imageUrl:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        content:
          "Touchscreen adalah teknologi antarmuka modern yang menggabungkan fungsi display visual (output) dan sensor pelacak sentuhan (input) langsung menggunakan jari atau pena stylus.",
        details: [
          {
            name: "Resistive Touchscreen (Tekanan)",
            text: "Bekerja berdasarkan tekanan fisik dari kuku atau stylus. Lebih murah tetapi kurang sensitif dan hanya bisa menerima satu titik sentuhan.",
          },
          {
            name: "Capacitive Touchscreen (Sentuhan Kulit)",
            text: "Bekerja mendeteksi sifat kelistrikan kulit manusia. Sangat sensitif, mendukung multi-touch (banyak jari), dan digunakan pada smartphone serta laptop modern.",
          },
        ],
      },
    ],
  },
  {
    id: "output-devices",
    name: "Perangkat Output (Keluaran)",
    shortDescription:
      "Komponen hardware yang menyajikan dan mendistribusikan hasil pemrosesan data komputer dalam bentuk visual, suara, atau media fisik.",
    icon: "Tv",
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    subMaterials: [
      {
        title: "Monitor (Penampil Visual)",
        imageUrl:
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=400&fit=crop",
        content:
          "Monitor adalah perangkat output visual utama komputer yang bertugas memproyeksikan sistem, teks, grafis, dan video kepada pengguna agar sistem komputer dapat dikendalikan.",
        details: [
          {
            name: "LCD (Liquid Crystal Display)",
            text: "Menggunakan kristal cair yang disinari oleh lampu latar (backlight). Jauh lebih tipis, tajam, dan hemat energi dibanding monitor tabung (CRT) kuno.",
          },
          {
            name: "LED (Light Emitting Diode)",
            text: "Menggunakan lampu dioda kecil sebagai backlight. Memberikan kontras warna yang lebih tajam, kerapatan piksel lebih padat, dan masa pakai yang lebih awet.",
          },
          {
            name: "OLED (Organic LED)",
            text: "Teknologi termodern di mana setiap piksel dapat memancarkan cahayanya sendiri tanpa backlight. Menghasilkan kontras hitam yang mutlak (true black) dan sangat hemat daya.",
          },
        ],
      },
      {
        title: "Printer (Pencetak Fisik)",
        imageUrl:
          "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=400&fit=crop",
        content:
          "Printer bertugas menyajikan hasil pemrosesan data digital (dokumen teks, gambar, atau laporan) ke dalam bentuk fisik di atas media kertas.",
        details: [
          {
            name: "Inkjet (Tinta Cair)",
            text: "Menyemprotkan titik-titik tinta cair yang sangat kecil ke atas kertas. Sangat bagus untuk mencetak foto berwarna dengan resolusi tinggi.",
          },
          {
            name: "Laser (Toner Bubuk)",
            text: "Memanfaatkan bubuk tinta kering (toner) dan silinder statis yang disinari laser untuk mencetak dokumen. Sangat cepat, efisien, dan cocok untuk perkantoran.",
          },
          {
            name: "Dot Matrix & Thermal",
            text: "Dot Matrix menggunakan pita dan jarum pengetuk (bising, untuk struk rangkap). Thermal menggunakan pemanas tanpa tinta di atas kertas khusus (untuk kasir atau struk ATM).",
          },
        ],
      },
      {
        title: "Speaker (Pengeras Suara)",
        imageUrl:
          "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=400&fit=crop",
        content:
          "Speaker berfungsi mengolah sinyal listrik audio analog dari sound card komputer menjadi getaran udara berupa gelombang suara fisik yang dapat didengar manusia.",
        details: [
          {
            name: "Bluetooth & Portable Speaker",
            text: "Menggunakan koneksi nirkabel Bluetooth dan ditenagai oleh baterai isi ulang (rechargeable) sehingga sangat praktis dibawa bepergian.",
          },
          {
            name: "Soundbar Speaker",
            text: "Speaker berbentuk batang panjang yang umumnya diletakkan di bawah monitor atau TV untuk menghasilkan suara yang jernih, kuat, dan hemat ruang.",
          },
        ],
      },
      {
        title: "Projector (Proyektor)",
        imageUrl:
          "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=400&fit=crop",
        content:
          "Proyektor berfungsi menampilkan (memproyeksikan) data visual komputer ke atas permukaan datar yang luas seperti dinding atau layar besar untuk audiens masif.",
        details: [
          {
            name: "DLP (Digital Light Processing)",
            text: "Mengandalkan jutaan cermin mikroskopis dan roda warna fisik berputar untuk memantulkan cahaya ke layar. Menghasilkan gambar yang sangat tajam.",
          },
          {
            name: "LCD & LED Projector",
            text: "LCD memanfaatkan tiga panel warna primer (RGB) secara bersamaan. LED mengandalkan lampu dioda berumur panjang sebagai sumber cahayanya yang sangat hemat energi.",
          },
        ],
      },
      {
        title: "Plotter",
        imageUrl:
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=400&fit=crop",
        content:
          "Plotter adalah mesin cetak presisi tingkat lanjut yang dirancang khusus untuk mencetak gambar teknis berskala besar seperti cetak biru arsitektur, peta geografi, atau cetakan CAD.",
        details: [
          {
            name: "Plotter Pena (Pen Plotter)",
            text: "Menggunakan pena tinta fisik mekanis yang bergerak menggambar garis lurus kontinu secara presisi langsung di atas kertas lebar.",
          },
          {
            name: "Plotter Elektrostatis & Thermal",
            text: "Plotter Elektrostatis menggunakan muatan listrik untuk menarik toner bubuk. Plotter Thermal menggunakan pin panas pada kertas khusus yang peka suhu.",
          },
        ],
      },
      {
        title: "Sound Card Output",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfJ3WfIMNXnGzgbBAjqvqi-4oqh-5WukkhamKKxn9VvBNixgrwOqjiic&s=10https://soundjakarta.com/wp-content/uploads/2022/08/sound-card-yang-bagus-untuk-live-streaming.jpg",
        content:
          "Sound Card adalah komponen penting yang menerjemahkan kode audio digital komputer menjadi gelombang suara analog untuk dialirkan ke speaker atau headphone.",
        details: [
          {
            name: "On-Board vs PCI Expansion",
            text: "On-board sudah menyatu dengan chipset motherboard (standar). PCI Expansion berupa kartu tambahan yang dicolok ke slot PCIe untuk kualitas audio rekaman profesional.",
          },
          {
            name: "External Sound Card (USB DAC)",
            text: "Dipasang di luar PC menggunakan port USB. Sangat populer di kalangan audiophile atau produser musik untuk meminimalisir gangguan interferensi listrik dari dalam casing.",
          },
        ],
      },
      {
        title: "Haptic Devices (Umpan Balik Taktil)",
        imageUrl:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=400&fit=crop",
        content:
          "Haptic Device adalah perangkat output modern yang memberikan umpan balik fisik (sensasi getaran, gesekan, atau tekanan) kepada kulit atau otot pengguna saat bermain game atau simulasi.",
        details: [
          {
            name: "Haptik Taktil & Kinestik",
            text: "Taktil memberikan stimulasi getar halus di kulit (seperti getar HP). Kinestik memberikan dorongan gaya balik pada otot/sendi (seperti stir kemudi balap yang terasa berat saat berbelok).",
          },
          {
            name: "Haptik Termal (Masa Depan)",
            text: "Teknologi mutakhir yang dapat memanipulasi suhu permukaan kontroler menjadi panas atau dingin untuk mensimulasikan sensasi suhu di dunia virtual reality (VR).",
          },
        ],
        videoUrl: "https://www.youtube.com/embed/nZ9_h2LzX9g",
      },
    ],
  },
];

export default hardwareData;
