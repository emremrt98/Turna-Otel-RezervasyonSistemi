# turna.com Otel Web Site Tasarım Taslağı

## Sitenin Yayına Alındığı Platform 
- Site düzenli olarak Github adresimde güncellenmiş olup Netlify ortamına build alınarak deploy edilmiştir. Canlı bakmak için [Link](https://macroturna.netlify.app/)

## Projede Kullanılan Araç ve Gereçler
- Verilen Web sitenin tasarımı React.js kullanılarak yapılmıştır. [Link](https://tr.reactjs.org/)
- Css tarafında Sass ve Bootstrap 5 kullanılmıştır. [Link1](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) [Link2](https://react-bootstrap.github.io/)
- Projede bulunan iconlar React-Icons kütüphanesinden alınmıştır. [Link](https://react-icons.github.io/react-icons/)
- Projede bulunan loader ekranı React-Spinners kütüphanesinden yararlanılarak yapılmıştır. [Link](https://www.davidhu.io/react-spinners/)
- Proje komple React dökümantasyonlarında bahsedilen **Component** yapısına uygun bir biçimde kodlanarak gerek bir değişiklik yapılacağında gerek kodu okuyacak kişilere ciddi bir kolaylık sağlanmıştır.
- Projede tüm Css kodları **BEM** yapısına etiket isimleri ise **Semantic** yapısına uygun olarak hazırlanmıştır.

## Projede Bulunan Yapılar
### Navbar
- Navbar kısmında klasik menülere ek olarak bir adet dropdown menü bulunmaktadır. 
- Bu süreç bootstrap kütüphanesi kullanılarak hızlıca halledilmiştir.

### Body
#### Sol Taraf
- Site iki parçaya bölünmüştür. (1/3 Flex yapısı kullanılmıştır.)
- Sitenin sol tarafında Google Maps tarafından alınan bir iFrame linkiyle harita siteye gömülmüştür. Ek olarak butona tıkladığınızda sitenin konumuna haritada erişebiliyorsunuz. [Link](https://www.google.com/maps)

#### Sağ Taraf
- Sitede bulunan otelin resimlerini içeren bir slider mevcuttur. Bu aşama yine Bootstrap kullanılarak yapılmıştır.
- Odalara ait görsel ve detayları içeren küçük kartlarımız mevcuttur. Burada odaların adından özelliklerine kadar bütün her şey bir dizi içerisinde objeler oluşturulup kartlara birer props olarak geçilmiştir. Böylelikle ileriye dönük bir kod arşivi sağlandığında kolaylıkla Database'den gelen verilen ekrana yansıtılabilecektir.
- Odayı ayır butonuna tıklandığında yeni bir pencere açılarak odanın görsellerini bir slide yardımıyla görebiliyor ve hem oda hakkında detay bilgilere erişirken diğer bir yandan odayı kendinize ayırtabiliyorsunuz.

### Oda Penceresi
- Odayı ayır butonuna tıkladıktan sonra açılan pencere bir **Component** içerisinde yapılarak tekrar kodlanabilirliği kolaylaştırmıştır.
- Açılan pencere **useState** kullanılarak bir butona **onClick** eventi verilmiş olup ekrana yansıyıp yansımamayı kontrol etmektedir.
- Ekranda bulunan Slider'ın üstündeki X işareti ile ekranı kapatabilirsiniz.

### Responsive Design 
- Proje tablet ve mobil uyumlu olarak en ince ayrıntısına kadar yeniden tasarlanmıştır.
- Ekranın üst kısmında bulunan **Map** simgesine tıklayarak harita görünümüne geçebilirsiniz.
- Kullanıcı arayüzünü (UX) göz önünde bulundurarak açılan map penceresini tekrar butona basarak kapatmak istemeyenler için ekranın herhangi bir noktasına tıklayarak kapatabilmeleri sağlanmıştır.

**Proje Başlangıç Tarihi : 29.08.2022**  **Proje Bitiş Tarihi : 02.09.2022**  **Hazırlayan : Emre MERT**  **Tüm Hakları Saklıdır.**


## Projeyi İndirme
- Projeyi indirip Visual Studio Code ile açtıktan sonra terminal ekranınıza giriniz.
- Terminal ekranında **cd** kullanakk projenin kurulu olduğu dizine giriniz
- Dizindeyken terminal ekranına **npm install** yazarak proje için gerekli paket dosyalarını indiriniz.
- Dosyalar indikten sonra terminal ekranına **npm start** yazarak projeyi tarayıcınızda açınız. (http://localhost:3000/)

##### Proje faydalı olduysa forklamayı ve star atmayı unutmayınız
