import React from 'react'
import header from '../assets/header.png'
import logo from '../assets/logo.png'
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="">
                <div className="mt-4">
                    <img src={header} alt="" srcset="" />
                </div>
                <div className="top-header-wrapper">
                    <Link to="/"><img src={logo} alt="" srcset="" /></Link>
                    <ul>
                        <li><Link to="/location"><i class="bi bi-geo-alt-fill"></i> Store Locator</Link></li>
                        <li><Link to="/login"><i class="bi bi-person-fill"></i> Sign in/Register</Link></li>
                    </ul>
                </div>
            </div>
            <NavigationBar />
        </>
    )
}

export default Header
