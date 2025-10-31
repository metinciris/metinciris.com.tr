# My Metro Med App

My Metro Med App, modern bir Metro UI arayüzü ile tıbbi içeriklere odaklanan bir React uygulamasıdır. Uygulama, kullanıcı dostu bir deneyim sunmak için renkli kutular, grid bazlı layout ve sade-fonksiyonel kart dizilimi içermektedir.

## Proje Yapısı

- **src/index.tsx**: Uygulamanın giriş noktasıdır. React uygulamasını başlatır ve App bileşenini render eder.
- **src/App.tsx**: Uygulamanın ana bileşeni. Sayfalar arasında geçiş yapar ve genel yapıyı oluşturur.
- **src/pages/Home/Home.tsx**: Ana sayfa bileşeni. Renkli kutular ve grid yapısını içerir.
- **src/pages/Home/Home.module.css**: Ana sayfanın stillerini tanımlar.
- **src/pages/Patients/Patients.tsx**: Hasta sayfası bileşeni. Hasta ile ilgili içerikleri ve kartları gösterir.
- **src/pages/Patients/Patients.module.css**: Hasta sayfasının stillerini tanımlar.
- **src/pages/Settings/Settings.tsx**: Ayarlar sayfası bileşeni. Kullanıcı ayarlarını yönetmek için gerekli içerikleri sunar.
- **src/pages/Settings/Settings.module.css**: Ayarlar sayfasının stillerini tanımlar.
- **src/components/MetroCard/MetroCard.tsx**: Metro kart bileşeni. Her bir kartın yapısını ve içeriğini tanımlar.
- **src/components/MetroCard/MetroCard.module.css**: Metro kartlarının stillerini tanımlar.
- **src/components/Grid/Grid.tsx**: Grid yapısını oluşturan bileşen. Kartların düzenini ayarlar.
- **src/components/Grid/Grid.module.css**: Grid bileşeninin stillerini tanımlar.
- **src/components/Sidebar/Sidebar.tsx**: Yan menü bileşeni. Navigasyon için gerekli bağlantıları içerir.
- **src/components/Sidebar/Sidebar.styled.ts**: Yan menü bileşeninin stillerini tanımlar.
- **src/components/Topbar/Topbar.tsx**: Üst menü bileşeni. Hızlı erişim butonlarını ve başlıkları içerir.
- **src/components/Topbar/Topbar.module.css**: Üst menü bileşeninin stillerini tanımlar.
- **src/hooks/useResponsive.ts**: Responsive tasarım için özel bir hook.
- **src/theme/theme.ts**: Uygulamanın genel tema ayarlarını içerir.
- **src/theme/variables.module.css**: Tema değişkenlerini tanımlar.
- **src/utils/index.ts**: Uygulama genelinde kullanılacak yardımcı fonksiyonları içerir.
- **src/types/index.ts**: Uygulama genelinde kullanılacak tipleri ve arayüzleri tanımlar.
- **public/index.html**: Uygulamanın HTML yapısını tanımlar.
- **package.json**: Projenin bağımlılıklarını ve npm scriptlerini içerir.
- **tsconfig.json**: TypeScript derleyici ayarlarını içerir.
- **.gitignore**: Projede izlenmeyecek dosya ve dizinleri tanımlar.

## Kurulum

1. Projeyi klonlayın:
   ```
   git clone <repository-url>
   ```

2. Proje dizinine gidin:
   ```
   cd my-metro-med-app
   ```

3. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

4. Uygulamayı başlatın:
   ```
   npm start
   ```

## Kullanım

Uygulama, kullanıcıların tıbbi içeriklere kolay erişimini sağlamak için tasarlanmıştır. Ana sayfa, hastalar ve ayarlar sayfaları arasında geçiş yaparak kullanıcı deneyimini geliştirmektedir. Her sayfa, modern bir görünüm ve işlevsellik sunmaktadır.