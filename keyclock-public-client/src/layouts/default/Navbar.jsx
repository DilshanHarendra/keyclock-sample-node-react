import React,{useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.jpeg"
import {useSelector} from 'react-redux'
import {isAuthenticated, userSelectors} from "../../store/selectors/userSelectors.js";
import {keyClockLogin, keyClockLogout} from "../../serverices/keyclockHelper.js";
import logout from "../../serverices/logout.js";
const Navbar = () => {

    const isUserAuthenticated = useSelector(isAuthenticated)


    const [profileDropdown,setProfileDropdown] = useState(false)

    const user = useSelector(userSelectors)
    const logoutHandler = () => {
        logout()
        keyClockLogout().then(res=>{

        })

    }
    const handleLogin = () => {
        keyClockLogin()
    }


    return (
        <>
            <nav className="bg-gray-100 w-full ">
              <div className="flex justify-end py-1 items-center container mx-auto text-sm uppercase">
                  <NavLink to="/"  className="hover:text-gray-400 px-4 ">
                      <span>Features</span>
                  </NavLink>
                  <NavLink to="/"  className="hover:text-gray-400 px-4">
                      <span>Plans</span>
                  </NavLink>
                  <NavLink to="/"  className="hover:text-gray-400 px-4">
                      <span>Customer care</span>
                  </NavLink>
                  <NavLink to="/"  className="hover:text-gray-400 px-4">
                      <span>About</span>
                  </NavLink>

                  {
                      isUserAuthenticated?
                         <>
                             <NavLink to="/"  className="hover:text-gray-400 px-4">
                                 <span>Track my order</span>
                             </NavLink>
                             <NavLink to="/product/new"  className="hover:text-gray-400 px-4">
                                 <span>Create Product</span>
                             </NavLink>
                         </>
                      :
                          <>

                          <button onClick={handleLogin} type="button"  className="hover:text-gray-400 px-4 uppercase">
                              <span>Sign in</span>
                          </button>
                      </>

                  }
              </div>
            </nav>
            <header id="page-header" className="flex  items-center p-5 container mx-auto">
                <div className="flex items-center items-center w-full">
                    <Link to="/"
                           className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75">
                            <img className="w-24 h-10 object-cover" src={logo} alt="logo"/>
                    </Link>
                   <div className="w-full flex px-4 ml-8">
                       <form action="" className="w-full flex items-center">
                           <input type="search" placeholder="Search" className="w-full h-full bg-gray-100 px-4 border border-gray-300  "/>
                           <button className="bg-primary text-white p-2 h-full">
                               <svg className="hi-solid hi-search inline-block w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                   <path fillRule="evenodd"
                                         d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                         clipRule="evenodd"/>
                               </svg>
                           </button>
                       </form>
                       <button className="px-6">
                           <svg className="w-6 h-6 hover:text-gray-400 text-gray-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                               <path
                                   d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                           </svg>

                       </button>

                       {
                           isUserAuthenticated&& <div className="relative inline-block">
                               <button
                                   type="button"
                                   className="flex items-center space-x-2 font-semibold focus:outline-none  leading-5 text-sm  text-gray-800 hover:text-gray-800"
                                   id="tk-dropdown-layouts-user"
                                   aria-haspopup="true"
                                   aria-expanded="true"
                                   onClick={()=>setProfileDropdown(prev=>!prev)}
                               >
                                   <span>{user?.given_name}</span>
                                   <svg className="inline-block w-10 h-10 text-gray-500"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path fillRule="evenodd"
                                             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                             clipRule="evenodd"/>
                                   </svg>
                               </button>
                               {
                                   profileDropdown&& <div role="menu" aria-labelledby="tk-dropdown-layouts-user"
                                                          className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1">
                                       <div
                                           className="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                                           <div className="p-2 space-y-1">
                                               <Link to="profile" role="menuitem"
                                                     className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                                                   <svg className="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                             clipRule="evenodd"/>
                                                   </svg>
                                                   <span>Profile</span>
                                               </Link>

                                               <Link to="/" role="menuitem"
                                                     className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                                                   <svg className="hi-solid hi-inbox inline-block w-5 h-5 opacity-50"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                                             clipRule="evenodd"/>
                                                   </svg>
                                                   <span>Inbox</span>
                                               </Link>
                                           </div>
                                           <div className="p-2 space-y-1">
                                               <Link to="/" role="menuitem"
                                                     className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                                                   <svg className="hi-solid hi-cog inline-block w-5 h-5 opacity-50"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                             clipRule="evenodd"/>
                                                   </svg>
                                                   <span>Settings</span>
                                               </Link>
                                           </div>
                                           <div className="p-2 space-y-1">
                                               <button role="menuitem"
                                                       onClick={logoutHandler}
                                                       className="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
                                                   <svg
                                                       className="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                                                       fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                             clipRule="evenodd"/>
                                                   </svg>
                                                   <span>Sign out</span>
                                               </button>
                                           </div>
                                       </div>
                                   </div>

                               }
                           </div>
                       }

                   </div>
                </div>
            </header>
        </>

    );
}
export default Navbar
