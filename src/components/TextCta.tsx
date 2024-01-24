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
        <img src={Decoration} alt="Decoration image" className="h-40" />
        <p className="text-center font-secondary text-4xl font-bold md:text-7xl">
          {headingText}
        </p>
        <p className="text-center">{mainText}</p>
      </div>
    </div>
  );
}

export default TextCta;
