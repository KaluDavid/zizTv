import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReusableWhy } from './WhyUs/ReusableWhy'

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
                        <li><NavLink className={({ isActive }) => isActive ? "active text-orange" : "no-underline"}>Easy Process</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active text-orange" : "no-underline"}>High-Quality Output</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active text-orange" : "no-underline"}>Comprehensive Video Editing</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active text-orange" : "no-underline"}>Client Support</NavLink></li>
                    </ul>
                </div>
            </div>

            <ReusableWhy />

        </div>
    )
}
