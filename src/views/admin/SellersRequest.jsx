import React, {useState} from 'react';
import {BsArrowBarDown, BsEye} from "react-icons/bs";
import {Link} from "react-router-dom";
import Pagination from "../Pagination";
import {FiEye} from "react-icons/fi";

const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage]         = useState(5)
    const [status,setStatus]=useState(true)

    return (<div className='px-2 lg:px-7 pt-5'>

        <div className='w-full p-4 bg-slate-800 rounded-lg'>
            <h1 className='mb-4 text-white text-lg font-semibold'>Seller requst</h1>
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
                        <div className='py-3 w-[25%]'>No</div>
                        <div className='py-3 w-[13%]'>Image</div>
                        <div className='py-3 w-[18%]'>Name</div>
                        <div className='py-3 w-[18%]'>Email</div>
                        <div className='py-3 w-[18%]'>Payment status</div>
                        <div className='py-3 w-[18%]'>Status</div>
                        <div className='py-3 w-[8%] cursor-pointer'>Action</div>
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
                    <div className='py-3 w-[8%] cursor-pointer'  ><BsEye/></div>
                </div>
            </div>

            <div className="mt-3 flex justify-end">
                <Pagination
                    pageNumbar={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem={50}
                    perPage={perPage}
                    showItem={3}
                />
            </div>
        </div>
    </div>);
};

export default SellerRequest;