import { useState } from "react";

function TheHeader() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black/40 px-4 py-4 text-white backdrop-blur-md md:px-20">
      <div>
        <a className="text-2xl font-bold" href="#">
          Juice Labs
        </a>
      </div>
      <div
        className={`absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white text-gray-600 transition-transform md:static md:flex  md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:text-white ${isMenuVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        <a className="text-xl md:text-lg" href="#features">
          Features
        </a>
        <a className="text-xl md:text-lg" href="#products">
          Products
        </a>
        <a className="text-xl md:text-lg" href="#testimontals">
          Testimontals
        </a>
        <button title="Shop now" className="btn-primary block md:hidden">
          Shop now
        </button>
      </div>
      <div className="hidden md:block">
        <button title="Shop now" className="btn-primary">
          Shop now
        </button>
      </div>
      <button
        title="Shop now"
        className="z-10 block md:hidden"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isMenuVisible ? "black" : "white"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
}

export default TheHeader;
