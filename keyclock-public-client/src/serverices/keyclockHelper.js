import Keycloak from "keycloak-js";

const keyClock = new Keycloak({
    url:'http://localhost:8080/auth',
    realm: 'fashion-store-realm',
    clientId:'fashion_public_app',
})

 const keyClockInit = () =>{
    window.keyClockInit = keyClock.init({
        onLoad:'check-sso',
        silentCheckSsoRedirectUri:'http://localhost:3000',
        pkceMethod: 'S256',
        redirectUri:'http://localhost:3000',
        checkLoginIframe:true,
    })
    return window.keyClockInit
}

const keyClockLogin = ()=>keyClock.login({
    redirectUri:'http://localhost:3000',
    prompt:'login'
})

const keyClockLogout = ()=>{
   return  keyClock.logout()
}

const keyClockToken =()=>keyClock.token

const keyClockTokenData = ()=>keyClock.tokenParsed

const isAuthenticated = ()=>keyClock.authenticated

const profileEdit = "http://localhost:8080/auth/realms/fashion-store-realm/account/"

export {
    keyClockInit,
    keyClockLogin,
    keyClockLogout,
    keyClockToken,
    keyClockTokenData,
    isAuthenticated,
    profileEdit
}
