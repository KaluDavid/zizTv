import React, { useState } from 'react'
import './WeOffer/WeOffer.css';
import { OfferArray } from './WeOffer/OfferArray';
import { Offer } from './WeOffer/Offer'

export function WeOffer() {
    const [showContent, setShowContent] = useState(OfferArray[0])
    const [open, setOpen] = useState(null);

    return (
        <div className="flex flex-col items-start gap-4 py-[60px] px-[6rem] ">

            <div className='flex text-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    We Offer
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[20px]'></p>
            </div>
            <div className="flex justify-between w-full gap-[150px] items-start">

                <ul className='flex flex-col items-start gap-4  w-[35%] *:cursor-pointer'>
                    {OfferArray.map((item) => (
                        <Offer key={item.id} item={item} open={open} setShowContent={setShowContent} setOpen={setOpen} itemId={item.id} />
                    ))}
                </ul>
                <div className='flex items-center'>
                    <div className='rounded-2xl h-[60vh] w-[70vh] border border-darkBlue border-opacity-60'></div>
                    <fieldset className='rounded-2xl h-[60vh] w-[70vh] px-[10%] py-[9%]  border border-darkBlue border-opacity-60 mt-[-30px] ml-[-27rem]'>
                        <img src={showContent.img} alt={showContent.title} className=' w-auto h-full object-cover' />
                    </fieldset>
                </div>
            </div>
        </div >
    )
}
