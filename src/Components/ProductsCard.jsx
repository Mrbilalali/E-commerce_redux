import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant, MdOutlinePayment } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getData } from "../features/cartslice";
import toast from 'react-hot-toast';


const ProductsCards = () => {
  const items = useSelector((state) => state.allcart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("item successfully Added")
  };

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <Link to={`/products/${item.id}`}>
              <img className="w-full h-60 object-cover" src={item.image} alt={item.title} />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-bold text-primeColor mb-2">{item.title}</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-lg font-semibold text-primeColor">${item.price}</p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to={`/products/${item.id}`}
                  className="text-sm text-gray-600 hover:text-primeColor flex items-center gap-1 transition duration-300"
                >
                  <MdOutlineLabelImportant />
                  <span>View Details</span>
                </Link>
                
                <Link
                  className="text-sm text-gray-600 hover:text-purple-500 hover:text-primeColor flex items-center gap-1 transition duration-300"
                  to={"/checkout"}
                   onClick={() => handleAddToCart(item)}
                > 
                  <MdOutlinePayment />
                  <span>Buy</span>
                </Link>
                <button
                  className="text-sm text-gray-600 hover:text-purple-500 hover:text-primeColor flex items-center gap-1 transition duration-300"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
