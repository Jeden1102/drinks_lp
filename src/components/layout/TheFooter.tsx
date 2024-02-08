import "@splidejs/react-splide/css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

import image1 from "../../assets/images/footer/1.png";
import image2 from "../../assets/images/footer/2.png";
import image3 from "../../assets/images/footer/3.png";
import image4 from "../../assets/images/footer/4.png";
import image5 from "../../assets/images/footer/5.png";
import image6 from "../../assets/images/footer/6.png";
import image7 from "../../assets/images/footer/7.png";
import image8 from "../../assets/images/footer/8.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function TheFooter() {
  return (
    <footer className="bg-[#EDFA68]">
      <div className="flex w-full items-center justify-between p-4 md:p-8 lg:p-12">
        <p className="font-secondary  text-4xl">Say hey @Juicelabs</p>
        <span className="text-lg hover:underline">Follow</span>
      </div>
      <Splide
        options={{
          rewind: true,
          arrows: false,
          pagination: false,
          gap: "1rem",
          perPage: 1,
          autoWidth: true,
        }}
      >
        {images.map((image, key) => (
          <SplideSlide key={key}>
            <img
              className="h-72 w-72 object-cover"
              src={image}
              alt=""
              width={220}
              height={220}
            />
          </SplideSlide>
        ))}
      </Splide>
    </footer>
  );
}

export default TheFooter;
