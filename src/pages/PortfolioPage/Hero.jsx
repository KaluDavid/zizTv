import React from 'react'
import { Button } from '../../components/Button'
import hero from '../../images/PortfolioImg/hero.svg'
import laptop from '../../images/PortfolioImg/laptop.svg'
import './portfolio.css'
export function Hero() {
    return (
        <div className='flex items-center flex-col justify-center gap-[56px] pt-28 text-darkBlue w-auto'>
            <div className=" flex items-center  px-[40px] justify-center">
                <fieldset className='flex flex-col absolute left-5 mb-[5%]'>
                    <img src={laptop} alt="" className='move mb-[-61%] ml-2 z-10' />
                    <span className="flex ml-8">
                        <span className='border-2 border-x-[2.5px] border-[#CC7033] rounded-full rotate-[5deg] scale-y-[.38] h-[269px] w-[280px]'></span>
                        <span className='border-2 border-x-[2.5px] border-[#CC7033] rounded-full rotate-[5deg] scale-y-[.38] h-[280px] w-[280px] ml-[-18rem] mt-[10px] '></span>
                    </span>
                </fieldset>
                <div className='flex items-center gap-8 text-center flex-col w-[80%] relative'>
                    <h1 className='text-[64px] leading-[89px] font-montserrat font-bold *:text-orange'>
                        Transforming Visions into Stunning <span> Visual Stories </span>              </h1>
                    <p className='text-2xl'>Our specialty is in delivering high-quality video editing services that <br /> captivate and engage audiences. Discover how our creativity and <br /> expertise can elevate your brand</p>
                    <Button linkTo="client">Explore Our Work</Button>
                </div>
                <span className="flex absolute  right-8">
                    <span className='border-2 border-x-[2.5px]   border-[#CC7033] rounded-full rotate-[5deg] scale-y-[.35] h-[269px] w-[269px]'></span>
                    <span className='border-2 border-x-[2.5px] border-[#CC7033] rounded-full rotate-[5deg] scale-y-[.35] h-[280px] w-[269px] ml-[-17rem] mt-[10px] '></span>
                </span>
            </div>
            <img src={hero} alt="hero-image" className='object-cover h-full w-auto' />
            {/* <video src={girlSing} loop muted autoPlay className='w-full h-[600px] object-cover rounded-lg '></video> */}
        </div>
    )
}
//