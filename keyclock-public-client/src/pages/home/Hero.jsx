import React from "react";
import hero from "../../assets/img/hero.jpg"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isAuthenticated} from "../../store/selectors/userSelectors.js";
import {keyClockLogin} from "../../serverices/keyclockHelper.js";

const Hero = ()=>{
    const isUserAuthenticated = useSelector(isAuthenticated)
    const handleLogin = () => {
        keyClockLogin()
    }

    return <>
        <div className="bg-cover bg-bottom" style={{backgroundImage:`url('${hero}')`}}>
            <div className="bg-gray-900 bg-opacity-10 backdrop-filter backdrop-blur-xs">

                <div className="text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    <div
                        className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-white bg-primary">
                        50% off
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                       Master card 12% off sitewide
                    </h2>
                    <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300 lg:w-2/3 mx-auto">
                        On clothing hair and beauty
                    </h3>
                    <div
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                        <button type="button"
                                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-primary bg-primary text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                 className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                            <span>Buy Now</span>
                        </button>

                        {isUserAuthenticated?(
                            <Link to="/"
                                                     className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700">
                            <span>Add to Cart</span>
                        </Link>
                        ):(
                            <button type="button"
                                                          onClick={handleLogin}
                                                          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700">
                            <span>Sign in</span>
                        </button>
                        )
                        }


                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Hero
