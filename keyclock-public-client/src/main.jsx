import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {store} from "./store/store.js";
import {Provider} from "react-redux";
import {keyClockInit} from "./serverices/keyclockHelper.js";



keyClockInit().then(res=>{
    console.log("keyClockInit Success",res)
}).catch(err=>{
    console.error("keyClockInit Error",err)
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                    <App />
            </Provider>
      </React.StrictMode>
    </BrowserRouter>
)
