import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  const itemStyles =
    "flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300 md:w-auto";

  return (
    <div className="w-full bg-white border-b border-b-gray-200 py-4 px-4">
      <div className="max-w-container mx-auto h-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={itemStyles}>
          <span className="font-bold font-titleFont w-6 text-center">2</span>
          <p className="text-lightText text-base text-center">
            Two years warranty
          </p>
        </div>
        <div className={itemStyles}>
          <span
            className="text-xl text-center w-6 ml-1"
            aria-label="Free Shipping Icon"
          >
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base text-center">Free shipping</p>
        </div>
        <div className={itemStyles}>
          <span
            className="text-2xl text-center w-6"
            aria-label="Return Policy Icon"
          >
            <CgRedo />
          </span>
          <p className="text-lightText text-base text-center">
            Return policy in 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
