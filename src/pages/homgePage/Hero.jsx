import React from 'react'
import { Button } from '../../components/Button'
import heroImg from '../../images/homeImg/heroSection.png'
import cut from '../../images/homeImg/cut.png'
import girlSing from '../../images/homeImg/girlSing.mp4'
export default function Hero() {
    return (
        <div className='flex items-center flex-col justify-center gap-[56px] px-[40px] pt-[60px] text-darkBlue'>
            <div className='flex items-center gap-8 text-center flex-col '>
                <div className="flex items-center">
                    <h1 className='text-[64px] leading-[89px] font-montserrat font-bold *:text-orange'>
                        Transforming Ideas into <br /> Captivating <span>Videos</span>
                    </h1><img src={cut} alt="" className='ml-[-10%] mb-[-50px] w-16 h-[68px]' />
                </div>
                <p className='text-2xl'>Bringing Your Stories to Life Through Professional Editing</p>
                <Button>Explore</Button>
            </div>
            {/* <img src={heroImg} alt="hero-image" className='object-cover h-full w-full' /> */}
            <video src={girlSing} loop muted autoPlay className='w-full h-[600px] object-cover rounded-lg '></video>
        </div>
    )
}
