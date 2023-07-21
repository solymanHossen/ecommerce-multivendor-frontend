

 import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";
import {FaList} from "react-icons/fa";

const SellerToAdmin = () => {

    return (<div className='px-2 lg:px-7 py-5'>
        <div className='w-full bg-sky-800 px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
            <div className='flex w-full relative'>
                <div className='w-full  md:pl-4'>
                    <div className='flex justify-between items-center'>
                       <div className={'flex justify-start items-center gap-3'}>
                            <div className='relative'>
                                <img src="" alt=""
                                     className='w-[42px] h-[38px] border-white border-2 p-[2px] rounded-full'/>
                                <div
                                    className='w-[10px] h-[10px] bg-green-400 rounded-full absolute right-0 bottom-0'>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-white font-semibold'>Support</h2>

                    </div>
                    <div className='py-4'>
                        <div className='bg-slate-800 h-[calc(100vh-290)] rounded-md p-3 overflow-x-auto'>
                            <div className='w-full flex justify-start items-center'>
                                <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div>
                                        <img src="" alt=""
                                             className='w-[42px] h-[38px] border-white border-2 p-[2px] rounded-full'/>
                                    </div>
                                    <div className='flex flex-col items-start justify-center flex-col text-white w-full px-3 bg-orange-700 shadow-lg shadow-orange-500/50 rounded'>
                                        <span className=''>Test</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-end items-center'>
                                <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div className='flex flex-col items-start justify-center flex-col text-white w-full px-3 bg-green-700 shadow-lg shadow-green-500/50 rounded'>
                                        <span className=''>Test</span>
                                    </div>
                                    <div>
                                        <img src="" alt=""
                                             className='w-[42px] h-[38px] border-white border-2 p-[2px] rounded-full'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className='flex gap-3'>
                        <input type="text"
                               className='w-full flex justify-between px-2 border border-slate-700 items-center py-2 focus:border-blue-500 rounded-md outline-none bg-transparent text-white' placeholder='input your text'/>
                        <button className='bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] text-white rounded'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>);
};

export default SellerToAdmin;;