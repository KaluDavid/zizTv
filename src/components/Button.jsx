import React from 'react'


export function Button({ children }) {
    return (
        <button className='bg-orange py-3 px-5 text-center text-white rounded float-right m-8'>
            {children}
        </button>
    )
}
