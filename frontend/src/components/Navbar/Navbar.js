import React, { useState } from 'react'
import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    // not showing initially
    const showSidebar= ()=> setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <IconContext.Provider value={{color:'#2EC1AC'}}>
                    <Link to="#" className='menu-bars'>
                        <HiIcons.HiOutlineMenuAlt1 onClick={showSidebar}/>
                    </Link>
                    <Link to="/cart" className='cart-menubar'>
                        <FaIcons.FaShoppingCart/>
                    </Link>
                </IconContext.Provider>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <HiIcons.HiOutlineMenuAlt1/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
