import Decoration from "../assets/icons/decoration.svg";
interface Props {
  headingText: string;
  mainText: string;
  waved?: boolean;
}
function TextCta({ headingText, mainText, waved }: Props) {
  return (
    <div
      className={`${waved ? "text-cta" : ""} relative flex justify-center bg-[#FFF6E0] pb-8 md:py-20`}
    >
      <div className="relative flex w-4/5 flex-col gap-10 md:w-3/5">
        <img
          src={Decoration}
          alt="Decoration image"
          className="mx-auto h-40"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          width={120}
          height={120}
          loading="lazy"
        />
        <p
          className="text-center font-secondary text-4xl font-bold md:text-7xl"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {headingText}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          className="text-center"
        >
          {mainText}
        </p>
      </div>
    </div>
  );
}

export default TextCta;
