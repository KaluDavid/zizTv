import React from 'react'
import { Link } from 'react-router-dom'

export function Button({ children, onClick, linkTo }) {
    return (
        <Link to={linkTo}>
            <button className='bg-orange btn' onClick={onClick}>
                {children}
            </button>
        </Link>

    )
}
