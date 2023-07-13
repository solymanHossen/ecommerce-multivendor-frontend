import React from 'react';
import {BiMenu} from "react-icons/bi";

const Header = ({showSidebar,setShowSidebar}) => {
    return (
        <>
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[80px] text-white bg-sky-800 transition-all flex justify-between items-start">
             <div onClick={()=>setShowSidebar(!showSidebar)} className='h-full w-[35px] flex items-center lg:hidden'>
              <span><BiMenu className='h-10 w-10'/></span>
             </div>
                <div className=' hidden md:block !flex items-center h-full px-4'>
                    <input type="text" name='search' placeholder='search' className='px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-lg text-white focus:border-indigo-600 overflow-hidden'/>
                </div>
                <div className='flex justify-center items-center gap-8 relative h-full'>
                    <div className='flex justify-center items-center px-4 h-full'>
                        <div className='flex justify-center items-center flex-col text-end px-4'>
                           <h2 className='text-lg font-bold text-indigo-300'>solyman</h2>
                            <span className='font-normal'>Admin</span>
                        </div>
                        <div className='h-10 w-10 bg-amber-200 rounded-full flex items-center justify-center text-black overflow-hidden '>Img</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;