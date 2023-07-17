import React from 'react';
import {BsChevronBarLeft, BsChevronBarRight} from "react-icons/bs";

const Pagination = ({pageNumbar, setPageNumber, totalItem, perPage, showItem}) => {
    let totalPage = Math.ceil(totalItem / perPage)
    let startPage = pageNumbar;
    let dif       = totalPage - pageNumbar;
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage
    if (startPage <= 0) {
        startPage = 1
    }
    const createBtn = () => {
        const btns = []
        for (let i = startPage; i < endPage; i++) {
            btns.push(<li onClick={() => setPageNumber(i)}
                          className={` ${pageNumbar === i ? 'bg-indigo-500 text-white' : ' bg-slate-800 hover:bg-indigo-400 shadow-lg hover:text-white text-white'} w-[33px] h-[33px] rounded-full flex items-center justify-center cursor-pointer`}>
                {i}
            </li>)
        }
        return btns
    }
    return (<ul className='flex gap-3'>
            {pageNumbar > 1 &&
                <li
                    onClick={()=>setPageNumber(pageNumbar - 1 )}
                    className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-sky-700 text-white cursor-pointer'>
                    <BsChevronBarLeft/>
                </li>}
            {createBtn()}
        {pageNumbar < totalPage &&
            <li
                onClick={()=>setPageNumber(pageNumbar + 1 )}
                className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-sky-700 text-white cursor-pointer'>
                <BsChevronBarRight/>
            </li>}
        </ul>);
};

export default Pagination;