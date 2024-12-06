import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "New Arrivals",
      icons: true,
      subCategories: ["Baby Clothes", "Baby Toys", "Maternity Wear"],
    },
    {
      _id: 991,
      title: "Gudgets",
      subCategories: ["Portable Pumps", "Wearable Breast Pumps"],
    },
    {
      _id: 992,
      title: "Accessories",
      icons: true,
      subCategories: ["Baby Bottles", "Pacifiers", "Diaper Bags"],
    },
    {
      _id: 993,
      title: "Electronics",
      subCategories: ["Baby Monitors", "Thermometers", "Portable Heaters"],
    },
    {
      _id: 994,
      title: "Others",
      subCategories: ["Strollers", "High Chairs"],
    },
  ];

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons, subCategories }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
              {/* Conditionally render the subcategories */}
              {showSubCatOne && icons && (
                <ul className="pl-4 mt-2">
                  {subCategories.map((subCat, index) => (
                    <li key={index} className="text-xs text-gray-600">
                      {subCat}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
