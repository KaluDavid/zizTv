import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo2.png'
import { Button } from './Button'
import './NavBar.css'
export function NavBar({ bg }) {
    return (

        <div className='flex items-center justify-between w-auto px-[40px]'>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <ul className='flex items-center gap-[58px]'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : `no-underline ${bg}`} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "active" : "no-underline"} >Services</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : "no-underline"}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : "no-underline"}>Blog</NavLink>
                </li>
            </ul>

            <Button >Get Started</ Button>
        </div>
    )
}
