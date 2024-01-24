import TextCta from "../TextCta";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductSliderSlide from "./ProductSliderSlide";
import slides from "../HeroSlider/slides";
function ProductSlider() {
  return (
    <div className="py-8">
      <TextCta
        headingText="Explore Our Wide Range of Healthy Drink Options"
        mainText="From refreshing waters to energizing smoothies, we have something for every taste and need"
      />
      <div className="px-4">
        <Splide
          options={{
            rewind: true,
            arrows: false,
            pagination: false,
            gap: "1rem",
            autoWidth:true,
          }}
        >
          {slides.map((slide) => (
            <SplideSlide>
              <ProductSliderSlide product={slide} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default ProductSlider;
