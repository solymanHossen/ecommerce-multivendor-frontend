import React from 'react';
import {BsImage} from "react-icons/bs";
import {FadeLoader} from "react-spinners";

const Profile = () => {
    const image=false
    const loader=true
    return (
        <div>
            <div className="px-2 lg:px-7 py-5">
            <div className=" mx-auto ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8">


                    <div className="bg-gray-600 rounded-lg p-4 shadow">

                        <div className="pb-4">
                            {
                                image ?
                                    <label htmlFor="img" className='h-[210px] w-[300px] cursor-pointer overflow-hidden relative p-3'>
                                        <img src="" alt=""/>
                                        <div>ddd</div>
                                    </label>: <label className='m-auto flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed hover:border-indigo-800 border-blue-50 relative ' htmlFor='img' >
                                    <span><BsImage/></span>
                                    <span>Select Image</span>
                                        {
                                            loader && <div className='bg-slate-800 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                                            <span><FadeLoader/></span>
                                            </div>
                                        }

                                        <input type="file" className='hidden' id='img'/>

                                </label>
                            }
                        </div>


                        <div className="bg-blue-100 p-4 rounded-lg mb-4">
                            <p className="font-bold text-xl mb-2">Name</p>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6 text-blue-500 inline-block mb-1 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h4l1-2h4l1 2h4a2 2 0 012 2v12zM10 9h4v2h-4V9z"/>
                            </svg>
                            <span className="text-gray-600">Edit</span>
                        </div>


                        <div className="bg-green-100 p-4 rounded-lg">
                            <p className="font-bold text-xl mb-2">Email</p>
                            <p className="text-gray-600">Role</p>
                            <p className="text-gray-600">Status</p>
                            <p className="text-gray-600">Payment Account</p>
                        </div>
                    </div>


                    <div className="bg-gray-200 rounded-lg p-4 shadow">

                        <p className="font-bold text-xl mb-4">Change Password</p>


                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="oldPassword" className="block text-gray-700 font-bold mb-2">Old
                                Password</label>
                            <input type="password" id="oldPassword" name="oldPassword"
                                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700 font-bold mb-2">New
                                Password</label>
                            <input type="password" id="newPassword" name="newPassword"
                                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                        </div>


                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Profile;