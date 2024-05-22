import React from 'react';
import heroImg from "../../assets/hero-2.webp";
import "../../App.css"

function HeaderHero() {
  return (


<div class="my-10 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl bg-green-50 px-4">
  <p class="mt-20 text-center md:text-2xl sm:text-lg font-semibold text-lime-500">Our Store</p>
  <h1 class="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">Discover the Latest Trends in Shopping Mart</h1>
  <p class="mx-auto hidden sm:block mt-4 max-w-5xl text-center text-gray-500 sm:mt-8 sm:text-lg">Brand that combines creativity with premium quality to delivery clothing that stands out.</p>

  <div class="mx-auto mt-8 mb-20 flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6">
    <button class="rounded-full bg-black px-10 py-3 font-medium text-white hover:opacity-80 sm:w-auto">Get Started</button>
    <button class="rounded-full border-2 border-black px-10 py-3 font-medium text-black transition hover:bg-black hover:text-white sm:w-auto">View Pricing</button>
  </div>
</div>

  );
}

export default HeaderHero;
