import React from "react";
import Hero from "./Hero.jsx";
import ProductsSection from "./ProductsSection.jsx";
const Home = ()=>{
    return <>
        <Hero/>
            <ProductsSection title="From Backend"/>
            <ProductsSection title="Your Choice"/>
        <ProductsSection title="New Arrivals"/>
        <ProductsSection title="Deals"/>

    </>
}
export default Home
