import "@splidejs/react-splide/css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import testimontals from "./TestimontalsData";
import TestimontalsSlide from "./TestimontalsSlide";

function Testimontals() {
  return (
    <div className="text-cta text-cta--pink relative mt-52 w-full bg-[#E6A5CB] pb-8">
      <div className="mx-auto max-w-[1200px] px-4" data-aos="fade-up">
        <Splide
          options={{
            rewind: true,
            arrows: false,
            pagination: false,
            gap: "1rem",
            perPage: 1,
            role: "Testimonals listing",
          }}
        >
          {testimontals.map((testimontal, key) => (
            <SplideSlide key={key}>
              <TestimontalsSlide testimontal={testimontal} key={key} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        data-delay="300"
        className="relative z-40 mt-4 overflow-hidden text-center font-secondary text-4xl font-bold uppercase md:text-7xl lg:text-9xl"
      >
        Testimontals
      </p>
    </div>
  );
}

export default Testimontals;
