import React, { Children } from 'react'

export function ZizForm({ children, started, signIn }) {
    return (
        <>
            <form className='w-1/2 h-full font-poppins p-8 flex flex-col gap-10'>
                <div className='*:text-center'>
                    <h2 className='text-[40px] font-bold text-gray pb-3 font-montserrat'>{started}</h2>
                    <p className='text-darkBlue text-lg font-normal'><span className='text-orange underline'>{signIn}</span> if you already registered</p>
                </div>
                {children}
            </ form>
        </>
    )
}
