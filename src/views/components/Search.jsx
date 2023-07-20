import React from 'react';

const Search = ({setPerPage,searchValue,setSearchValue}) => {
    return (
        <div className='flex justify-between items-center'>
            <select onChange={(e) => setPerPage(parseInt(e.target.value))}
                    className='px-4 py-2 focus:accent-indigo-600 outline-none bg-sky-800 border border-slate-800 text-white rounded-lg'>
                <option value="5">5</option>
                <option value="5">2</option>
                <option value="5">6</option>
            </select>
            <input
                onChange={(e)=>setSearchValue(e.target.value)}
                value={searchValue}
                className='px-4 py-2 focus:accent-indigo-600 outline-none bg-sky-800 border border-slate-800 text-white rounded-lg'
                type="text" placeholder='search'/>
        </div>
    );
};

export default Search;