import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'


export const SidebarData=[
    {
        title:'Canteens',
        path:'/canteens',
        icon:<FaIcons.FaHamburger/>,
        cName:'nav-text'
    },
    {
        title:'My Orders',
        path:'/myorders',
        icon:<GiIcons.GiShoppingBag/>,
        cName:'nav-text'
    },
    {
        title:'My Account',
        path:'/myaccount',
        icon:<RiIcons.RiAccountCircleFill/>,
        cName:'nav-text'
    },
    {
        title:'Privacy & Safety',
        path:'/privacy&safety',
        icon:<AiIcons.AiFillSafetyCertificate/>,
        cName:'nav-text'
    },
    {
        title:'Help',
        path:'/help',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    }
]