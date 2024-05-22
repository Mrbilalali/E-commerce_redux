import React, { useState } from 'react'
import AddCart from './AddCart'
import { Link } from 'react-router-dom'

function PaymentMessage() {
    const [addCartButton, setAddCartButton] = useState(false); 
    const handleCartButtonClick = () => {
        setAddCartButton(!addCartButton); 
      };
     
  return (
    <div>
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="/checkout" className="text-2xl font-bold text-gray-800">Checkout</a>
    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </a>
            <Link onClick={handleCartButtonClick}>
            {addCartButton ? <AddCart /> : null}
            <span  className="font-semibold text-gray-900">Shop</span>
            </Link>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="/checkout">2</a>
            <span className="font-semibold text-gray-500">Shipping</span>
          </li>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">3</a>
            <span className="font-semibold text-gray-900">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

    <div  className="px-4 pt-8 text-center">
          <p  className="text-2xl font-medium">Payment Status</p>
          <p  className="text-lg font-medium mt-20 mb-32">Test Passed Payment Successfully Done</p>
          <Link  to={"/#"} className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-center text-white text-sm font-semibold rounded">Go Back</Link>
    </div>
  </div>
  )
}

export default PaymentMessage