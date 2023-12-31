import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {admin_login,messageClear} from "../../store/reducrs/authReducers";
import {PropagateLoader} from "react-spinners";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
    const dispatch=useDispatch();

    const {loader,errorMessage,successMessage}=useSelector(state=>state.auth)

    const [state,setState]=useState({
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
        dispatch(admin_login(state))
    }
    const overideStyle={
        display:'flex',
        margin:'0 auto',
        height:'24px',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff'

    }
    useEffect(()=>{
    if (errorMessage){
        toast.error(errorMessage)
        dispatch(messageClear())
    }
    if (successMessage){
        toast.success(successMessage)
        dispatch(messageClear())
        navigate('/')
    }
    },[errorMessage,successMessage])

    const navigate=useNavigate()
    return (
        <div className="min-w-screen min-h-screen bg-purple-950 flex justify-center items-center">
            <div className="w-[400px] text-gray-200 p-2">
                <div className="bg-gray-800 p-4 rounded-md shadow-2xl">
                    <div className="text-center p-3 bg-black text-white mb-5 rounded-lg mt-3 text-2xl">
                        Admin Login
                    </div>
                    <form onSubmit={submit}>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle} value={state.email} name='email' type="email" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden" placeholder="Email"></input>
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Password</label>
                            <input onChange={inputHandle} value={state.password} name='password' type="password" className="px-3 py-2 outline-none border border-slate-600 bg-transparent rounded-md text-yellow-50 focus:border-indigo-700 overflow-hidden" placeholder="Password"></input>
                        </div>

                        <div className="flex flex-row w-full gap-1 mb-3">

                            <button disabled={loader?true :false} className=" px-3 py-2 outline-none border border-slate-600 bg-r]
                      rounded-md text-yellow-50 bg-indigo-400 focus:border-indigo-700 overflow-hidden w-full">{loader?<PropagateLoader cssOverride={overideStyle} color='#fff'/> :'Login'}</button>
                        </div>

                    </form>


                </div>

            </div>
        </div>
    );
};

export default AdminLogin;;