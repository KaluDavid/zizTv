import React, { Children } from 'react'
import { GrNext } from "react-icons/gr";
import { Button } from '../../components/Button';

export function ZizForm({ children }) {
    return (
        <>
            <form className='w-1/2 '>
                <div className='h-screen bg-white font-poppins p-8 flex flex-col gap-12'>
                    <div className='*:text-center'>
                        <h2 className='text-[40px] font-bold text-gray pb-3 font-montserrat'>Let's get started</h2>
                        <p className='text-darkBlue text-lg font-normal'><span className='text-orange underline'>Sign in</span> if you already registered</p>
                    </div>
                    {children}
                </div>
                <div className='pt-[12%]'>
                    <Button>
                        <GrNext />
                    </Button>
                </div>
            </ form>
        </>
    )
}
