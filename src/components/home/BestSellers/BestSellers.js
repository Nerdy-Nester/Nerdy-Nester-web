import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne, // Replace with actual images for the Nerdy Nester products
  bestSellerTwo,
} from "../../../assets/images/index"; // Replace with the correct image paths

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne} // Replace with the image for the breast pump
          productName="Nerdy Nester Electric Wearable Portable Breast Pump"
          price="KES 8400.00"
          color="White"
          badge={true}
          des="A wearable electric breast pump designed for convenience and efficiency. Perfect for busy mothers on the go."
        />
        <Product
          _id="1012"
          img={bestSellerTwo} // Replace with the image for the bottle warmer
          productName="Nerdy Nester - Portable Bottle Warmer"
          price="KES 4500.00"
          color="White"
          badge={true}
          des="A portable bottle warmer to keep your baby's milk at the perfect temperature, wherever you are."
        />
      </div>
    </div>
  );
};

export default BestSellers;
