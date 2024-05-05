import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartslice";
import toast from "react-hot-toast";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const CardList = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [cardsPerRow, setCardsPerRow] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateCardsPerRow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerRow(1);
      } else if (width < 1024) {
        setCardsPerRow(2);
      } else if (width < 1280) {
        setCardsPerRow(3);
      } else {
        setCardsPerRow(4);
      }
    };

    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  useEffect(() => {
    setVisibleProducts(products.slice(startIndex, startIndex + cardsPerRow));
  }, [startIndex, products, cardsPerRow]);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setStartIndex(Math.max(startIndex - cardsPerRow, 0));
    } else if (direction === "right") {
      setStartIndex(Math.min(startIndex + cardsPerRow, products.length - cardsPerRow));
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Item successfully added to cart");
  };

  return (
    <div className="container mx-auto my-10 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
            <Link to={`/products/${product.id}`}>
              <img className="w-full h-40 object-cover rounded-t-lg" src={product.image} alt={product.title} />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-sm font-semibold text-primeColor">${product.price}</p>
            </div>
            <div className="flex justify-between items-center p-4">
              <Link
                to={`/products/${product.id}`}
                className="text-sm text-primeColor hover:text-purple-500 transition duration-300"
              >
                View Details
              </Link>
              <button
                className="text-sm text-primeColor hover:text-purple-500 flex items-center gap-1 transition duration-300"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Buttons for sliding */}
      {startIndex > 0 && (
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full shadow-lg p-2 z-10 text-gray-600 hover:text-primeColor transition duration-300" onClick={() => handleSlide("left")}>
          <MdKeyboardDoubleArrowLeft className="text-2xl text-white" />
        </button>
      )}
      {startIndex < products.length - cardsPerRow && (
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full shadow-md p-2 z-10 text-gray-600 hover:text-primeColor transition duration-300" onClick={() => handleSlide("right")}>
          <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
        </button>
      )}
    </div>
  );
};

export default CardList;
