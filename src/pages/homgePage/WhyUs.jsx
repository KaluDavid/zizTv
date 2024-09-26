import React from 'react'
import { NavLink } from 'react-router-dom'
import { Why1 } from './WhyUs/Why1'
import { Why2 } from './WhyUs/Why2'
import { Why3 } from './WhyUs/Why3'
import { Why4 } from './WhyUs/Why4'
import './WhyUs/Why.css'
export function WhyUs() {
    return (
        <div className="flex flex-col items-center py-[60px] px-[40px] gap-14 ">

            <div className="flex flex-col items-center gap-8">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        Why choose Us?
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-34px] mt-[15px]'></p>
                </div>
                <div>
                    <ul className='flex items-center gap-[16px]'>
                        <li>Easy Process</li>
                        <li>High-Quality Output</li>
                        <li>Comprehensive Video Editing</li>
                        <li className={({ isActive }) => isActive ? "active" : "no-underline"}>Client Support</li>
                    </ul>
                </div>
            </div>
            {/* <Why1 />
            <Why2 />
            <Why3 /> */}
            <Why4 />
        </div >
    )
}
