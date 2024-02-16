import starIcon from "../../assets/icons/star.svg";

interface Props {
  testimontal: {
    rating: number;
    content: string;
    position: string;
    name: string;
  };
}
function TestimontalsSlide({ testimontal }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex gap-2">
        {new Array(testimontal.rating).fill("").map((_, index) => (
          <img
            key={index}
            src={starIcon}
            alt="Star icon"
            loading="lazy"
            width={24}
            height={24}
          />
        ))}
      </div>
      <p className="my-2 text-center text-lg md:text-2xl font-bold">
        {testimontal.content}
      </p>
      <p className="text-lg italic">{testimontal.name}</p>
      <p className="text-lg">{testimontal.position}</p>
    </div>
  );
}

export default TestimontalsSlide;
