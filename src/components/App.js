import { useState } from "react";
import Button from "./Button";

const App = () => {
  const imageData = [
    { id: 1, url: "https://picsum.photos/seed/1/500/300" },
    { id: 2, url: "https://picsum.photos/seed/2/500/300" },
    { id: 3, url: "https://picsum.photos/seed/3/500/300" },
    { id: 4, url: "https://picsum.photos/seed/4/500/300" },
    { id: 5, url: "https://picsum.photos/seed/5/500/300" },
    { id: 6, url: "https://picsum.photos/seed/6/500/300" },
    { id: 7, url: "https://picsum.photos/seed/7/500/300" },
    { id: 8, url: "https://picsum.photos/seed/8/500/300" },
    { id: 9, url: "https://picsum.photos/seed/9/500/300" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleClickNext = () => {
    setCurrentImage((pre) => {
      return pre + 1 < imageData.length ? pre + 1 : 0;
    });
  };

  const handleClickPrevious = () => {
    setCurrentImage((pre) => {
      return pre - 1 > 0 ? pre - 1 : imageData.length - 1;
    });
  };

  return (
    <main>
      <img src={imageData[currentImage].url} alt="" className="big-image" />
      <div className="button-wrapper">
        <Button text={"Önceki"} onClick={handleClickPrevious} />
        <Button text={"Sonraki"} onClick={handleClickNext} />
      </div>
    </main>
  );
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
