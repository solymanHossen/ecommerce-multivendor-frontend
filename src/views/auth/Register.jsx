
import React, {useState} from 'react';

import {FaFacebook, FaGithub, FaGoogle, FaTwitter} from 'react-icons/fa';


const Register = () => {
    const [state,setState]=useState({
        name:'',
        email:'',
        password:''
    })
    const  inputHandle=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const  submit=(e)=>{
        e.preventDefault();
        // console.log(state)
    }

    return (
        <div className="min-w-screen min-h-screen bg-purple-950 flex justify-center items-center">
        <div className="w-[400px] text-gray-200 p-2">
         <div className="bg-gray-800 p-4 rounded-md">
             <h2 className="text-xl mb-3"> Welcome to e-commerce</h2>
             <p>Register</p>
             <form onSubmit={submit}>
                 <div className="flex flex-col w-full gap-1 mb-3">
                     <label htmlFor="name">Name</label>
                     <input onChange={inputHandle} value={state.name} name='name' type="text" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden" placeholder='Name'></input>
                 </div>
                 <div className="flex flex-col w-full gap-1 mb-3">
                     <label htmlFor="email">Email</label>
                     <input name='email' onChange={inputHandle} value={state.email} type="email" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden" placeholder="Email"></input>
                 </div>
                 <div className="flex flex-col w-full gap-1 mb-3">
                     <label htmlFor="name">Password</label>
                     <input name='password' onChange={inputHandle} value={state.password} type="password" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden" placeholder="Password"></input>
                 </div>
                 <div className="flex flex-row w-full gap-1 mb-3">

                     <input type="checkbox" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden"></input>
                     <label htmlFor="name">I agree to privacy policy & terms</label>
                 </div>

                 <div className="flex flex-row w-full gap-1 mb-3">
                   
                     <input type="submit" className="px-3 py-2 outline-none border border-slate-600 bg-r]
                      rounded-md text-yellow-50 bg-indigo-400 focus:border-indigo-700 overflow-hidden w-full"></input>
                 </div>

             </form>
             <p>Already have an account? Signin here</p>
             <div className="text-center">or</div>
             <div className='w-full flex flex-col gap-3 '>
                 <div className='bg-purple-600 rounded-lg p-3 w-full flex items-center justify-center'>
                 <FaGoogle />
                     </div>
                 <div className='bg-purple-600 rounded-lg p-3 w-full flex items-center justify-center'>
                 <FaFacebook />
                     </div>
                 <div className='bg-purple-600 rounded-lg p-3 w-full flex items-center justify-center'>
                 <FaTwitter />
                     </div>
                 <div className='bg-purple-600 rounded-lg p-3 w-full flex items-center justify-center'>
                 <FaGithub/>
                     </div>
             </div>

         </div>

        </div>
   </div>
    );
};

export default Register;