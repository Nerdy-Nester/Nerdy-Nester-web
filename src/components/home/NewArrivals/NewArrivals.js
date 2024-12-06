import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne, // Make sure to replace with actual images for these products
  newArrTwo,
} from "../../../assets/images/index"; // Replace with appropriate image paths
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  // Settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  // Products to display in the New Arrivals section
  const products = [
    {
      _id: "100001",
      img: newArrOne, // Replace with the image for the breast pump
      productName: "Nerdy Nester Electric Wearable Portable Breast Pump",
      price: "KES 8400.00",
      color: "White",
      badge: true,
      des: "A wearable electric breast pump designed for convenience and efficiency. Perfect for busy mothers on the go.",
    },
    {
      _id: "100002",
      img: newArrTwo, // Replace with the image for the bottle warmer
      productName: "Nerdy Nester - Portable Bottle Warmer",
      price: "KES 4500.00",
      color: "White",
      badge: true,
      des: "A portable bottle warmer to keep your baby's milk at the perfect temperature, wherever you are.",
    },
  ];

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2">
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              des={product.des}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
