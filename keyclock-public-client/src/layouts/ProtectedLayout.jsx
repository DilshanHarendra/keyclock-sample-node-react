import React, {useEffect, useState} from "react";
import {Outlet,useNavigate} from 'react-router-dom';
import Navbar from "./default/Navbar.jsx";
import Footer from "./default/Footer.jsx";


const ProtectedLayout = () => {
    const navigate = useNavigate();


    const [isLoading,setIsLoading] =  useState(false)


    if (isLoading){
        return <div className="w-screen h-screen grid place-items-center">
            <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} fill="none" stroke="#1b3ee5" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                </circle>
            </svg>
        </div>
    }

    return (
        <>
         <Navbar/>
          <div className="bg-gray-50">
              <Outlet/>
          </div>
            <Footer/>
                <div className="fixed bottom-0 right-10 bg-white z-50 py-2 px-6 shadow flex items-center border border-gray-200">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"/>
                    </svg>
                    Message
                </div>
        </>

    );
}
export default ProtectedLayout
