import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {getNavs} from "../navigation/index";
import {BiLogInCircle} from "react-icons/bi";

const Sidebar = ({showSidebar,setShowSidebar}) => {
    const [allNav,setAllNav]=useState([]);
    const {pathname}=useLocation()
    useEffect(()=>{
        const navs=getNavs('seller')
        setAllNav(navs)
    },[])


    return (<div>
           <div onClick={()=>setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' :'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>
            <div className={`w-[260px] fixed bg-sky-800 z-50 to-0 h-screen shadow-2xl transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'} `}>
                <div className={`h-[70px] flex justify-center items-center`}>
                    <Link to={'/'}>
                        <h3 className='text-amber-200 text-2xl bg-transparent p-3 rounded-lg'>Shopp.my</h3>
                    </Link>
                </div>
               <div className="px-4">
                   <ul>
                       {
                           allNav.map((n,i)=><li key={i}>
                                   <Link to={n.path} className={`${pathname===n.path? 'bg-purple-300 text-white duration-500':'bg-green-400 '} px-4 py-2 rounded-lg flex justify-center gap-3 items-center mb-1 hover:pl-4 transition-all`}>
                                       <span>{n.icon}</span>
                                       <span>{n.title}</span>
                                   </Link>
                           </li>)
                       }
                       <li>
                           <button className='bg-red-950 rounded-lg px-4 mt-10 text-white flex items-center gap-4 py-2 m-auto '><BiLogInCircle/> Logout</button>
                       </li>
                   </ul>
               </div>
            </div>
        </div>);
};

export default Sidebar;