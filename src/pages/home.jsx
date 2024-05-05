import React, { useEffect } from 'react'
import ProductsCards from '../Components/ProductsCard'
import HeaderHero from '../Components/Home/HeaderHero'
import Feature from '../Components/Home/Feature'
import CardList from '../Components/Home/CardList'
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/cartslice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allcart.items);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    
    <div>
      <HeaderHero/>
        <h1 className='text-center font-bold text-3xl mt-16 text-gray-700'>Our Latest Products</h1>
  
     <CardList products={products} />
     <Feature/>
    
    </div>
  )
}

export default Home