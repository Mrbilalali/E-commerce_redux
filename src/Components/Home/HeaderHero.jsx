import React from 'react';
import heroImg from "../../assets/hero-2.webp";
import "../../App.css"

function HeaderHero() {
  return (
    <header className="flex md:mt-14 mt-5 mx-4 justify-center relative">
      <img src={heroImg} alt='Hero' width="950px" />
      <div className="absolute z-1 left-0 md:ml-64 ml-10 mt-10 md:mt-40">
        <h1 className="text-xl md:text-6xl font-bold md:mb-4 ">Creative Designs</h1>
        <div className='text-center'>
        <p className='pacifico-regular md:text-xl font-semibold my-5 md:my-10'>Made in Pakistan</p>
        <button className="bg-black hover:bg-blue-700 text-white font-bold md:text-lg text-sm py-1 px-2  md:py-2 md:px-4 rounded-full">Buy Now</button>
      </div>
      </div>
    </header>
  );
}

export default HeaderHero;
