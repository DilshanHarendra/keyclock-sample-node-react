import React from "react";
import {Link} from "react-router-dom";
const SingleProduct = ({data,index=0})=>{
    return <>
    <Link to={`/product/${index}`}>
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
            <div className="p-2 flex-grow w-full space-y-4">
                <img src={data.image} alt="Product Image"
                     className="rounded-lg h-72 w-full object-cover"/>
                <p
                    className="block font-semibold text-gray-600 hover:text-gray-500">
                    {data.title}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-gray-600 font-medium">
                        ${data.price}
                    </div>
                    <div className="inline-flex items-center">
                        <button type="button"
                                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <svg fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="hi-solid hi-minus-circle inline-block w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <span className="px-2">1</span>
                        <button type="button"
                                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <svg fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="hi-solid hi-plus-circle inline-block w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button type="button"
                            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                             className="opacity-50 hi-solid hi-shopping-bag inline-block w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    </Link>
    </>
}
export default SingleProduct
