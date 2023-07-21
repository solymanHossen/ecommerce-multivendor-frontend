import React from 'react';
import {BsCurrencyDollar, BsPalette} from "react-icons/bs";
import {BiSolidUserAccount} from "react-icons/bi";

const PaymentsSeller = () => {
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                    <div className='flex flex-col justify-start items-start text-white'>
                        <h2 className='font-bold text-3xl'>345443</h2>
                        <span className='text-md font-medium'>Total saled</span>
                    </div>
                    <div
                        className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                        <BsCurrencyDollar className='text-blue-300'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                    <div className='flex flex-col justify-start items-start text-white'>
                        <h2 className='font-bold text-3xl'>345443</h2>
                        <span className='text-md font-medium'>Product</span>
                    </div>
                    <div
                        className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                        <BsPalette className='text-blue-300'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                    <div className='flex flex-col justify-start items-start text-white'>
                        <h2 className='font-bold text-3xl'>2</h2>
                        <span className='text-md font-medium'>Sellers</span>
                    </div>
                    <div
                        className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                        <BiSolidUserAccount className='text-blue-300'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                    <div className='flex flex-col justify-start items-start text-white'>
                        <h2 className='font-bold text-3xl'>2</h2>
                        <span className='text-md font-medium'>Order</span>
                    </div>
                    <div
                        className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                        <BsCurrencyDollar className='text-blue-300'/>
                    </div>
                </div>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 mt-4  gap-5'>
               <div className="bg-gray-900 text-white rounded-md">
                   <div className="bg-gray-900 rounded-lg shadow-md p-6">
                       <h2 className="text-2xl font-semibold mb-4">Send Request</h2>
                       <div className="flex items-center gap-3">
                           <input type="number" className="px-4 py-2 rounded-lg bg-gray-700 text-white w-1/2"
                                  placeholder="Enter amount"/>
                           <button
                               className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none">Submit
                           </button>
                       </div>
                   </div>

                   <div className="mt-8">
                       <h3 className="text-xl font-semibold mb-4 px-3">Pending Request: No</h3>
                       <table className="w-full table-auto">
                           <thead>
                           <tr>
                               <th className="px-4 py-2">Amount</th>
                               <th className="px-4 py-2">Status</th>
                               <th className="px-4 py-2">Date</th>
                           </tr>
                           </thead>
                           <tbody>

                           <tr>
                               <td className="px-4 py-2">100</td>
                               <td className="px-4 py-2">Pending</td>
                               <td className="px-4 py-2">2023-07-20</td>
                           </tr>

                           </tbody>
                       </table>
                   </div>

               </div>
               <div className="bg-gray-900 text-white rounded-md">
                   <div className="mt-8">
                       <h3 className="text-xl font-semibold mb-4 px-3">Success widrow: No</h3>
                       <table className="w-full table-auto">
                           <thead>
                           <tr>
                               <th className="px-4 py-2">Amount</th>
                               <th className="px-4 py-2">Status</th>
                               <th className="px-4 py-2">Date</th>
                           </tr>
                           </thead>
                           <tbody>

                           <tr>
                               <td className="px-4 py-2">100</td>
                               <td className="px-4 py-2">Pending</td>
                               <td className="px-4 py-2">2023-07-20</td>
                           </tr>

                           </tbody>
                       </table>
                   </div>

               </div>
           </div>

        </div>
    );
};

export default PaymentsSeller;