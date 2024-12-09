import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  
  if (!productInfo) {
    return <p>Loading product details...</p>;
  }

  const {
    productName = "Product Name",
    price = "0.00",
    des = "No description available.",
    color = "N/A",
    id,
    img,
    badge,
  } = productInfo;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: id,
        name: productName,
        quantity: 1,
        image: img,
        badge: badge,
        price: price,
        colors: color,
      })
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productName}</h2>
      <p className="text-xl font-semibold">{price}</p>
      <p className="text-base text-gray-600">{des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {color}
      </p>
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        aria-label={`Add ${productName} to cart`}
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string,
    productName: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    des: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
    badge: PropTypes.string,
  }),
};

export default ProductInfo;
