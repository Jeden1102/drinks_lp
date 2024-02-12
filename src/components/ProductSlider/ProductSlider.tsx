import TextCta from "../TextCta";
import "@splidejs/react-splide/css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductSliderSlide from "./ProductSliderSlide";
import slides from "../HeroSlider/slides";
function ProductSlider() {
  return (
    <div className="-mt-8 py-8">
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
            autoWidth: true,
            role: "Product images slider",
          }}
        >
          {slides.map((slide, key) => (
            <SplideSlide
              key={key}
              data-aos="fade-up"
              data-aos-delay={key * 200}
              data-aos-once="true"
            >
              <ProductSliderSlide product={slide} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default ProductSlider;
