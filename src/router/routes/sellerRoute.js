import {lazy} from "react";
import SellerDashboard from "../../views/seller/SellerDashboard";
import AddProduct from "../../views/seller/AddProduct";
import ProductAll from "../../views/seller/ProductAll";
import DiscountProducts from "../../views/seller/DiscountProducts";

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
    }, {
        path:'seller/dashboard/discount-product',
        element:<DiscountProducts/>,
        ability:['seller']
    },
]