import React, {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {userTokenSelectors} from "../../store/selectors/userSelectors.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const ProductCreate = ()=>{

    const navigate = useNavigate();
    const [error,setError] = useState('')

    const token = useSelector(userTokenSelectors)
    const title = useRef()
    const category = useRef()
    const price =  useRef()
    const image = useRef()

    const submit = e=>{
        setError('')
        e.preventDefault()
        const product = {
            title: title.current.value,
            category: category.current.value,
            price: price.current.value,
            image: image.current.value
        }

        axios.post('http://localhost:8000/api/products',product,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept':`application/json`,
                'Content-Type':`application/json`,
            }
        }).then(res=>{
            navigate("/")
        }).catch(err=>{
            console.log(err.response.data.error)
            setError(err.response.data.error||'Error')
        })
    }



    return <>
        <div className=" container mx-auto p-5 mt-5">
            <div className="bg-white md:w-3/4 mx-auto p-8">
                <h1>Create Product</h1>
                <p className="text-red-500  text-sm">{error}</p>
                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-1">
                        <label className="font-medium text-sm" htmlFor="tk-form-elements-sm-name">Title</label>
                        <input
                            ref={title}
                            value="Woman Denim Shirt & Trouser"
                            className="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            type="text" id="tk-form-elements-sm-name" placeholder="Enter Title"/>
                    </div>
                    <div className="space-y-1">
                        <label className="font-medium text-sm" htmlFor="tk-form-elements-sm-email">Category</label>
                        <select ref={category} name="" id="" value="Woman" className="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                            <option value="Woman">Woman</option>
                            <option value="Men">Men</option>
                            <option value="Watch">Watch</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Sunglasses">Sunglasses</option>
                            <option value="Headphones">Headphones</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="font-medium text-sm"  htmlFor="tk-form-elements-sm-password">Image</label>
                        <input
                            ref={image}
                            value="https://images.unsplash.com/photo-1623931218183-39a3a622fe3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            className="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            type="text" id="tk-form-elements-sm-password" placeholder="Enter Image"/>
                    </div>

                    <div className="space-y-1">
                        <label className="font-medium text-sm"  htmlFor="tk-form-elements-sm-password">Price</label>
                        <input
                            ref={price}
                            value="165"
                            className="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            type="number" id="tk-form-elements-sm-password" placeholder="Enter Price"/>
                    </div>

                    <button type="submit"
                            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-fit px-4 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                        Create
                    </button>

                </form>
            </div>
        </div>
    </>
}
export default ProductCreate
