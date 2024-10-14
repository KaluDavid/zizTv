import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
export function Button({ children, onClick, linkTo }) {
    return (
        <Link to={linkTo}>
            <button className='btn' onClick={onClick}>
                {children}
            </button>
        </Link>

    )
}
