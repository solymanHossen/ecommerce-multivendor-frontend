import {lazy} from "react";
import SellerDashboard from "../../views/seller/SellerDashboard";
import AddProduct from "../../views/seller/AddProduct";
import ProductAll from "../../views/seller/ProductAll";
import DiscountProducts from "../../views/seller/DiscountProducts";
import Orders from "../../views/seller/Orders";
import PaymentsSeller from "../../views/seller/PaymentsSeller";
import SellerToCustomer from "../../views/seller/SellerToCustomer";
import SellerToAdmin from "../../views/seller/SellerToAdmin";
import Profile from "../../views/seller/Profile";

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
        role:'seller',
        status:'active'
    } ,{
        path:'/seller/dashboard/add-product',
        element:<AddProduct/>,
        role:'seller',
        status:'active'
    },
    {
        path:'/seller/dashboard/all-product',
        element:<ProductAll/>,
        role:'seller',
        status:'active'
    }, {
        path:'/seller/dashboard/discount-product',
        element:<DiscountProducts/>,
        role:'seller',
        status:'active'
    }, {
        path:'/seller/dashboard/orders',
        element:<Orders/>,
        role:'seller',
        ability:['active','deactive']
    },{
        path:'/seller/dashboard/payments',
        element:<PaymentsSeller/>,
        role:'seller',
        status:'active'
    },{
        path:'/seller/dashboard/chat-support',
        element:<SellerToAdmin/>,
        role:'seller',
        ability:['active','deactive','pending']
    },{
        path:'/seller/dashboard/chat-customer',
        element:<SellerToCustomer/>,
        role:'seller',
        ability:['active','deactive','pending']
    },{
        path:'/seller/dashboard/chat-customer/:customerId',
        element:<SellerToCustomer/>,
        role:'seller',
        ability:['active','deactive','pending']
    },
    {
        path:'/seller/dashboard/profile',
        element:<Profile/>,
        role:'seller',
        status:'active'
    },
]