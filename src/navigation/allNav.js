import {AiFillDashboard, AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import {BsCurrencyDollar} from "react-icons/bs";

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
    },
]