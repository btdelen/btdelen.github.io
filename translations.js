// Translations dictionary for EN/TR
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.pcb': 'PCB Design',
        'nav.ios': 'iOS Development',
        'nav.workshop': 'Workshop',
        'nav.cad': '3D CAD',
        'nav.about': 'About',
        'nav.resume': 'Resume',
        'resume.journey': 'My Journey',
        'nav.contact': 'Contact',

        // Header
        'header.cv': 'Download CV',

        // Hero Section
        'hero.badge': 'Available for opportunities',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'Electrical-Electronics Engineer',
        'hero.description': 'I focus on Embedded Systems, Control Theory, and Robotics. I create integrated solutions combining precise hardware control with modern software interfaces.',
        'hero.cta.projects': 'Explore Projects',
        'hero.scroll': 'Scroll to explore',

        // Projects Section
        'projects.label': 'Featured Work',
        'projects.title': 'Projects',
        'projects.description': 'A selection of my embedded systems and robotics projects',
        'filters.all': 'All',
        'filters.hardware': 'Hardware / PCB',
        'filters.embedded': 'Embedded',
        'filters.software': 'Software',
        'projects.featured': 'Featured',
        'projects.category.hardware': 'Hardware & Software',
        'projects.category.embedded': 'Embedded Systems',
        'projects.category.software': 'Software Development',
        'projects.category.robotics': 'Robotics',
        'projects.category.control': 'Control Systems',
        'projects.category.pcb': 'PCB & Hardware Design',
        'projects.viewCode': 'View Code',
        'projects.comingSoon': 'Coming Soon',
        'projects.comingSoon.desc': 'Content is currently being prepared. Please check back later.',
        'projects.videoSoon': 'Video Coming Soon',

        // Project Descriptions
        'projects.robotarm.description': 'Voice-controlled robotic arm featuring Google Gemini AI integration, YOLOv8 object detection, and real-time computer vision for autonomous operations.',
        'projects.balancer.description': 'Real-time ball balancing system using PID control algorithm, Sharp IR sensor feedback, and UART telemetry for live tuning and monitoring.',
        'projects.mainboard.description': 'Custom designed mainboard for 3D printers and CNC PCB routers featuring integrated stepper drivers, limit switch support, and robust power delivery.',
        'projects.ios.description': 'Native iOS applications currently in development. Details coming soon.',

        // About Section
        'about.label': 'About Me',
        'about.title': 'Who I Am',
        'about.bio': "I'm an Electrical-Electronics Engineering graduate from Selçuk University. I'm passionate about building things that bridge hardware and software.",
        'about.p1': "I'm an Electrical and Electronics Engineering graduate from Selçuk University with a deep passion for bridging the gap between hardware and software. My journey in engineering is driven by curiosity and a desire to build systems that interact with the physical world.",
        'about.p2': "From designing custom PCBs to developing the firmware that brings them to life, and creating the iOS applications that control them, I enjoy tackling challenges across the entire embedded systems stack.",
        'about.stat1': "Hardware Projects",
        'about.stat3': "Years Experience",
        'about.skills.title': 'Areas of Expertise',
        'about.skills.embedded': 'Embedded Systems',
        'about.skills.robotics': 'Robotics',
        'about.skills.ios': 'iOS Development',
        'about.skills.web': 'Web Development',
        'about.skills.cad': '3D Modeling',
        'about.skills.pcb': 'PCB Design',
        'about.projects.title': "Projects I've Built",

        // Skills & Tools Section
        'skills.label': 'Tools & Skills',
        'skills.title': 'What I Work With',
        'skills.cad.title': '3D CAD Modeling',
        'skills.cad.description': 'Mechanical designs and enclosure models for electronics projects',
        'skills.pcb.title': 'PCB Circuit Design',
        'skills.pcb.description': 'Schematic capture and PCB layout for custom electronics',
        'skills.workshop.title': 'The Workshop',
        'skills.workshop.description': 'A visual tour of my tools, workbench, and electronics lab',

        // Services (What I Do)
        'services.label': 'My Expertise',
        'services.title': 'What I Do',
        'services.desc': 'Bridging the gap between physical hardware and intelligent software systems.',
        'services.hw.title': 'PCB Design',
        'services.hw.desc': 'Designing reliable custom circuits, schematics, and PCB layouts for industrial and robotics applications.',
        'services.viewPcb': 'View PCB Projects',
        'services.viewCad': 'View 3D CAD Models',
        'services.cad.title': '3D CAD Modeling',
        'services.cad.desc': 'Creating precise mechanical enclosures, structural parts, and 3D models for electronics projects using Fusion 360 and SolidWorks.',
        'services.fw.title': 'Embedded Systems',
        'services.fw.desc': 'Developing bare-metal C/C++ firmware for microcontrollers like STM32, Arduino, and ESP.',
        'services.sw.title': 'Software Development',
        'services.sw.desc': 'Building iOS apps and backend logic to interface securely and reliably with remote hardware endpoints.',

        // Projects extra
        'projects.viewDetails': 'View Details',
        'about.skills.pcb.view': '→ View Project',

        // Contact Section
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.location.value': 'Selçuklu Konya, Turkey',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.label': 'Get In Touch',
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.tagline': 'Engineering Hardware & Software with Precision',

        // Modal Translations
        'modal.overview': 'Overview',
        'modal.features': 'Key Features',
        'modal.techstack': 'Tech Stack',
        'modal.wiring': 'Wiring Diagram',
        'modal.viewGithub': 'View on GitHub',
        'modal.watchVideo': 'Watch Demo Video',

        // Robot Arm Modal
        'modal.robotarm.overview': 'A sophisticated 4-axis robotic arm system that combines AI-powered voice control, real-time object detection, and precise inverse kinematics for autonomous pick-and-place operations.',
        'modal.robotarm.f1.title': 'Voice Control',
        'modal.robotarm.f1.desc': 'Natural language commands via Google Gemini AI integration',
        'modal.robotarm.f2.title': 'Object Detection',
        'modal.robotarm.f2.desc': 'Real-time YOLOv8 detection with OpenCV computer vision',
        'modal.robotarm.f3.title': 'Inverse Kinematics',
        'modal.robotarm.f3.desc': 'Precise 4-DOF calculations for accurate positioning',
        'modal.robotarm.f4.title': 'Wireless Control',
        'modal.robotarm.f4.desc': 'ESP8266 WiFi module for remote operation',

        // Ball Balancer Modal
        'modal.balancer.overview': 'A single-axis ball balancing system demonstrating real-time PID control implementation on STM32 microcontroller. Features live UART telemetry for parameter tuning and system monitoring.',
        'modal.balancer.f1.title': 'Real-time PID Control',
        'modal.balancer.f1.desc': 'Tuned Kp, Ki, Kd parameters for stable ball positioning',
        'modal.balancer.f2.title': 'Sharp IR Distance Sensor',
        'modal.balancer.f2.desc': 'Analog distance measurement with noise filtering',
        'modal.balancer.f3.title': 'UART Telemetry',
        'modal.balancer.f3.desc': 'Live data streaming for debugging and parameter tuning',
        'modal.balancer.f4.title': 'Custom PCB Design',
        'modal.balancer.f4.desc': 'Designed in KiCad with optimized layout',

        // Mainboard Modal
        'projects.mainboard.title': '3D Printer & CNC Mainboard',
        'modal.mainboard.overview': 'A full-featured custom mainboard designed from scratch in KiCad for 3D printers and CNC/PCB routers. It combines stepper motor control, high-current bed/hotend heating, and multi-axis limit switch management into a single robust PCB.',
        'modal.mainboard.f1.title': 'Stepper Motor Control',
        'modal.mainboard.f1.desc': 'Precision driving for X, Y, Z, and Extruder axes',
        'modal.mainboard.f2.title': 'Robust Power Delivery',
        'modal.mainboard.f2.desc': 'High current handling for heated beds and tool heads',
        'modal.mainboard.f3.desc': 'Integrated pull-ups and hardware debouncing on limits',
        'modal.mainboard.f4.title': 'Custom Layout',
        'modal.mainboard.f4.desc': 'Layer-optimized signal routing with KiCad',

        // Resume Section (Timeline)
        'resume.exp1.date': 'July 2025 – August 2025',
        'resume.exp1.title': 'Technical Intern Engineer',
        'resume.exp1.company': 'Golda Gıda',
        'resume.exp1.desc': 'Performed technical maintenance on industrial food processing machinery and energy compensation panels. Also monitored and assisted in the routine inspection of solar photovoltaic (PV) systems to ensure operational efficiency.',

        'resume.exp2.date': 'June 2025 – July 2025',
        'resume.exp2.title': 'Intern',
        'resume.exp2.company': 'Ditetra İnovasyon',
        'resume.exp2.desc': 'Worked within the production unit focused on the assembly and testing of high-end LED lighting solutions. Contributed to the quality control processes of smart home automation systems and integrated smart devices.',

        'resume.edu.date': 'Expected Graduation: June 2026',
        'resume.edu.title': 'B.S. in Electrical and Electronics Engineering',
        'resume.edu.company': 'Selçuk University',
        'resume.edu.desc': 'Focusing on embedded systems, PCB design, and control theory. Actively participating in projects bridging hardware design with smart software systems.'
    },
    tr: {
        // Navigation
        'nav.home': 'Ana Sayfa',
        'nav.projects': 'Projeler',
        'nav.pcb': 'PCB Tasarımı',
        'nav.ios': 'iOS Geliştirme',
        'nav.workshop': 'Atölye',
        'nav.cad': '3D CAD',
        'nav.about': 'Hakkımda',
        'nav.resume': 'Özgeçmiş',
        'resume.journey': 'Yolculuğum',
        'nav.contact': 'İletişim',

        // Header
        'header.cv': 'CV İndir',

        // Hero Section
        'hero.badge': 'Fırsatlara açığım',
        'hero.greeting': 'Merhaba, ben',
        'hero.subtitle': 'Elektrik-Elektronik Mühendisi',
        'hero.description': 'Gömülü Sistemler, Kontrol Teorisi ve Robotik alanlarına odaklanıyorum. Hassas donanım kontrolünü modern yazılım arayüzleriyle birleştiren entegre çözümler geliştiriyorum.',
        'hero.cta.projects': 'Projeleri Keşfet',
        'hero.scroll': 'Keşfetmek için kaydır',

        // Projects Section
        'projects.label': 'Öne Çıkan Çalışmalar',
        'projects.title': 'Projeler',
        'projects.description': 'Gömülü sistemler ve robotik projelerimden bir seçki',
        'filters.all': 'Tümü',
        'filters.hardware': 'Donanım / PCB',
        'filters.embedded': 'Gömülü Sistemler',
        'filters.software': 'Yazılım',
        'projects.featured': 'Öne Çıkan',
        'projects.category.hardware': 'Donanım & Yazılım',
        'projects.category.embedded': 'Gömülü Sistemler',
        'projects.category.software': 'Yazılım Geliştirme',
        'projects.category.robotics': 'Robotik',
        'projects.category.control': 'Kontrol Sistemleri',
        'projects.category.pcb': 'PCB & Donanım Tasarımı',
        'projects.viewCode': 'Kodu Görüntüle',
        'projects.comingSoon': 'Yakında',
        'projects.comingSoon.desc': 'İçerik şu anda hazırlanıyor. Lütfen daha sonra tekrar kontrol edin.',
        'projects.videoSoon': 'Video Yakında',

        // Project Descriptions
        'projects.robotarm.description': 'Google Gemini AI entegrasyonu, YOLOv8 nesne tespiti ve otonom işlemler için gerçek zamanlı görüntü işleme özelliklerine sahip sesle kontrol edilen robotik kol.',
        'projects.balancer.description': 'PID kontrol algoritması, Sharp IR sensör geri bildirimi ve canlı ayarlama için UART telemetrisi kullanan gerçek zamanlı top dengeleme sistemi.',
        'projects.mainboard.description': 'Entegre step motor sürücüleri, limit switch desteği ve güçlü güç yönetimi içeren, 3D yazıcılar ve CNC PCB yönlendiriciler için özel tasarlanmış anakart.',
        'projects.ios.description': 'Şu anda geliştirme aşamasındaki native iOS uygulamaları. Detaylar yakında.',

        // About Section
        'about.label': 'Hakkımda',
        'about.title': 'Ben Kimim',
        'about.bio': 'Selçuk Üniversitesi Elektrik-Elektronik Mühendisliği bölümü mezunuyum. Donanım ve yazılımı birleştiren projeler geliştirmeye tutkuyla bağlıyım.',
        'about.p1': 'Hardware ve yazılım arasındaki boşluğu doldurmaya büyük bir tutku duyan, Selçuk Üniversitesi Elektrik-Elektronik Mühendisliği mezunuyum. Mühendislik yolculuğum, merakım ve fiziksel dünyayla etkileşime giren sistemler inşa etme arzumla şekilleniyor.',
        'about.p2': 'Özel PCB tasarlamaktan, onlara hayat veren gömülü yazılımları geliştirmeye ve onları kontrol eden iOS uygulamaları yapmaya kadar, tüm gömülü sistem mimarisi boyunca karşılaştığım zorlukları çözmekten keyif alıyorum.',
        'about.stat1': "Donanım Projeleri",
        'about.stat3': "Yıl Deneyim",
        'about.skills.title': 'Uzmanlık Alanlarım',
        'about.skills.embedded': 'Gömülü Sistemler',
        'about.skills.robotics': 'Robotik',
        'about.skills.ios': 'iOS Geliştirme',
        'about.skills.web': 'Web Geliştirme',
        'about.skills.cad': '3D Modelleme',
        'about.skills.pcb': 'PCB Tasarımı',
        'about.projects.title': 'Geliştirdiğim Projeler',

        // Skills & Tools Section
        'skills.label': 'Araçlar & Beceriler',
        'skills.title': 'Nelerle Çalışıyorum',
        'skills.cad.title': '3D CAD Modelleme',
        'skills.cad.description': 'Elektronik projeleri için mekanik tasarımlar ve kasa modelleri',
        'skills.pcb.title': 'PCB Devre Çizimi',
        'skills.pcb.description': 'Özel elektronik devreler için şematik ve PCB yerleşimi',
        'skills.workshop.title': 'Atölye',
        'skills.workshop.description': 'Araç gereçlerim, çalışma masam ve elektronik laboratuvarımın görsel turu',

        // Services (What I Do)
        'services.label': 'Uzmanlığım',
        'services.title': 'Neler Yapıyorum',
        'services.desc': 'Fiziksel donanım ile akıllı yazılım sistemleri arasındaki köprüyü kuruyorum.',
        'services.hw.title': 'PCB Tasarımı',
        'services.hw.desc': 'Endüstriyel ve robotik uygulamalar için güvenilir özel devreler, şemalar ve PCB yerleşimleri tasarlıyorum.',
        'services.viewPcb': 'PCB Projelerini İncele',
        'services.viewCad': '3D CAD Modelleri İncele',
        'services.cad.title': '3D CAD Modelleme',
        'services.cad.desc': 'Fusion 360 ve SolidWorks kullanarak elektronik projeler için hassas mekanik gövdeler, yapısal parçalar ve 3D modeller oluşturuyorum.',
        'services.fw.title': 'Gömülü Sistemler',
        'services.fw.desc': 'STM32, Arduino ve ESP gibi mikrodenetleyiciler için bare-metal C/C++ yazılımları geliştiriyorum.',
        'services.sw.title': 'Yazılım Geliştirme',
        'services.sw.desc': 'Uzak donanımlarla güvenli ve güvenilir bir şekilde arayüz oluşturmak için iOS uygulamaları ve arka uç mantığı geliştiriyorum.',

        // Projects extra
        'projects.viewDetails': 'Detayları İncele',
        'about.skills.pcb.view': '→ Projeyi İncele',

        // Contact Section
        'contact.email': 'E-posta',
        'contact.phone': 'Telefon',
        'contact.location': 'Konum',
        'contact.location.value': 'Selçuklu Konya, Türkiye',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.label': 'İletişime Geç',
        'contact.description': 'Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma fırsatlarını tartışmaya her zaman açığım.',

        // Footer
        'footer.rights': 'Tüm hakları saklıdır.',
        'footer.tagline': 'Donanım ve Yazılımı Hassasiyetle Mühendislemek',

        // Modal Translations
        'modal.overview': 'Genel Bakış',
        'modal.features': 'Temel Özellikler',
        'modal.techstack': 'Teknoloji Yığını',
        'modal.wiring': 'Bağlantı Şeması',
        'modal.viewGithub': "GitHub'da Görüntüle",
        'modal.watchVideo': 'Demo Videoyu İzle',

        // Robot Arm Modal
        'modal.robotarm.overview': 'Yapay zeka destekli ses kontrolü, gerçek zamanlı nesne tespiti ve otonom al-koy işlemleri için hassas ters kinematik hesaplamaları birleştiren gelişmiş 4 eksenli robotik kol sistemi.',
        'modal.robotarm.f1.title': 'Ses Kontrolü',
        'modal.robotarm.f1.desc': 'Google Gemini AI entegrasyonu ile doğal dil komutları',
        'modal.robotarm.f2.title': 'Nesne Tespiti',
        'modal.robotarm.f2.desc': 'OpenCV bilgisayar görüşü ile gerçek zamanlı YOLOv8 tespiti',
        'modal.robotarm.f3.title': 'Ters Kinematik',
        'modal.robotarm.f3.desc': 'Hassas konumlandırma için 4-DOF hesaplamaları',
        'modal.robotarm.f4.title': 'Kablosuz Kontrol',
        'modal.robotarm.f4.desc': 'Uzaktan çalıştırma için ESP8266 WiFi modülü',

        // Ball Balancer Modal
        'modal.balancer.overview': 'STM32 mikrodenetleyici üzerinde gerçek zamanlı PID kontrol uygulamasını gösteren tek eksenli top dengeleme sistemi. Parametre ayarlama ve sistem izleme için canlı UART telemetrisi içerir.',
        'modal.balancer.f1.title': 'Gerçek Zamanlı PID Kontrolü',
        'modal.balancer.f1.desc': 'Kararlı top konumlandırması için ayarlanmış Kp, Ki, Kd parametreleri',
        'modal.balancer.f2.title': 'Sharp IR Mesafe Sensörü',
        'modal.balancer.f2.desc': 'Gürültü filtreleme ile analog mesafe ölçümü',
        'modal.balancer.f3.title': 'UART Telemetrisi',
        'modal.balancer.f3.desc': 'Hata ayıklama ve parametre ayarlama için canlı veri akışı',
        'modal.balancer.f4.title': 'Özel PCB Tasarımı',
        'modal.balancer.f4.desc': "Optimize edilmiş düzen ile KiCad'da tasarlandı",

        // Mainboard Modal
        'projects.mainboard.title': '3D Yazıcı & CNC Anakartı',
        'modal.mainboard.overview': '3D yazıcılar ve CNC/PCB routerlar için KiCad ile sıfırdan tasarlanmış tam özellikli özel bir anakart. Step motor kontrolünü, yüksek akımlı yatak/hotend ısıtmasını ve çok eksenli limit switch yönetimini tek bir sağlam PCB üzerinde birleştirir.',
        'modal.mainboard.f1.title': 'Step Motor Kontrolü',
        'modal.mainboard.f1.desc': 'X, Y, Z ve Extruder eksenleri için hassas sürüş',
        'modal.mainboard.f2.title': 'Güçlü Güç Dağıtımı',
        'modal.mainboard.f2.desc': 'Isıtmalı yataklar ve takım kafaları için yüksek akım kapasitesi',
        'modal.mainboard.f3.title': 'Limit & Acil Durum Anahtarları',
        'modal.mainboard.f3.desc': 'Limit switchler üzerinde entegre pull-up ve donanımsal debouncing',
        'modal.mainboard.f4.title': 'Özel Yerleşim',
        'modal.mainboard.f4.desc': 'KiCad ile katman optimizasyonlu sinyal yönlendirmesi',

        // Resume Section (Timeline)
        'resume.exp1.date': 'Temmuz 2025 – Ağustos 2025',
        'resume.exp1.title': 'Teknik Stajyer Mühendis',
        'resume.exp1.company': 'Golda Gıda',
        'resume.exp1.desc': 'Endüstriyel gıda işleme makinelerinde ve kompanzasyon panolarında teknik bakım çalışmaları gerçekleştirdim. Güneş enerjisi (GES) sistemlerinin operasyonel verimliliğini sağlamak için rutin kontrollerinde görev aldım.',

        'resume.exp2.date': 'Haziran 2025 – Temmuz 2025',
        'resume.exp2.title': 'Stajyer',
        'resume.exp2.company': 'Ditetra İnovasyon',
        'resume.exp2.desc': 'Üst düzey LED aydınlatma sistemlerinin montajı ve test edilmesine odaklanan üretim biriminde çalıştım. Akıllı ev otomasyon sistemlerinin ve entegre akıllı cihazların kalite kontrol süreçlerine katkıda bulundum.',

        'resume.edu.date': 'Beklenen Mezuniyet: Haziran 2026',
        'resume.edu.title': 'Elektrik Elektronik Mühendisliği Lisans',
        'resume.edu.company': 'Selçuk Üniversitesi',
        'resume.edu.desc': 'Gömülü sistemler, PCB tasarımı ve kontrol teorisi üzerine yoğunlaşıyorum. Donanım tasarımı ile akıllı yazılım sistemlerini birleştiren projelerde aktif rol alıyorum.'
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
