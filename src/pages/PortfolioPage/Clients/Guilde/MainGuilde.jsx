import React from 'react'

export function MainGuilde({ children }) {
    return (
        <div className='w-full [&_ul]:flex [&_ul]:items-center [&_ul]:justify-center [&_ul]:w-full [&_ul]:text-center flex flex-col items-center gap-5'>
            {children}
        </div>

    )
}
