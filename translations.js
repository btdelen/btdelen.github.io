// Translations dictionary for EN/TR
const translations = {
    en: {
        // Navigation
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Header
        'header.cv': 'Download CV',

        // Hero Section
        'hero.badge': 'Available for opportunities',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'Electrical-Electronics Engineering Student',
        'hero.description': 'I focus on Embedded Systems, Control Theory, and Robotics. I create integrated solutions combining precise hardware control with modern software interfaces.',
        'hero.cta.projects': 'Explore Projects',
        'hero.scroll': 'Scroll to explore',

        // Projects Section
        'projects.label': 'Featured Work',
        'projects.title': 'Projects',
        'projects.description': 'A selection of my embedded systems and robotics projects',
        'projects.featured': 'Featured',
        'projects.category.hardware': 'Hardware & Software',
        'projects.category.embedded': 'Embedded Systems',
        'projects.category.software': 'Software Development',
        'projects.viewCode': 'View Code',
        'projects.comingSoon': 'Coming Soon',
        'projects.videoSoon': 'Video Coming Soon',

        // Project Descriptions
        'projects.robotarm.description': 'Voice-controlled robotic arm featuring Google Gemini AI integration, YOLOv8 object detection, and real-time computer vision for autonomous operations.',
        'projects.balancer.description': 'Real-time ball balancing system using PID control algorithm, Sharp IR sensor feedback, and UART telemetry for live tuning and monitoring.',
        'projects.ios.description': 'Native iOS applications currently in development. Details coming soon.',

        // About Section
        'about.label': 'About Me',
        'about.title': 'Who I Am',
        'about.bio': "I'm a 4th year Electrical-Electronics Engineering student at Selçuk University. I'm passionate about building things that bridge hardware and software.",
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

        // Contact Section
        'contact.title': "Let's build something precise.",
        'contact.description': "I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.",

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
        'modal.balancer.f4.desc': 'Designed in KiCad with optimized layout'
    },
    tr: {
        // Navigation
        'nav.projects': 'Projeler',
        'nav.about': 'Hakkımda',
        'nav.contact': 'İletişim',

        // Header
        'header.cv': 'CV İndir',

        // Hero Section
        'hero.badge': 'Fırsatlara açığım',
        'hero.greeting': 'Merhaba, ben',
        'hero.subtitle': 'Elektrik-Elektronik Mühendisliği Öğrencisi',
        'hero.description': 'Gömülü Sistemler, Kontrol Teorisi ve Robotik alanlarına odaklanıyorum. Hassas donanım kontrolünü modern yazılım arayüzleriyle birleştiren entegre çözümler geliştiriyorum.',
        'hero.cta.projects': 'Projeleri Keşfet',
        'hero.scroll': 'Keşfetmek için kaydır',

        // Projects Section
        'projects.label': 'Öne Çıkan Çalışmalar',
        'projects.title': 'Projeler',
        'projects.description': 'Gömülü sistemler ve robotik projelerimden bir seçki',
        'projects.featured': 'Öne Çıkan',
        'projects.category.hardware': 'Donanım & Yazılım',
        'projects.category.embedded': 'Gömülü Sistemler',
        'projects.category.software': 'Yazılım Geliştirme',
        'projects.viewCode': 'Kodu Görüntüle',
        'projects.comingSoon': 'Yakında',
        'projects.videoSoon': 'Video Yakında',

        // Project Descriptions
        'projects.robotarm.description': 'Google Gemini AI entegrasyonu, YOLOv8 nesne tespiti ve otonom işlemler için gerçek zamanlı görüntü işleme özelliklerine sahip sesle kontrol edilen robotik kol.',
        'projects.balancer.description': 'PID kontrol algoritması, Sharp IR sensör geri bildirimi ve canlı ayarlama için UART telemetrisi kullanan gerçek zamanlı top dengeleme sistemi.',
        'projects.ios.description': 'Şu anda geliştirme aşamasındaki native iOS uygulamaları. Detaylar yakında.',

        // About Section
        'about.label': 'Hakkımda',
        'about.title': 'Ben Kimim',
        'about.bio': 'Selçuk Üniversitesi 4. sınıf Elektrik-Elektronik Mühendisliği öğrencisiyim. Donanım ve yazılımı birleştiren projeler geliştirmeye tutkuyla bağlıyım.',
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

        // Contact Section
        'contact.title': 'Birlikte hassas bir şeyler inşa edelim.',
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
        'modal.balancer.f4.desc': "Optimize edilmiş düzen ile KiCad'da tasarlandı"
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
