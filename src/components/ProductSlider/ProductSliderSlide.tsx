interface Props {
  product: {
    can: string;
    bgColor: string;
    name: string;
    price: number;
  };
}
function ProductSliderSlide({ product }: Props) {
  return (
    <div className="flex min-w-[330px] flex-col gap-2 rounded-md border bg-white shadow-lg md:min-w-[370px]">
      <div
        className="flex items-center justify-center rounded-md p-4 md:p-12"
        style={{ backgroundColor: `${product.bgColor}95` }}
      >
        <img
          src={product.can}
          alt="Product can image"
          className="h-60 md:h-96 w-fit"
          loading="lazy"
          width={249}
          height={461}
        />
      </div>
      <div className="p-4">
        <p className="text-xl md:text-3xl font-bold">{product.name}</p>
        <p className="text-lg md;text-2xl">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductSliderSlide;
