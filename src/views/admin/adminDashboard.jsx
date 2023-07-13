import React from 'react';
import {BsCurrencyDollar, BsPalette} from "react-icons/bs";
import {BiSolidUserAccount, BiUser} from "react-icons/bi";
import Chart from 'react-apexcharts'
const AdminDashboard = () => {
    const state={
        series:[
            {
                name:"Orders",
                data:[23,3,2,34,23,23,25,45,6,7,34,64]
            },
            {
                name:"Revenue",
                data:[23,343,2,364,23,23,265,45,6,7,34,64]
            },   {
                name:"Sellers",
                data:[23,34,2,64,23,23,25,45,6,7,34,64]
            },
        ],
        options:{
            color:['#181ee8','#181ee8'],
            plotOptions:{
                radius:20
            },
            chart:{
                background:'transparent',
                foreColor:'#d0d2d6'

            },
            dataLabels:{
                enabled:false
            },
            stroke:{
                show:true,
                curve:['smooth','straight','stepline'],
                lineCap:'butt',
                colors:'#f0f0f0',
                width:5,
                dashArray:0
            },
            xaxis:{
                categories:['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Des']
            },
            legend:{
                position:'top'
            },
            responsive:[
                {
                    breakpoint:575,
                    xaxis:{
                        categories:['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Des']
                    },
                    options: {
                        plotOptions: {
                            bar:{
                                horizontal:true
                            }
                        }
                    },
                    chart: {
                        height:'550px'
                    }
                }
            ]
        }
    }
    return (
        <div className='px-2 md:px-7 py-5'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
            <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h2 className='font-bold text-3xl'>345443</h2>
                    <span className='text-md font-medium'>Total saled</span>
                </div>
                <div className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                <BsCurrencyDollar className='text-blue-300'/>
                </div>
            </div>
            <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h2 className='font-bold text-3xl'>345443</h2>
                    <span className='text-md font-medium'>Product</span>
                </div>
                <div className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                <BsPalette className='text-blue-300'/>
                </div>
            </div>
            <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h2 className='font-bold text-3xl'>2</h2>
                    <span className='text-md font-medium'>Sellers</span>
                </div>
                <div className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                <BiSolidUserAccount className='text-blue-300'/>
                </div>
            </div>
            <div className='flex justify-between items-center p-5 bg-sky-600 rounded-lg gap-3'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h2 className='font-bold text-3xl'>2</h2>
                    <span className='text-md font-medium'>Order</span>
                </div>
                <div className='h-[60px] w-[60px] rounded-full bg-slate-800 flex items-center justify-center text-xl'>
                <BsCurrencyDollar className='text-blue-300'/>
                </div>
            </div>
        </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className="w-full lg:w-7/12 lg:pr-3">
                    <div className="w-full bg-slate-700 p-4 rounded-md">
                     <Chart options={state.options} series={state.series} type='bar' height={350}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;