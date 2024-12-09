import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  if (!SplOfferData || SplOfferData.length === 0) {
    return <p>No products are currently on sale.</p>;
  }

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on Sale
      </h3>
      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img
                className="w-24"
                src={item.img}
                alt={`${item.productName} image`}
              />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
