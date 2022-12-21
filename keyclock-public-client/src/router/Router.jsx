import React, {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/home/Home.jsx";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Profile from "../pages/profile/Profile.jsx";
import ProtectedLayout from "../layouts/ProtectedLayout.jsx";
import ProductCreate from "../pages/productCraete/ProductCreate.jsx";
import AuthRedirect from "../pages/auth/AuthRedirect.jsx";

function Router(){
	return useRoutes([
		{
			path:'',
			element:<DefaultLayout/>,
			children : [
				{
					path: '/',
					element: <Home/>,
				},
				{
					path: '/product/:id',
					element: <ProductDetails/>,
				},
				{
					path: '/auth-redirect',
					element: <AuthRedirect/>,
				},
			]
		},
		{
			path:'',
			element:<ProtectedLayout/>,
			children : [
				{
					path: '/profile',
					element: <Profile/>,
				},
				{
					path: '/product/new',
					element: <ProductCreate/>,
				},
			]
		}
	]);
}export default Router;
