import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="w-64 p-4 border rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="relative">
       <a href=''> <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
          alt="Product"
          className="object-cover w-full h-40 rounded-lg"
        /></a>
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-gradient-to-r from-black to-transparent">
          <p className="font-semibold">Kaveeee Fashion</p>
        </div>
        {/* Icons for like and cart */}
        <div className="absolute bottom-0 right-0 flex p-2 space-x-2">
          <a href=''><FaHeart className="text-white" /></a>
          <a href=''><FaShoppingCart className="text-white" /></a>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-3">
        <a href=''><p className="text-gray-600 truncate">Gents trouser dark navy...</p></a>
        <p className="text-xl font-bold">3800 LKR</p>
      </div>

      {/* Seller Information */}
      <div className="flex items-center mt-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Seller"
          className="w-10 h-10 rounded-full"
        />
        <a href=''><p className="ml-3 text-sm font-semibold">Kaveeee Fashion</p></a>
      </div>
    </div>
  );
};

export default ProductCard;
