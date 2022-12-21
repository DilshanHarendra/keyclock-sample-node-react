import React from "react";
import {Link,useParams} from "react-router-dom";
import products from '../../assets/products.json'

const Hero = ()=>{
    const {id} = useParams()
    const product = products[id]||products[0]

    return <>

        <div className="bg-white">
            <div className="container xl:max-w-7xl mx-auto px-4 py-8">
                <nav>
                    <ol className="flex items-center">
                        <li>
                            <Link to="/" className="text-indigo-600 hover:text-indigo-400">Home</Link>
                        </li>
                        <li className="px-2 sm:px-3 opacity-50">
                            /
                        </li>
                        <li>
                            <Link to="/" className="text-indigo-600 hover:text-indigo-400">Product</Link>
                        </li>
                    </ol>
                </nav>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-5">
                    <div>
                        <img src={product.image} alt="Product Image"/>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            {
                                [1,2,3,4].map((item,index)=>   <div key={index} className="transition ease-out opacity-50 hover:opacity-100"><img
                                    src={product.image} alt="Product Image 1"/></div>)
                            }
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            <div>
                                <div className="uppercase text-indigo-600 tracking-wide text-sm font-semibold">
                                    {product.category}
                                </div>
                                <div
                                   className="block font-semibold md:text-lg text-gray-600 hover:text-gray-500">
                                    {product.title}
                                </div>
                            </div>
                            <div className="text-orange-500 text-left sm:text-right">
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     className="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     className="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     className="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     className="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     className="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="prose prose-indigo mb-4">
                            <p>
                                Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus
                                nibh sapien in purus. Mauris tincidunt tincidunt turpis in porta. Integer fermentum
                                tincidunt auctor.
                            </p>
                            <p>
                                Consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula
                                hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis in
                                porta integer.
                            </p>
                            <p>
                                Urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt tincidunt
                                turpis in porta. Integer fermentum tincidunt.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg">
                                <button type="button"
                                        className="h-5 w-5 rounded-full shadow-inner inline-block hover:opacity-75 active:opacity-100 focus:outline-none bg-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"></button>
                                <button type="button"
                                        className="h-5 w-5 rounded-full shadow-inner inline-block hover:opacity-75 active:opacity-100 focus:outline-none bg-red-400 focus:ring focus:ring-red-400 focus:ring-opacity-50"></button>
                                <button type="button"
                                        className="h-5 w-5 rounded-full shadow-inner inline-block hover:opacity-75 active:opacity-100 focus:outline-none bg-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50"></button>
                                <button type="button"
                                        className="h-5 w-5 rounded-full shadow-inner inline-block hover:opacity-75 active:opacity-100 focus:outline-none bg-black focus:ring focus:ring-black focus:ring-opacity-50"></button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">
                                    ${product.price}
                                </div>
                                <div className="inline-flex items-center">
                                    <button type="button"
                                            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                             className="hi-solid hi-minus-circle inline-block w-5 h-5">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <span className="px-2">1</span>
                                    <button type="button"
                                            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                             className="hi-solid hi-plus-circle inline-block w-5 h-5">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                <button type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:flex-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                         className="opacity-50 hi-solid hi-heart inline-block w-5 h-5">
                                        <path fillRule="evenodd"
                                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Favorite</span>
                                </button>
                                <button type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:flex-grow px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
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
                </div>
            </div>
        </div>
    </>
}
export default Hero
