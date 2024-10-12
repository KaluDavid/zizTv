import React from 'react'
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";

export default function Recent({ children, heading }) {
    return (
        <div className="flex flex-col items-center py-[60px] px-[3rem] gap-8 w-full ">

            <div className="flex items-center justify-between w-full">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        {heading}
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-34px] mt-[15px]'></p>
                </div>
                <div className='flex items-center gap-[16px] *:text-[35px] *:text-[#828282] *:font-extralight'>
                    <button><SlArrowLeftCircle /></button>
                    <button> <SlArrowRightCircle /></button>
                </div>
            </div>
            <div className='flex items-center gap-11'>
                {children}
            </div>
        </div >)
}
