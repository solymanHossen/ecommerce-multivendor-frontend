import {lazy} from "react";
import SellerDashboard from "../../views/seller/SellerDashboard";
import AddProduct from "../../views/seller/AddProduct";
import ProductAll from "../../views/seller/ProductAll";

const Home =lazy(()=>import("../../views/pages/home"))

export const sellerRoutes=[
    {
        path:'/',
        element:<Home/>,
        ability:['admin','seller']
    },
    {
        path:'/seller/dashboard',
        element:<SellerDashboard/>,
        ability:['seller']
    } ,{
        path:'/seller/dashboard/add-product',
        element:<AddProduct/>,
        ability:['seller']
    },
    {
        path:'/seller/dashboard/all-product',
        element:<ProductAll/>,
        ability:['seller']
    }
]