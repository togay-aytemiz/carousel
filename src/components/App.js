const App = () => {
  return <div>App</div>;
};
export default App;

// Carousel, kullanıcının önceki veya sonraki resme gitmek için geri veya ileri butonuna tıklamasına izin vermelidir.
// Görüntüler basit bir dizide saklanacaktır. Mevcut görüntüyü saklamak için state’i nasıl kullanılacağını göreceğiz. Ardından, kullanıcının bastığı butona göre önceki veya sonraki görüntüye gitmek için bu state’i güncelleyeceğiz.
// Kullanıcı tüm görüntülerden geçtiyse, görüntülerde tekrar dolaşmalarına izin vermek için dizinin başında nasıl başlayacağınızı anlayacaksınız. Görselleri kullanmak istemiyorsanız, belirli bir ürünün incelemeleri arasında geçiş yapan bir referans döngüsü oluşturmak için metin de kullanabilirsiniz.
// Son olarak, döngünüzü bir sonraki seviyeye taşımak istiyorsanız, CSS'yi kullanarak görüntüyü değiştikçe eğlenceli bir geçiş/transition eklemeyi deneyebilirsiniz.
// Çalışacağınız React konseptleri
// •	useState (depolama ve state güncelleştirme)
// •	Koşullular (ternary)
// •	List, keys ve .map()
