# Başar Toprak Delen - Portfolio Website Comprehensive Documentation

Bu dosya, `btdelen.github.io` statik portfolyo web sitesinin tüm mimarisini, klasör yapısını, çekirdek sistemlerini ve içeriklerini tam teşekküllü olarak açıklamak üzere hazırlanmıştır. Yapay zeka veya herhangi bir geliştirici, bu projede çalışmaya başlamadan önce bu dosyayı okuyarak projenin tüm detaylarına hakim olabilir.

## 🎯 Proje Özeti
- **Amaç:** Başar Toprak Delen'in Gömülü Sistemler (Embedded Systems), Robotik, PCB Tasarımı ve Yazılım alanlarındaki yeteneklerini ve projelerini sergileyen kişisel portfolyo ve CV web sitesi.
- **Teknoloji Yığını:** Tamamen Vanilla HTML5, CSS3 ve JavaScript. Herhangi bir framework (React, Vue, Bootstrap vb.) kullanılmamıştır.
- **Özellikler:** Çoklu dil (İngilizce ve Türkçe), Karanlık/Aydınlık Tema (Dark/Light Mode), Responsive tasarım, Özel Carousel (kaydırmalı görsel) bileşenleri ve özel toast bildirimli dinamik CV indirme modülü.

---

## 📂 Klasör ve Dosya Yapısı (Root Directory)

### Kök Dizindeki HTML Dosyaları (Sayfalar)
- **`index.html`**: Ana Sayfa. Hero (karşılama) bölümü, öne çıkan yetenekler, hizmetler ve öne çıkan projelerin bir özetini içerir.
- **`projects.html`**: Tüm projelerin listelendiği genel sayfa. "Tümü", "Donanım", "Yazılım" gibi filtreleme butonları içerir.
- **`resume.html`**: Özgeçmiş sayfası. Eğitim geçmişi, deneyimler zaman çizelgesi (timeline) halinde listelenir. Dinamik CV indirme butonu bulunur.
- **`contact.html`**: İletişim bilgileri, sosyal medya linkleri (GitHub, LinkedIn) ve e-posta adresinin yer aldığı sayfa.
- **Kategori Sayfaları:**
  - **`pcb-circuit-design.html`**: Sadece PCB ve donanım tasarımı projelerinin (Mainboard, Motor Sürücü vb.) listelendiği özel kategori sayfası.
  - **`ios-development.html`, `3d-cad.html`, `workshop.html`**: Diğer yetenek setlerine özel olarak ayrılmış tanıtım ve içerik sayfaları.
- **Proje Detay Sayfaları (`project-*.html`):** Her bir projenin kapsamlı detaylarını (özellikler, galeriler, github ve şema linkleri) barındırır.
  - **`project-mainboard.html`**: 3D Printer & CNC Mainboard projesi. (GitHub: `stm32-cnc-mainboard`)
  - **`project-motordriver.html`**: FOC Destekli BLDC Motor Sürücü projesi. (GitHub: `stm32-bldc-motor-driver`) 
    - *📌 TODO / GELECEK GÜNCELLEME: Devreler JLC PCB'den geldiğinde gerçek fotoğrafları `assets/images/motor_driver` içerisine eklenecek ve bu sayfa/ilgili carousel güncellenecektir.*
  - **`project-ball-balancer.html`**: Tek eksenli top dengeleme (PID kontrol) sistemi.
  - **`project-robot-arm.html`**: Gemini AI ve YOLOv8 entegreli ses kontrollü 4 eksenli robot kol.

### Kök Dizindeki Kaynak Kodlar (CSS, JS)
- **`styles.css`**: Sitenin tek ve ana stil dosyası.
  - En üstünde `:root` içinde tüm renk değişkenleri tanımlıdır.
  - `[data-theme="dark"]` seçicisi ile karanlık mod renkleri override edilir.
  - Tüm CSS, BEM benzeri anlaşılır class yapısıyla yazılmıştır.
- **`script.js`**: Sitenin tüm interaktif fonksiyonlarını yöneten ana JavaScript dosyası. (Menü, tema, çeviri, slider mantıkları burada bulunur).
- **`translations.js`**: İngilizce (`en`) ve Türkçe (`tr`) dilleri için tüm metinleri içeren JSON tarzı sözlük dosyası.

### Yardımcı Otomasyon Scriptleri (Python)
Vanilla HTML kullanıldığı için, tüm sayfalarda ortak olan Header (Navigasyon) ve Footer alanlarını güncellemek manuel olarak çok zordur. Bu nedenle Python scriptleri (`fix_pages.py`, `update_all_pages.py`, `update_nav.py`) kullanılarak ortak HTML kod blokları tüm dosyalarda topluca değiştirilebilir.

### `assets/` Klasörü (Medya ve Statik Dosyalar)
Tüm statik dosyalar bu klasör altında gruplandırılmıştır:
- **`assets/cv/`**: `CV_EN.pdf` ve `CV_TR.pdf` dosyalarını barındırır.
- **`assets/images/`**: Projelere özel görselleri alt klasörlerde tutar (örn: `mainboard/`, `motor_driver/`, `robot_arm/` vb.).
- **`assets/videos/`**: Eğer projelerin demo videoları varsa burada saklanır.

---

## ⚙️ Çekirdek Sistemler ve Çalışma Mantıkları

Bu projeyi düzenlerken aşağıdaki 3 ana sistemin nasıl çalıştığını bilmek kritik önem taşır:

### 1. Çoklu Dil Sistemi (i18n)
Sistem tamamen istemci tarafında (client-side) JavaScript ile çalışır.
- **Veri Kaynağı:** Tüm çeviriler `translations.js` dosyası içindeki `translations` objesinde tutulur.
- **HTML İşaretlemesi:** Çevrilecek her HTML etiketine `data-i18n="dil.anahtari"` niteliği (attribute) eklenir. Örnek: `<h1 data-i18n="nav.home">Home</h1>`
- **İşleyiş:** `script.js` sayfa yüklendiğinde `localStorage`'dan `preferred-language` anahtarını kontrol eder (varsayılan: `en`). Sayfadaki tüm `[data-i18n]` elementlerini bulur ve `translations.js` içindeki karşılığı ile `textContent`'ini değiştirir.
- **Yeni Metin Ekleme:** Yeni bir içerik ekleneceğinde önce HTML dosyasına `data-i18n="yeni.key"` yazılmalı, ardından `translations.js` dosyasına hem `en` hem de `tr` objeleri içine bu key ve çevirisi eklenmelidir.

### 2. Tema Sistemi (Light / Dark Mode)
- **Mantık:** Sitenin renkleri `styles.css` içindeki CSS değişkenleri (`--color-bg`, `--color-text`, vb.) ile sağlanır. 
- **İşleyiş:** `script.js` kullanıcı butona tıkladığında `<html>` etiketine `data-theme="dark"` veya `data-theme="light"` niteliğini ekler ve tercihi `localStorage`'da saklar.
- **Stil Değişimi:** `styles.css` içerisinde `[data-theme="dark"]` seçicisi altındaki CSS değişkenleri devreye girer ve tüm renkler anında değişir. Ekstra JavaScript ile renk müdahalesine gerek yoktur.

### 3. Akıllı CV İndirme Sistemi
- **Sorun:** Eski yapıda Türkçe ve İngilizce CV'leri indirmek için sayfada karışık href atamaları yapılıyordu.
- **Çözüm:** Tüm CV indirme butonlarına (genellikle `<a class="btn btn-primary cv-btn">`) sadece `cv-btn` class'ı verilir ve `href` özelliği boş bırakılır (veya `#` konur).
- **İşleyiş:** `script.js` içindeki `initCVDownload()` fonksiyonu, `cv-btn`'lere bir click event listener ekler. Butona tıklandığında anlık `preferred-language` değerine bakar, dili `tr` ise `assets/cv/CV_TR.pdf` dosyasını, `en` ise `assets/cv/CV_EN.pdf` dosyasını yeni bir sekmede açar. Ayrıca ekranın altında "CV is downloading..." / "CV indiriliyor..." şeklinde şık bir animasyonlu bildirim (toast) gösterir.

### 4. Resim Carousel (Slider) Sistemi
- Proje kartlarında (özellikle `pcb-circuit-design.html` gibi sayfalarda) birden fazla resmi göstermek için kullanılır.
- **HTML Yapısı:** `.image-carousel` kapsayıcısı içinde `.carousel-img` sınıfına sahip resimler ve `.carousel-dots` kapsayıcısı içinde `.dot` sınıfına sahip butonlar bulunur.
- **İşleyiş:** `script.js` sayfa yüklendiğinde tüm `.image-carousel` öğelerini bulur. Dot'lara tıklanma olaylarını dinler ve sadece tıklanan indekse karşılık gelen resme `.active` class'ı verirken diğerlerinden bu class'ı kaldırır.

---

## 🚀 Gelecek Planları ve Bakım Notları
- **JLC PCB Görselleri (Motor Sürücü):** FOC Destekli BLDC Motor Sürücü projesinin fiziki PCB üretimleri JLC PCB üzerinden sipariş edilmiştir. **PCB'ler kargodan gelip lehimlendiğinde/test edildiğinde**, gerçek çekim fotoğrafları `assets/images/motor_driver` klasörüne yüklenecek ve `project-motordriver.html` ile `pcb-circuit-design.html` dosyalarındaki carousel kısımlarına bu yeni görseller entegre edilecektir.

---
*(Son Güncelleme: Mayıs 2026)*
