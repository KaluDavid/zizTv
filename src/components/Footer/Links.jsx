import React from 'react'

export function Links({ children, link }) {
    return (
        <div>
            <p className='border-b-orange border-b-2 pb-2 w-[90px] text-center font-semibold text-xl mb-6'>{link}</p>
            <ul className='*:text-base font-poppins font-normal *:leading-[2.5rem]'>
                {children}
            </ul>
        </div>
    )
}
