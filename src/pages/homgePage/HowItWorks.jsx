import React, { useState } from 'react'
import './WeOffer/WeOffer.css';
import './HowItWorks/works.css'
export function HowItWorks() {
    return (
        <div className=" flex justify-between w-full  items-start  py-[60px] px-[6rem] ">

            <div className='flex items-center'>
                <fieldset className='rounded-2xl h-full w-[80%] py-[40px] px-[50px] works'>
                    <img src='/src/images/homeImg/offerImages/weOffer3.png' alt='' className='rounded-2xl w-auto h-full object-cover' />
                </fieldset>
            </div>


            {/* the content stays here */}
            <div className="flex flex-col items-start gap-8 text-left">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        How it works
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[20px]'></p>
                </div>
                <ul className='flex flex-col items-start gap-4  w-[35%] *:cursor-pointer'>
                    {/* {OfferArray.map((item) => (

                        <Offer key={item.id} item={item} open={open} setShowContent={setShowContent} setOpen={setOpen} itemId={item.id} />
                    ))} */}
                </ul>

            </div>

        </div >

    )

}
