import benefitsImage from "../../assets/images/benefits.png";

function Benefits() {
  return (
    <div className="relative z-50 flex h-[400px] md:h-[600px]">
      <img
        className="absolute left-0 top-0 -z-10 h-full min-h-96 w-full object-cover"
        src={benefitsImage}
        alt="Juice being poured into a glass."
        width={1720}
        height={878}
        loading="lazy"
      />
      <div className="flex flex-col  justify-between gap-2 p-4 md:justify-start md:gap-8 md:p-8">
        <p
          className="max-w-52 text-xl font-bold md:max-w-96 md:text-3xl lg:text-5xl"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Experience the Benefits of Juice Labs Today.
        </p>
        <button
          title="Shop now"
          className="btn-primary  w-fit bg-white text-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Benefits;
