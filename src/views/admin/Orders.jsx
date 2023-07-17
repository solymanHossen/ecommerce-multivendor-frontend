import React, {useState} from 'react';
import {BsArrowBarDown} from "react-icons/bs";
import {Link} from "react-router-dom";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage]         = useState(5)
    const [status,setStatus]=useState(true)

    return (<div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-slate-800 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setPerPage(parseInt(e.target.value))}
                            className='px-4 py-2 focus:accent-indigo-600 outline-none bg-sky-800 border border-slate-800 text-white rounded-lg'>
                        <option value="5">5</option>
                        <option value="5">2</option>
                        <option value="5">6</option>
                    </select>
                    <input
                        className='px-4 py-2 focus:accent-indigo-600 outline-none bg-sky-800 border border-slate-800 text-white rounded-lg'
                        type="text" placeholder='search'/>
                </div>
            <div className='relative mt-5 overflow-x-auto'>
                <div className='w-full text-sm text-white uppercase border-b border-slate-700'>
                    <div className='flex items-start justify-between'>
                     <div className='py-3 w-[25%]'>Order Id</div>
                     <div className='py-3 w-[13%]'>Price</div>
                     <div className='py-3 w-[18%]'>Payment Status</div>
                     <div className='py-3 w-[18%]'>Order Status</div>
                     <div className='py-3 w-[18%]'>Action</div>
                     <div className='py-3 w-[8%] cursor-pointer'><BsArrowBarDown/></div>
                    </div>
                </div>
            </div>
                <div className="text-white">
                    <div className='flex justify-between items-start border-b border-slate-700'>
                        <div className='py-4 w-[25%] font-medium whitespace-nowrap'>
                            5545
                        </div>
                        <div className='py-3 w-[13%]'>77</div>
                        <div className='py-3 w-[18%]'>55</div>
                        <div className='py-3 w-[18%]'>55</div>
                        <div className='py-3 w-[18%]'> <Link >View</Link></div>
                        <div className='py-3 w-[8%]'  onClick={()=>setStatus(!status)} ><BsArrowBarDown/></div>
                    </div>
                </div>
                <div className={status ? 'block border-b border-slate-700 bg-slate-600 text-white':'hidden'}>
                    <div className='flex justify-start items-start border-b border-slate-700 '>
                        <div className='py-4 w-[25%] font-medium whitespace-nowrap px-2'>
                            5545
                        </div>
                        <div className='py-3 w-[13%] '>77</div>
                        <div className='py-3 w-[18%]'>55</div>
                        <div className='py-3 w-[18%]'>55</div>
                        <div className='py-3 w-[18%]'> <Link >View</Link></div>
                    </div>
                </div>

            </div>
        </div>);
};

export default Orders;