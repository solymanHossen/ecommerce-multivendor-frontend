import React from 'react';

const OrderDetails = () => {
    return (<div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-slate-800 rounded-lg'>
                <div className='flex justify-between items-center p-4'>
                    <h1 className='text-white'>Order Details</h1>
                    <div className=''>
                        <select
                                className='px-4 py-2 focus:accent-indigo-600 outline-none bg-sky-800 border border-slate-800 text-white rounded-lg'>
                            <option value="5">Pending</option>
                            <option value="5">Processing</option>
                            <option value="5">placed</option>
                        </select>
                    </div>

                </div>
                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-white'>
                        <h2>#83485</h2>
                        <span># jan</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-[32%]'>
                            <div className='pr-3 text-white text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to: Modon Kumar</h2>
                                    <p><span className='text-sm'>Dhaka</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2 className='pb-2 font-semibold'>Payment Status: Modon Kumar</h2>
                                    <p><span className='text-sm'>Dhaka</span></p>
                                </div>
                                <span>Price:$554</span>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='text-white'>
                                        <div className='flex gap-4 text-md '>
                                            <img src="" alt="" className='h-[45px] w-[45px]'/>
                                            <div>
                                                <h2>logn tshirt</h2>
                                                <p>
                                                    <span>Brand:</span>
                                                    <span>Easy</span>
                                                    <span>Quantity:</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[68%]'>
                            <div className='pr-3 text-white text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to: Modon Kumar</h2>
                                    <p><span className='text-sm'>Dhaka</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2 className='pb-2 font-semibold'>Payment Status: Modon Kumar</h2>
                                    <p><span className='text-sm'>Dhaka</span></p>
                                </div>
                                <span>Price:$554</span>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='text-white'>
                                        <div className='flex gap-4 text-md '>
                                            <img src="" alt="" className='h-[45px] w-[45px]'/>
                                            <div>
                                                <h2>logn tshirt</h2>
                                                <p>
                                                    <span>Brand:</span>
                                                    <span>Easy</span>
                                                    <span>Quantity:</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default OrderDetails;