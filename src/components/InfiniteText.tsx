import { useRef, useEffect } from "react";

interface ScrollTextProps {
  text: string;
  variant: "primary" | "secondary";
  rotate: "bottom" | "top";
}

const ScrollText: React.FC<ScrollTextProps> = ({ text, variant, rotate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const rotateClass = rotate === "bottom" ? "rotate-3" : "-rotate-3";

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const contentWidth = content.offsetWidth;

      const scrollText = () => {
        if (container.scrollLeft >= contentWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      };

      const scrollInterval = setInterval(scrollText, 30);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div
      className={`scroll-text-container overflow-hidden ${variant === "primary" ? "bg-white" : "bg-[#E6A5CB]"} ${rotateClass}`}
    >
      <div className="scroll-text-content animation-scroll inline-block w-full whitespace-nowrap py-8 text-4xl">
        <p className="uppercase">
          {new Array(3).fill("").map((_, key) => (
            <span key={key}>{text}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ScrollText;
