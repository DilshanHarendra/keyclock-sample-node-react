import React from "react";
import {useSelector} from "react-redux";
import {userSelectors} from "../../store/selectors/userSelectors.js";
import {profileEdit} from "../../serverices/keyclockHelper.js";
const Profile = ()=>{
    const account = useSelector(userSelectors)


    return <>
      <div className="container mx-auto p-5">
            <div className="w-96 mx-auto">
                {
                    account?
                        <div className="flex flex-col rounded shadow-md bg-white overflow-hidden relative">
                            <a href={profileEdit} className="absolute right-2 top-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>

                            </a>
                            <div className="bg-cover mb-8"
                                 style={{"backgroundImage": `url('https://source.unsplash.com/JgOeRuGD_Y4/800x400')`}}>
                                <div className="h-32 bg-opacity-25 flex items-end justify-center">
                                    <div className="rounded-full bg-white bg-opacity-50 -mb-12 p-2">
                                        <img src="https://source.unsplash.com/c_GmwfHBDzk/160x160" alt="User Avatar"
                                             className="inline-block w-20 h-20 rounded-full"/>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 lg:p-6 flex-grow w-full text-center">
                                <h3 className="text-lg font-semibold mb-3">
                                    {account.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-2">
                                    GivenName ∙ {account.given_name}
                                </p>
                                <p className="text-gray-500 text-sm mb-2">
                                    Family Name ∙ {account.family_name || '-'}
                                </p>
                                <p className="text-gray-500 text-sm mb-2">
                                    Scope ∙ {account.scp || '-'}
                                </p>
                            </div>
                        </div>
                        :
                        <div>
                            <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <circle cx={50} cy={50} fill="none" stroke="#1b3ee5" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                                </circle>
                            </svg>
                        </div>
                }
            </div>
      </div>
    </>
}
export default Profile
