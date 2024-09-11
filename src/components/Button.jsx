import React from 'react'


export function Button({ children, onClick }) {
    return (
        <button className='bg-orange btn' onClick={onClick}>
            {children}
        </button>
    )
}
