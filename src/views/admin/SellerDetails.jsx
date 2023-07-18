import React from 'react';

const SellerDetails = () => {
    return (< div className='px-2 lg:px-7 pt-5'>
            <div className='flex flex-wrap w-full bg-sky-700 rounded-lg justify-between p-3'>
         <div>Img</div>
                <div>
                    <h1>Basic info</h1>
                    <div className="p-3 rounded-lg bg-black text-white">
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                    </div>
                </div>
                <div>
                    <h1>Address</h1>
                    <div className="p-3 rounded-lg bg-black text-white">
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                        <div>name:any</div>
                    </div>
                </div>

            </div>
        <div className="flex items-center justify-between gap-3 bg-indigo-500 rounded-lg text-white p-4 mt-3">
            <div>Select</div>
            <button className='p-3 bg-sky-950 rounded-lg'>submit</button>
        </div>
        </div>);
};

export default SellerDetails;