import {store} from "../store/store.js";
import {setIsAuthenticated, setToken, setUser} from "../store/reducers/usersSlice.js";
const logout =()=>{
    store.dispatch(setIsAuthenticated(null))
    store.dispatch(setToken(null))
    store.dispatch(setUser(null))
  //  window.location.reload()
}
export default logout
