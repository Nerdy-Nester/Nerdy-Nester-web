import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Nerdy Nester Electric Wearable Portable Breast Pump"
          price="KES 8,400.00"
          color="White"
          badge={true}
          des="A portable and wearable breast pump that offers comfort and convenience for moms on the go."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Nerdy Nester Portable Bottle Warmer"
          price="KES 4,500.00"
          color="Gray"
          badge={true}
          des="Keep your baby’s milk at the perfect temperature with this portable bottle warmer, perfect for travel."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
