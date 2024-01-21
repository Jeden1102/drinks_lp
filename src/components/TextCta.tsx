import Decoration from "../assets/icons/decoration.svg";

function TextCta() {
  return (
    <div className="text-cta relative flex justify-center bg-[#FFF6E0] pb-8 md:py-20">
      <div className="relative flex w-4/5 flex-col gap-10 md:w-3/5">
        <img src={Decoration} alt="Decoration image" className="h-40" />
        <p className="text-center font-secondary text-4xl font-bold md:text-7xl">
          Your Trusted Source for Delicious, Healthy Drinks.
        </p>
        <p className="text-center">
          Discover the perfect balance of taste and nutrition with Juice Labs.
          Our selection of healthy drinks is sure to satisfy your thirst and
          nourish your body. From refreshing waters to energizing smoothies, we
          have something for everyone.
        </p>
      </div>
    </div>
  );
}

export default TextCta;
