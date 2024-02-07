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
      return pre - 1 >= 0 ? pre - 1 : imageData.length - 1;
    });
  };

  return (
    <main>
      <img
        key={currentImage}
        src={imageData[currentImage].url}
        alt="corousel-image"
        className="big-image"
      />
      <div className="button-wrapper">
        <Button text={"Önceki"} onClick={handleClickPrevious} />
        <Button text={"Sonraki"} onClick={handleClickNext} />
      </div>
    </main>
  );
};
export default App;
