import {lazy} from "react";
import PaymentRequest from "../../views/admin/PaymentRequest";
import DeactiveSeller from "../../views/admin/DeactiveSeller";
import SellerRequest from "../../views/admin/SellersRequest";
import SellerDetails from "../../views/admin/SellerDetails";
import ChatSeller from "../../views/admin/ChatSeller";
import OrderDetails from "../../views/admin/OrderDetails";
const AdminDashboard =lazy(()=>import("../../views/admin/adminDashboard"))
const Orders =lazy(()=>import("../../views/admin/Orders"))
const Category =lazy(()=>import("../../views/admin/Category"))
const Sellers =lazy(()=>import("../../views/admin/Sellers"))

export const adminRoutes=[
    {
        path:'admin/dashboard',
        element:<AdminDashboard/>,
        role:'admin'
    },   {
        path:'admin/dashboard/orders',
        element:<Orders/>,
        role:'admin'
    },
    {
        path:'admin/dashboard/category',
        element:<Category/>,
        role:'admin'
    },  {
        path:'admin/dashboard/sellers',
        element:<Sellers/>,
        role:'admin'
    }, {
        path:'admin/dashboard/payment-request',
        element:<PaymentRequest/>,
        role:'admin'
    },
    {
        path:'admin/dashboard/deactive-sellers',
        element:<DeactiveSeller/>,
        role:'admin'
    },  {
        path:'admin/dashboard/sellers-request',
        element:<SellerRequest/>,
        role:'admin'
    }, {
        path:'admin/dashboard/chat-seller',
        element:<ChatSeller/>,
        role:'admin'
    },
    {
        path:'admin/dashboard/seller/details/:id',
        element:<SellerDetails/>,
        role:'admin'
    },  {
        path:'admin/dashboard/order/details/:id',
        element:<OrderDetails/>,
        role:'admin'
    },
]