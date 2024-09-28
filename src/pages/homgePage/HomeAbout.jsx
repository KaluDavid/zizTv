import React from 'react'
import { Button } from '../../components/Button'
import guy1 from '../../images/homeImg/aboutImages/guy1.png'
import guy2 from '../../images/homeImg/aboutImages/guy2.png'
import cubes from '../../images/homeImg/aboutImages/cubes.png'

export function HomeAbout() {
    return (
        <div className="py-[20px] px-[40px] flex items-center gap-48">
            <div className=' relative'>
                <img src={cubes} alt="cubes" className='' />
                <img src={guy1} alt="" className='mt-[-20%] w-[392px] h-[402.85px] object-cover' />
                <img src={guy2} alt="" className='top-[40%] left-[55%] w-[272px] h-[273.94px] object-cover z-10 absolute' />
                <img src={cubes} alt="cubes" className='mt-[-7.5%] ml-[109%]' />
            </div>

            <div className="flex flex-col items-start gap-[32px] w-1/2">
                <div className='flex'>
                    <h1 className='text-[40px] leading-[89px] font-montserrat font-bold *:text-orange'>
                        About Ziz.tv
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-29px] mt-[35px]'></p>
                </div>
                <article className="font-normal text-lg text-left font-poppins">Ziz.tv is aimed at revolutionizing the video editing industry. We believe in empowering video editors by connecting them to projects that inspire creativity and drive innovation. With a focus on excellence and collaboration, we're dedicated to delivering exceptional visual content that leaves a lasting impression."</article>
                <Button>Learn More</Button>
            </div>
        </div>
    )
}
