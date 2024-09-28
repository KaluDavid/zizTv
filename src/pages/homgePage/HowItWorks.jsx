import React, { useState } from 'react'
import './WeOffer/WeOffer.css';
import { WorkArray } from './HowItWorks/WorkArray';
import { WorksList } from './HowItWorks/WorksList';

export function HowItWorks() {
    const [next, setNext] = useState(WorkArray[0])
    const [open, setOpen] = useState(null)
    return (
        <div className=" flex justify-between w-full items-start  py-[60px] px-[3rem] ">

            <div className='flex items-center'>
                <fieldset className='rounded-2xl h-full w-[80%] py-[40px] px-[50px] works'>
                    <img src={next.img} alt={next.title} className='rounded-2xl w-auto h-full object-cover' />
                </fieldset>
            </div>

            {/* the content stays here */}
            <div className="flex flex-col items-start gap-4 text-left w-[40%]">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        How it works
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[20px]'></p>
                </div>
                <ul className='flex flex-col items-start gap-4 *:cursor-pointer'>
                    {
                        WorkArray.map((item) => (
                            <WorksList key={item.id} item={item} setNext={setNext} id={item.id} open={open} setOpen={setOpen} />
                        ))
                    }
                </ul>

            </div>

        </div >

    )

}
