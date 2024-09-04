import React from 'react'
import { Logo } from '../../components/Logo'
import ziz from "./bg-img.jfif"
export function Zizz() {
    return (
        <>
            <div className=' h-auto w-1/2'>
                <img src={ziz} alt="ziz-bg img " className='w-full h-auto object-contain filter brightness-[50%]' />
                <div className='mt-[-127%] filter brightness-[100%] flex flex-col gap-52 p-8'>
                    <Logo />
                    <p className='font-montserrat text-white font-bold text-[40px] leading-[56px] text-center' >
                        Get ready to Transform <br /> your Ideas into Captivating Videos
                    </p>
                </div>
            </div>
        </>
    )
}
