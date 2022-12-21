import React,{useEffect} from "react";
import {keyClockInit} from "../../serverices/keyclockHelper.js";
import {useSelector} from "react-redux";
import {userSelectors, userTokenSelectors} from "../../store/selectors/userSelectors.js";

const AuthRedirect = () =>{
    const user = useSelector(userSelectors)
    const token = useSelector(userTokenSelectors)


    console.log(token)



    console.log(user,token)


    return <h1>Auth</h1>
}
export default AuthRedirect
