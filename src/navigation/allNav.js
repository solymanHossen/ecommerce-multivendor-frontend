import {AiFillDashboard, AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import {FiUser, FiUsers} from "react-icons/fi";
import {BsChat, BsCurrencyDollar, BsFillGearFill} from "react-icons/bs";

export  const  allNav=[
    {
        id:1,
        title:'Dashboard',
        icon:<AiFillDashboard/>,
        role:'admin',
        path:'/admin/dashboard'
    },    {
        id:2,
        title:'Orders',
        icon:<AiOutlineShoppingCart/>,
        role:'admin',
        path:'/admin/dashboard/orders'
    },  {
        id:3,
        title:'Category',
        icon:<BiCategory/>,
        role:'admin',
        path:'/admin/dashboard/category'
    },  {
        id:4,
        title:'Sellers',
        icon:<FiUser/>,
        role:'admin',
        path:'/admin/dashboard/sellers'
    },{
        id:5,
        title:'Payment request',
        icon:<BsCurrencyDollar/>,
        role:'admin',
        path:'/admin/dashboard/payment-request'
    },{
        id:6,
        title:'Deactive Sellers',
        icon:<FiUsers/>,
        role:'admin',
        path:'/admin/dashboard/deactive-sellers'
    },{
        id:7,
        title:'Sellers Request',
        icon:<BsFillGearFill/>,
        role:'admin',
        path:'/admin/dashboard/sellers-request'
    },{
        id:8,
        title:'Chat Seller',
        icon:<BsChat/>,
        role:'admin',
        path:'/admin/dashboard/chat-seller'
    },
    {
        id:9,
        title:'Dashboard',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard'
    },
    {
        id:10,
        title:'Add Product',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/add-product'
    },
    {
        id:11,
        title:'All Product',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/all-product'
    },
    {
        id:12,
        title:'Discount Product',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/discount-product'
    },   {
        id:13,
        title:'Orders',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/orders'
    },  {
        id:14,
        title:'Payments',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/payments'
    }, {
        id:15,
        title:'Chat Customer',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/chat-customer'
    }, {
        id:16,
        title:'Chat Support',
        icon:<AiFillDashboard/>,
        role:'seller',
        path:'/seller/dashboard/chat-support'
    },
]