import React from 'react'
import { Button } from '../../components/Button'
import hero from '../../images/ServicesImg/hero2.svg'

export function Hero() {
    return (
        <div className='flex items-center flex-col justify-center gap-[56px] px-[40px] pt-28 text-darkBlue'>
            <div className='flex items-center gap-8 text-center flex-col '>
                <h1 className='text-[64px] leading-[89px] font-montserrat font-bold *:text-orange'>
                    Complement Your <span>Videos</span> With <br />The Right <span>Sound</span>
                </h1>
                <p className='text-2xl'>Audio is a crucial element of any video, and our sound design services are designed to enhance the auditory experience. We clean, mix, and optimize audio tracks to ensure crystal-clear sound quality.</p>
                <Button>Get in Touch</Button>
            </div>
            <img src={hero} alt="hero-image" className='object-cover h-full w-full' />
            {/* <video src={girlSing} loop muted autoPlay className='w-full h-[600px] object-cover rounded-lg '></video> */}
        </div>
    )
}
