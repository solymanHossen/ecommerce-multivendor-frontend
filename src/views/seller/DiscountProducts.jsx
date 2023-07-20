import React, {useState} from 'react';
import Search from "../components/Search";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import Pagination from "../Pagination";

const DiscountProducts = () => {
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
                        <th scope='col' className='py-3 px-4'>No</th>
                        <th scope='col' className='py-3 px-4'>Img</th>
                        <th scope='col' className='py-3 px-4'>Name</th>
                        <th scope='col' className='py-3 px-4'>Category</th>
                        <th scope='col' className='py-3 px-4'>Brand</th>
                        <th scope='col' className='py-3 px-4'>Price</th>
                        <th scope='col' className='py-3 px-4'>Discount</th>
                        <th scope='col' className='py-3 px-4'>Stock</th>
                        <th scope='col' className='py-3 px-4'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>  <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>  <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>
                            <div className='flex items-center gap-2'>
                                <Link>
                                    <div
                                        className='bg-indigo-900 rounded-lg h-[40px] w-[40px] flex items-center justify-center'>
                                        <FaEdit/>
                                    </div>
                                </Link>
                                <Link>
                                    <div
                                        className='bg-red-600 rounded-lg h-[40px] w-[40px] flex items-center justify-center'>
                                        <AiFillDelete/>
                                    </div>
                                </Link>
                            </div>
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

export default DiscountProducts;