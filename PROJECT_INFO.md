# Başar Toprak Delen - Portfolio & CV Website Documentation

Bu dosya, projenin genel yapısını ve önemli sistemlerini özetlemek için oluşturulmuştur. Gelecekteki sohbetlerde projeyi hızlıca anlayabilmek adına referans olarak kullanılabilir.

## 📂 Proje Yapısı

### Temel Dosyalar
- **`index.html`**: Ana sayfa (Home).
- **`resume.html`**: Özgeçmiş (Resume), eğitim bilgileri ve CV indirme butonunun bulunduğu sayfa.
- **`projects.html`**: Genel projelerin listelendiği sayfa.
- **`contact.html`**: İletişim sayfası.
- **`styles.css`**: Sitenin tüm tasarım kurallarını (Light/Dark tema değişkenleri dahil) barındıran stil dosyası.
- **`script.js`**: Tema değiştirme, mobil menü, carousel, smooth scroll ve dil değiştirme (i18n) gibi ana UI mantıklarını yöneten JavaScript dosyası.
- **`translations.js`**: İngilizce (`en`) ve Türkçe (`tr`) çevirileri içeren sözlük dosyası.

### Alt Sayfalar ve Kategoriler
- **`project-*.html`**: Belirli projelerin detay sayfaları (ör. `project-mainboard.html`, `project-ball-balancer.html`, `project-robot-arm.html`).
- **`pcb-circuit-design.html`, `ios-development.html`, `3d-cad.html`, `workshop.html`**: Belirli yetenek ve çalışma alanlarına odaklanan sayfalar.

### Yardımcı Python Scriptleri
- `update_all_pages.py`, `fix_pages.py`, `update_nav.py` gibi dosyalar, tüm HTML sayfalarındaki ortak kısımları (örneğin menü (nav) veya footer) topluca güncellemek için kullanılan otomasyon betikleridir.

### Klasörler
- **`assets/`**: Resimler, logolar ve PDF formatındaki CV dosyaları (`assets/cv/CV_EN.pdf`, `assets/cv/CV_TR.pdf`) gibi statik medyaların bulunduğu klasör.

---

## ⚙️ Önemli Sistemler ve Çalışma Mantıkları

### 1. Dil (i18n) Sistemi
- `script.js` içerisindeki fonksiyonlar ve `translations.js` üzerinden yönetilir.
- Seçilen dil `localStorage` içerisinde **`preferred-language`** anahtarı (key) ile kaydedilir.
- Dil değiştiğinde `script.js`, `<html lang="en">` etiketindeki `lang` değerini günceller ve sayfadaki `data-i18n` niteliğine (attribute) sahip elemanların metinlerini değiştirir.
- `resume.html` gibi dosyalarda bulunan özel scriptler, bir `MutationObserver` yardımıyla `html` etiketindeki `lang` değişikliğini dinler ve dinamik olan bağlantıları (örneğin "CV İndir" butonunun href değerini) o anki dile göre günceller.

### 2. Tema Sistemi (Light/Dark Mode)
- `script.js` tarafından kontrol edilir.
- Kullanıcının seçimi `localStorage` içerisinde **`theme`** anahtarı ile saklanır.
- Değişim yapıldığında `document.documentElement` (html) üzerine `data-theme="dark"` veya `light` niteliği eklenir. `styles.css` içerisindeki CSS değişkenleri bu niteliğe göre renkleri ayarlar.

### 3. CV İndirme Mantığı
- CV indirme işlemleri tamamen `script.js` içerisindeki `initCVDownload()` fonksiyonu tarafından merkezi olarak yönetilir.
- `resume.html` (veya CV butonunun olduğu diğer yerlerde) bulunan indirme bağlantısına (a etiketi) **`cv-btn`** sınıfı eklenir.
- Kullanıcı butona tıkladığında `script.js` devreye girerek, `localStorage` içindeki `preferred-language` değerini kontrol eder, duruma göre `assets/cv/CV_EN.pdf` veya `assets/cv/CV_TR.pdf` dosyasını yeni sekmede açar.
- Aynı zamanda alt kısımda "CV indiriliyor..." şeklinde şık bir Toast bildirimi çıkarır.
- Eskiden yaşanan İngilizce inme sorunu ve manuel scriptlerin çakışması engellenmiş, sistem tek elden daha stabil hale getirilmiştir.
