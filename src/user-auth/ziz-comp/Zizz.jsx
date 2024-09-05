import React from 'react'
import { Logo } from '../../components/Logo'
import ziz from "./bg-img.jfif"
export function Zizz() {
    return (
        <>
            <div className=' h-auto w-1/2 overflow-hidden'>
                <img src={ziz} alt="ziz-bg img " className='w-auto h-auto object-contain filter brightness-[50%]' />
                <div className='mt-[-125%] filter brightness-[100%] justify-center flex flex-col gap-[27vh] p-10'>
                    <Logo />
                    <p className='font-montserrat text-white font-bold text-[40px] leading-[56px] text-center justify-center' >
                        Get ready to Transform <br /> your Ideas into Captivating Videos
                    </p>
                </div>
            </div>
        </>
    )
}
