import React from 'react';
import {Link} from "react-router-dom";
import {FaEye} from "react-icons/fa";

const PaymentRequest = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='bg-sky-700 p-3 rounded-md'>
                <h1 className='text-xl text-white mb-3'>Withdrawal Request</h1>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left text-white'>
                    <thead className='text-sm text-white uppercase border-b border-slate-800'>
                    <tr>
                        <th scope='col' className='py-3 px-4'>No</th>
                        <th scope='col' className='py-3 px-4'>Amount</th>
                        <th scope='col' className='py-3 px-4'>Status</th>
                        <th scope='col' className='py-3 px-4'>Date</th>
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
                            <button className='bg-amber-900 rounded-md text-white px-3 py-2'>Confirm</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default PaymentRequest;