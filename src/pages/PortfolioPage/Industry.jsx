import React from 'react'
import { Work } from './IndustryWork/Work'
import icon1 from '../../images/PortfolioImg/icon1.svg'
import icon2 from '../../images/PortfolioImg/icon2.svg'
import icon3 from '../../images/PortfolioImg/icon3.svg'
import image1 from '../../images/PortfolioImg/image1.svg'

export function Industry() {
    return (
        <div className='px-[40px] pb-[2%] pt-28 flex flex-col items-start w-auto gap-[50px] '>
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Our Industry Specifi Work
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>
            <div className="flex items-start gap-[40px]">
                <fieldset>
                    <img src={image1} alt="" className='w-[95.5%] object-contain' />
                </fieldset>
                <div className='flex flex-col items-start text-left'>
                    <Work bg="bg-darkBlue text-white" icon={icon1} border="border-white" head="Marketing" article="Videos designed to promote products and services, enhance brand awareness, and drive sales.
Examples are:  Social media campaigns, TV commercials, online ads." />
                    <Work bg="bg-white text-darkBlue" icon={icon2} border="border-orange" head="Education" article="Educational videos that simplify complex topics and enhance learning experiences.
Examples are: Online courses, training videos, educational animations." />
                    <Work bg="bg-orange text-white" icon={icon3} border="white" head="Entertainment" article="Creative and engaging videos for entertainment purposes.
Examples are: Music videos, short films, web series." />
                </div>
            </div>
        </div>
    )
}
