import React, {useEffect, useState,Suspense} from 'react'
import Router from "./router/Router.jsx";
import axios from "axios";
import {persistor, store} from "./store/store.js";
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingPage from "./components/LoadingPage.jsx";
import { useDispatch,useSelector } from 'react-redux'
import {setUser,setToken,setIsAuthenticated} from "./store/reducers/usersSlice.js";
import {userSelectors,userTokenSelectors} from "./store/selectors/userSelectors.js";
import {keyClockToken,keyClockTokenData} from "./serverices/keyclockHelper.js";

function App() {
    const dispatch = useDispatch()
    const user = useSelector(userSelectors)
    const token = useSelector(userTokenSelectors)


    useEffect(()=>{
        window.keyClockInit.then(res=>{
           if (res){
               dispatch(setToken(keyClockToken()))
               dispatch(setIsAuthenticated(true))
               dispatch(setUser(keyClockTokenData()))
           }
        })
    },[])




    return (<PersistGate loading={<LoadingPage/>} persistor={persistor}>
        <Suspense fallback={<LoadingPage/>}>
            <Router />
        </Suspense>
    </PersistGate>)


}

export default App
