import React, { useState } from 'react'
import { AccordArray } from './AccordArray';
import { Accord } from './Accord';

export function Accordion() {
    const [currOpen, setCurrOpen] = useState(null)
    return (
        <div className="flex flex-col py-[60px] px-[3rem] gap-10 w-full ">

            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Questions? We’ve got you covered
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>
            <ul className='flex flex-col gap-11'>
                {AccordArray.map((item) => (
                    <Accord key={item.id} item={item} currOpen={currOpen} setCurrOpen={setCurrOpen} id={item.id} />
                ))}
            </ul>
        </div >
    )
}
