import React from 'react'
import { Case } from '../CaseStudy/Case'
import img2 from '../../../images/PortfolioImg/img2.svg'
import figma from '../../../images/PortfolioImg/figma.svg'
import bicycle from '../../../images/PortfolioImg/bicycle.svg'
import img1 from '../../../images/PortfolioImg/img1.svg'
import img3 from '../../../images/PortfolioImg/img3.svg'
export function Success() {
    return (
        <div className='px-[40px] flex flex-col items-start w-auto gap-[50px] py-[60px] '>
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Client Case Studies
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>
            <div className=" flex items-center gap-[40px]">
                <Case pad="pt-[80%]" img={figma} text="Improving Employee Training with Interactive Content" />
                <div className="grid grid-rows-2 grid-flow-col items-center gap-[40px]">
                    <Case img={img1} text="Improving Employee Training with Interactive Content" />
                    <Case img={img2} text="Capturing Event Highlights for Maximum Impact..." />
                    <Case img={bicycle} text="Creating Impactful Event Coverage" />
                    <Case img={img3} text="Enhancing Employee Training with Interactive..." />
                </div>
                {/* <Case img={img1} text="Boosting Brand Awareness with Social Media Videos..." /> */}
            </div>
        </div>
    )
}


