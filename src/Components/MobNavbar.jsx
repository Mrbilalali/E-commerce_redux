import React from "react";
import { Link } from "react-router-dom";

function MobNavbar() {
  return (
    <nav>
      
      <div className="md:hidden absolute bg-gray-100 shadow-2xl mx-5 rounded-xl mt-10 min-h-[60vh] left-0 top-[20%] w-full flex items-center py-10 px-5 z-10">
        <div className="flex flex-col items-start gap-7 font-bold text-lg">
      
          <div className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/"}>Home</Link>
          </div>
    
          <div className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/shop"}>Shop</Link>
          </div>
          <div className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="hover:bg-gray-950 py-1 px-2 rounded-lg hover:text-gray-300">
            <Link to={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobNavbar;
