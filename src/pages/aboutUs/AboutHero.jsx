import React from 'react'
import guyWithCam from '../../images/AboutImages/2guys.svg'
import manOnHymn from '../../images/AboutImages/manOnHymn.svg'
export function AboutHero() {
    return (
        <div className="px-[40px] pt-28 mb-[4%] flex justify-between w-auto">
            <div className="flex flex-col items-start text-left gap-8 text-darkBlue w-[40%]">
                <div className='flex'>
                    <h1 className='text-[40px]  font-montserrat font-bold *:text-orange relative'>
                        Empowering <span>Video Editors</span>, Elevating Visual Stories            </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange absolute mt-[5%] ml-[32%]'></p>
                </div>
                <article>Ziz.tv is aimed at revolutionizing the video editing industry. We believe in empowering video editors by connecting them to projects that inspire creativity and drive innovation.
                    <br />
                    <br />

                    With a focus on excellence and collaboration, we're dedicated to delivering exceptional visual content that leaves a lasting impression."
                </article>
            </div>

            <div className="flex w-auto gap-6">

                <fieldset className='flex flex-col mt-[30%]'>
                    <span className="relative flex w-[18px] h-[18px] ml-[5%]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full w-[18px] h-[18px] bg-orange"></span>
                    </span>
                    <span className="relative flex w-[272px] h-[274px] ">
                        <span className=" animate-spin absolute inline-flex h-full w-full rounded-full border-x-orange border opacity-75"></span>
                        <img src={manOnHymn} alt="manOnHymn" className='w-[272px] h-[274px]  object-contain relative' />
                    </span>

                    <b className="  rounded-full ml-[92%] mt-[-20%]" ></b>
                    <span className="relative flex w-[29px] h-[29px] ml-[92%] mb-[10%]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B92C09] opacity-75"></span>
                        <span className="relative inline-flex rounded-full w-[29px] h-[29px] bg-[#B92C09]"></span>
                    </span>

                </fieldset>
                <fieldset className='flex flex-col mt-[-9%]'>
                    <b className='w-[91px] h-[91px] border border-orange rounded-full mb-[-25%] animate-ping'></b>
                    <img src={guyWithCam} alt="guyWithCam" className='w-[320px] h-[340px] z-10' />
                    <b className='w-[91px] h-[91px] border border-darkBlue rounded-full ml-[70%] mt-[-26%] animate-ping'></b>

                </fieldset>
            </div>
        </div>
    )
}
