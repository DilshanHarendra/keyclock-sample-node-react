import React, {useEffect, useState} from "react";
import productsData from '../../assets/products.json'
import SingleProduct from "../../components/SingleProduct.jsx";
import axios from "axios";
import {useSelector} from "react-redux";
import {userTokenSelectors} from "../../store/selectors/userSelectors.js";
const ProductsSection = ({title})=>{

    const token = useSelector(userTokenSelectors)


    const [products,setProducts] = useState([])

    const fetchProducts = () =>{
        if (token){
            axios.get('http://localhost:8000/api/products',{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Accept':`application/json`,
                    'Content-Type':`application/json`,
                }
            }).then(res=>{
                setProducts(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        if (title==='From Backend'){
            fetchProducts()
        }else{
            setProducts(productsData)
        }
    },[])

    useEffect(()=>{
        if (title==='From Backend'){
            fetchProducts()
        }
    },[token])


    return <>
       <div className="container mx-auto">
           <div className="w-full xl:max-w-7xl mx-auto px-4 py-5">
                   <div className="flex flex-row justify-between items-center space-x-2 mb-5">
                       <span className="text-2lg  font-medium">{title}</span>
                       {
                           products.length!=0&& <div className="flex items-center space-x-2">
                               <button type="button"
                                       className="inline-flex items-center rounded p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring">
                                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                        className="hi-solid hi-view-list inline-block w-5 h-5">
                                       <path
                                           fillRule="evenodd"
                                           d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                           clipRule="evenodd"
                                       ></path>
                                   </svg>
                               </button>
                               <button type="button"
                                       className="inline-flex items-center rounded p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring">
                                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                        className="hi-solid hi-view-grid inline-block w-5 h-5">
                                       <path
                                           d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                       ></path>
                                   </svg>
                               </button>
                           </div>
                       }
                   </div>
               {
                   products.length==0&&
                   <div className="grid place-items-center w-full">
                       No data
                   </div>
               }
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                       {
                           products.map((product,index)=><SingleProduct data={product} index={index} key={index}/>)
                       }

                   </div>

                   <hr className="my-10"/>
               </div>


       </div>

    </>
}
export default ProductsSection
