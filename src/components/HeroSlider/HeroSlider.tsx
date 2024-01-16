import { useState } from "react";
import slides from "./slides";
import HeroSliderArrows from "./HeroSliderArrows";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBtnFreezed, setIsBtnFreezed] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [previousSlide, setPreviousSlide] = useState(0);

  const changeSlide = (idx: number) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(idx);
    setIsBtnFreezed(true);
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 500);

    setTimeout(() => {
      setIsBtnFreezed(false);
    }, 1000);
  };

  const getCurrentColor = () => {
    return `${slides[currentSlide]?.bgColor}`;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative flex h-full w-full flex-col md:flex-row">
        {/* Decorations */}
        <div
          className="transition-long flex h-1/2 flex-1 flex-col justify-between md:h-full"
          style={{ backgroundColor: `${getCurrentColor()}` }}
        >
          <img
            src={
              isCopy
                ? slides[previousSlide].decoration1
                : slides[currentSlide].decoration1
            }
            className={`ml-auto mr-20 h-fit max-h-72 w-auto ${isBtnFreezed ? "transition-decoration-2" : ""}`}
          />
          <img
            src={
              isCopy
                ? slides[previousSlide].decoration2
                : slides[currentSlide].decoration2
            }
            className={`mb-20 mr-auto h-fit  max-h-96 w-auto ${isBtnFreezed ? "transition-decoration-1" : ""}`}
          />
        </div>
        <div
          className="transition-long relative flex-1"
          style={{ backgroundColor: `${getCurrentColor()}70` }}
        >
          <img
            src={isCopy ? slides[previousSlide].bg : slides[currentSlide].bg}
            alt=""
            className={`h-full w-full ${isBtnFreezed ? "transition-bg" : ""}`}
          />
        </div>
        <h1 className="font-outline absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-secondary text-5xl font-bold tracking-wider md:text-9xl">
          Juice Labs
        </h1>
        <HeroSliderArrows
          currentSlide={currentSlide}
          isBtnFreezed={isBtnFreezed}
          slidesCount={slides.length}
          onSlideChange={(idx: number) => changeSlide(idx)}
        />
        {/* Main image */}
        <img
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isBtnFreezed ? "transition-can" : ""}`}
          src={isCopy ? slides[previousSlide].can : slides[currentSlide].can}
          alt="test"
        />
        <button className="btn-primary absolute bottom-20 left-1/2 z-10 -translate-x-1/2 text-2xl">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default HeroSlider;
