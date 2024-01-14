import orangeCan from "../assets/images/slider/orange-can.png";
import orangeDecoration1 from "../assets/images/slider/orange-decoration-1.png";
import orangeDecoration2 from "../assets/images/slider/orange-decoration-2.png";
import orangeBg from "../assets/images/slider/orange-bg.png";
import arrowLeft from "../assets/icons/arrow-left.svg";

function HeroSlider() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex h-full w-full">
        {/* Decorations */}
        <div className="flex flex-1 flex-col justify-between bg-[#FB924E]">
          <img
            src={orangeDecoration1}
            alt=""
            className="ml-auto mr-20 h-fit w-fit"
          />
          <img src={orangeDecoration2} alt="" className="mb-44 h-fit w-fit" />
        </div>
        <div className="relative flex-1 bg-[#FB924E]/50">
          <img src={orangeBg} alt="" className="h-full" />
        </div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">
          Juice Labs
        </h1>
        {/* Arrows */}
        <div className="absolute top-1/2 flex w-full justify-between px-2">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50">
            <img src={arrowLeft} alt="test" />
          </button>
          <button className="flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-black/50">
            <img src={arrowLeft} alt="test" />
          </button>
        </div>
        {/* Main image */}
        <img
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={orangeCan}
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
