import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 4500.0,
    },
    {
      _id: 951,
      priceOne: 4500.0,
      priceTwo: 8400.0,
    },
    {
      _id: 952,
      priceOne: 8400.0,
      priceTwo: 13000.0, // This is an example of the next price range.
    },
    {
      _id: 953,
      priceOne: 13000.0,
      priceTwo: 20000.0,
    },
    {
      _id: 954,
      priceOne: 20000.0,
      priceTwo: 30000.0,
    },
    // Add more price ranges as needed.
  ];

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              KES {item.priceOne.toFixed(2)} - KES {item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
