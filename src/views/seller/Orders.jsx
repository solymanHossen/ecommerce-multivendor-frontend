import React, {useState} from 'react';
import Search from "../components/Search";
import {Link} from "react-router-dom";
import {FaEdit, FaEye} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import Pagination from "../Pagination";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [status, setStatus]           = useState(true)
    const [perPage, setPerPage]         = useState(5)
    return (<div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-slate-800 rounded-md'>
            <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left text-white'>
                    <thead className='text-sm text-white uppercase border-b border-slate-800'>
                    <tr>
                        <th scope='col' className='py-3 px-4'>Order id</th>
                        <th scope='col' className='py-3 px-4'>Price</th>
                        <th scope='col' className='py-3 px-4'>Payment Status</th>
                        <th scope='col' className='py-3 px-4'>Order Status</th>
                        <th scope='col' className='py-3 px-4'>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>

                                <Link>
                                    <div
                                        className='bg-indigo-900 rounded-lg h-[40px] w-[40px] flex items-center justify-center'>
                                        <FaEye/>
                                    </div>
                                </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-end">
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

export default Orders;