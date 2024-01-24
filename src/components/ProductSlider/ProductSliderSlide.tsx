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
    <div className="flex flex-col gap-2 bg-white rounded-md shadow-lg border min-w-[370px]">
      <div className="flex items-center justify-center p-4 rounded-md md:p-12" style={{ backgroundColor: `${product.bgColor}95` }}>
        <img src={product.can} alt="" className="h-96"/>
      </div>
      <div className="p-4">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="text-2xl">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductSliderSlide;
