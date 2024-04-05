import arrowLeft from "../../assets/icons/arrow-left.svg";

interface Props {
  isBtnFreezed: boolean;
  currentSlide: number;
  slidesCount: number;
  onSlideChange: (idx: number) => void;
}

function HeroSlider({
  isBtnFreezed,
  currentSlide,
  slidesCount,
  onSlideChange,
}: Props) {
  const changeSlide = (idx: number) => {
    onSlideChange(idx);
  };

  return (
    <div className="absolute top-1/2 flex w-full justify-between px-2 z-50">
      <button
        title="Go to previous slide"
        disabled={currentSlide === 0 || isBtnFreezed}
        onClick={() => changeSlide(currentSlide - 1)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 disabled:opacity-50"
      >
        <img
          src={arrowLeft}
          alt="Arrow left icon"
          loading="lazy"
          width={30}
          height={20}
        />
      </button>
      <button
        title="Go to next slide"
        disabled={isBtnFreezed || slidesCount === currentSlide + 1}
        onClick={() => changeSlide(currentSlide + 1)}
        className="flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-black/50 disabled:opacity-50"
      >
        <img
          src={arrowLeft}
          alt="Arrow right icon"
          loading="lazy"
          width={30}
          height={20}
        />
      </button>
    </div>
  );
}

export default HeroSlider;
