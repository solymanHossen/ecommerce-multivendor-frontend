import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaEdit, FaEye} from "react-icons/fa";
import {AiFillDelete, AiOutlineArrowDown, AiOutlineArrowLeft} from "react-icons/ai";
import Pagination from "../Pagination";
import {BsImage} from "react-icons/bs";

const Sellers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [status, setStatus]           = useState(true)
    const [perPage, setPerPage]         = useState(5)
    const [show,setShow]=useState(false)
    return (<div className='px-2 lg:px-7 pt-5'>

        <div className='flex flex-wrap w-full'>
            <div className='w-full '>
                <div className='w-full p-4 bg-slate-800 rounded-md'>
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
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-white'>
                            <thead className='text-sm text-white uppercase border-b border-slate-800'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Img</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Shop Name</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Devision</th>
                                <th scope='col' className='py-3 px-4'>District</th>
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
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>
                                 <Link ><FaEye/></Link>
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
            </div>

        </div>
    </div>);
};

export default Sellers;