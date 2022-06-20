
import React, { FC } from 'react'
import{Link} from 'react-router-dom'

import '../style/navbar.css'

const Navigation: FC = () => {
  return (
    <div className='sum'>
        
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/dashboard' className='dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/notifications' className='notifications'>
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link to='/settings' className='settings'>
                        Settings
                    </Link>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Navigation

/*

import { FC } from "react";
import { NavLink } from 'react-router-dom';


import '../style/navbar.css';



const Rides: FC = () => {
        
    return ( 
        <div className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-block">
                    <NavLink className="nav-tab" activeClassName="nav-tab-active" to="/dashboard">Dashboard</NavLink>
                    <NavLink className="nav-tab" activeClassName="nav-tab-active" to="/notifications">Settings</NavLink>
                </div>
                <div className="nav-block">
                    <NavLink className="nav-tab right-tab" activeClassName="nav-tab-active" to="/settings">Notifications</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Rides;*/
