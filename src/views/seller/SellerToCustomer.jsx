import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";
import {FaList} from "react-icons/fa";

const ChatSeller = () => {
    const [sellerId, setSellerId] = useState(true)
    const [show, setShow]         = useState(false)
    return (<div className='px-2 lg:px-7 py-5'>
        <div className='w-full bg-sky-800 px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
            <div className='flex w-full relative'>
                <div
                    className={`w-[280px] h-full absolute z-10 ${show ? '-left-4' : '-left-[336px]'} md:left-0 md:relative transition-all`}>
                    <div className='w-full h-[calc(100vh-177px)] bg-sky-600 md:bg-transparent overflow-x-auto'>
                        <div
                            className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                            <h2>Sellers</h2>
                            <span onClick={() => setShow(!show)}
                                  className='block cursor-pointer md:hidden'><IoMdClose/></span>
                        </div>
                        <div
                            className={`bg-slate-500 h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer`}>
                            <div className='relative'>
                                <img src="" alt=""
                                     className='w-[38px] h-[38px] border-white border-2 p-[2px] rounded-full'/>
                                <div
                                    className='w-[10px] h-[10px] bg-green-400 rounded-full absolute right-0 bottom-0'>
                                </div>
                            </div>

                            <div className='flex justify-between items-start flex-col w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <h2>Solyman Hossen</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                    <div className='flex justify-between items-center'>
                        {sellerId && <div className={'flex justify-start items-center gap-3'}>
                            <div className='relative'>
                                <img src="" alt=""
                                     className='w-[42px] h-[38px] border-white border-2 p-[2px] rounded-full'/>
                                <div
                                    className='w-[10px] h-[10px] bg-green-400 rounded-full absolute right-0 bottom-0'>
                                </div>
                            </div>
                        </div>}
                        <div onClick={() => setShow(!show)}
                             className='w-[35px] flex md:hidden h-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-600 justify-center cursor-pointer items-center text-white'>
                            <span><FaList/></span>
                        </div>
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

export default ChatSeller;