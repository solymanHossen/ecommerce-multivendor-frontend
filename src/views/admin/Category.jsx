import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {AiFillDelete, AiOutlineArrowDown, AiOutlineArrowLeft} from "react-icons/ai";
import Pagination from "../Pagination";
import {BsImage} from "react-icons/bs";

const Category = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [status, setStatus]           = useState(true)
    const [perPage, setPerPage]         = useState(5)
    const [show,setShow]=useState(false)
    return (<div className='px-2 lg:px-7 pt-5'>
        <div className='flex lg:hidden justify-between items-center mb-5 px-4 bg-slate-700 rounded-md py-2'>
       <h1 className='text-blue-300 font-semibold text-center'>Categorys</h1>
            <button onClick={()=>setShow(!show)}  className='bg-indigo-500 hover:bg-indigo-400 px-4 py-3 text-xl rounded-md'>Add </button>

        </div>
        <div className='flex flex-wrap w-full'>
            <div className='w-full lg:w-7/12'>
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
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
                                <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>3</td>
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
            </div>
            <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0':'-right-[340px]'} z-[9999] top-0 transition-all duration-500`}>
                <div className='w-full pl-5'>
                <div className=' bg-slate-800  h-screen lg:h-auto px-3 py-2 lg:rounded-md'>
                    <div onClick={()=>setShow(!show)} className='block lg:hidden flex items-center justify-center bg-slate-800 h-[50px] w-[50px] bg-sky-300 rounded-md'>
                    <AiOutlineArrowLeft  />
                    </div>
                      <h1 className='text-white font-semibold text-xl w-full text-center'>Add Category</h1>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="name" className='text-white'>Category name</label>
                        <input type="text" className='px-4 py-2 focus:border-indigo-400 outline-none bg-slate-800 border border-slate-700 rounded-md text-white ' name={'category_name'} id='name' placeholder='category name'/>
                    </div>
                    <div>
                        <label htmlFor="img" className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500'>
                            <span><BsImage/></span>
                            <span>select Image</span>
                        </label>
                    </div>
                    <input type="file" className='hidden' name='image' id='image'/>
                    <div>
                        <button className='bg-black text-white border rounded-md w-full px-7 py-3 text-xl mt-5 hover:bg-slate-800'>
                            Add Category
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>);
};

export default Category;