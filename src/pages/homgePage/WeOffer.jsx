import React, { useState } from 'react'
import videoIcon from '../../images/homeImg/videoIcon.png'
import animationIcon from '../../images/homeImg/animationIcon.png'
import motionIcon from '../../images/homeImg/motionIcon.png'
import gradingIcon from '../../images/homeImg/gradingIcon.png'
import soundIcon from '../../images/homeImg/soundIcon.png'
import Yt from '../../images/homeImg/Yt.png'
import './WeOffer/WeOffer.css';
import arrow from '../../images/homeImg/arrow.png'
import { OfferArray } from './WeOffer/OfferArray';

export function WeOffer() {
    const [showNext, setShowNext] = useState(true)
    const [show, setShow] = useState(false);

    function handleShowNext() {
        setShowNext(!showNext)
    }

    return (
        <div className="flex items-center py-[60px] px-[6rem]  justify-between w-full gap-[150px]">
            <div className="flex flex-col items-start text-left gap-8 w-[35%]">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        We Offer
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[20px]'></p>
                </div>
                {/* the content stays here */}
            </div>
            <div className='flex items-center'>
                {/* Image stays here */}
            </div>
        </div >
    )
}
