import orangeCan from "../assets/images/slider/0/orange-can.png";
import orangeDecoration1 from "../assets/images/slider/0/orange-decoration-1.png";
import orangeDecoration2 from "../assets/images/slider/0/orange-decoration-2.png";
import orangeBg from "../assets/images/slider/0/orange-bg.png";

import purpleCan from "../assets/images/slider/1/purple-can.png";
import purpleDecoration1 from "../assets/images/slider/1/purple-decoration-1.png";
import purpleDecoration2 from "../assets/images/slider/1/purple-decoration-2.png";
import purpleBg from "../assets/images/slider/1/purple-bg.png";

import arrowLeft from "../assets/icons/arrow-left.svg";
import { useState } from "react";

function HeroSlider() {
  const slides = {
    0: {
      decoration1: orangeDecoration1,
      decoration2: orangeDecoration2,
      bg: orangeBg,
      can: orangeCan,
      bgColor: "#FB924E",
    },
    1: {
      decoration1: purpleDecoration1,
      decoration2: purpleDecoration2,
      bg: purpleBg,
      can: purpleCan,
      bgColor: "#D798EB",
    },
  };
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
    <div className="h-screen w-full">
      <div className="relative flex h-full w-full">
        {/* Decorations */}
        <div
          className="transition-long flex flex-1 flex-col justify-between"
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
            className={`mb-20 mr-auto h-fit w-fit ${isBtnFreezed ? "transition-decoration-1" : ""}`}
          />
        </div>
        <div
          className="transition-long relative flex-1"
          style={{ backgroundColor: `${getCurrentColor()}70` }}
        >
          <img
            src={
              isCopy
                ? slides[previousSlide].bg
                : slides[currentSlide].bg
            }
            alt=""
            className={`h-full w-full ${isBtnFreezed ? "transition-bg" : ""}`}
          />
        </div>
        <h1 className="font-secondary font-outline absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-9xl font-bold tracking-wider">
          Juice Labs
          {currentSlide}
        </h1>
        {/* Arrows */}
        <div className="absolute top-1/2 flex w-full justify-between px-2">
          <button
            disabled={currentSlide === 0 || isBtnFreezed}
            onClick={() => changeSlide(currentSlide - 1)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 disabled:opacity-50"
          >
            <img src={arrowLeft} alt="test" />
          </button>
          <button
            disabled={isBtnFreezed}
            onClick={() => changeSlide(currentSlide + 1)}
            className="flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-black/50 disabled:opacity-50"
          >
            <img src={arrowLeft} alt="test" />
          </button>
        </div>
        {/* Main image */}
        <img
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isBtnFreezed ? "transition-can" : ""}`}
          src={isCopy ? slides[previousSlide].can : slides[currentSlide].can}
          alt="test"
        />
        <button className="btn-primary absolute bottom-20 left-1/2 -translate-x-1/2 text-2xl">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default HeroSlider;
