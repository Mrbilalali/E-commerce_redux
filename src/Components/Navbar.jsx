import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCarttotal } from "../features/cartslice";
import "../App.css";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import MobNavbar from "./MobNavbar";
import AddCart from "./AddCart";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [addCartButton, setAddCartButton] = useState(false); 
  const { cart, totalQuantity } = useSelector((state) => state.allcart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarttotal());
  }, [cart]);

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  const handleCartButtonClick = () => {
    setAddCartButton(!addCartButton); 
  };

  return (
    <nav className="flex md:justify-between justify-center items-center mx-auto w-[92%] h-14 mt-6 bg-white">
      <div className="items-center">
        <Link to={"/"}>
          <h1 className="md:text-3xl text-2xl pacifico-regular">
            Shopping Mart
          </h1>
        </Link>
      </div>

      <div className="md:relative absolute md:min-h-fit md:bg-gray-50 md:shadow-md md:ml-0 mr-28 md:px-10 md:py-3  md:rounded-xl   md:w-auto md:top-[9%] top-[-100%] md:flex md:items-center">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="hover:bg-gray-950 py-1 px-2 rounded-lg  hover:text-gray-300">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="hover:bg-gray-950 py-1 px-2 rounded-lg  hover:text-gray-300">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link onClick={handleCartButtonClick}>
          {addCartButton ? <AddCart /> : null}
          <div className="hover:bg-gray-950  hover:text-gray-300 bg- py-1 px-2 rounded-lg mx-2">
            <span className="flex">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="bg-black border-white border-2 text-white rounded-lg text-xs px-2 my-1 py-1">
                {totalQuantity}
              </span>
            </span>
          </div>
        </Link>
      </div>

      <div className="md:hidden text-2xl mx-5">
        <button onClick={toggleNavbar}>
          {toggle ? <IoCloseCircleOutline /> : <TiThMenuOutline />}
          {toggle ? <MobNavbar /> : null}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
