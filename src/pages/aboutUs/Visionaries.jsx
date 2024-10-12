import React from 'react'
import img1 from '../../images/AboutImages/VisionariesImg/img1.svg'
import img2 from '../../images/AboutImages/VisionariesImg/img2.svg'
import img3 from '../../images/AboutImages/VisionariesImg/img3.svg'
import img4 from '../../images/AboutImages/VisionariesImg/img4.svg'
import img5 from '../../images/AboutImages/VisionariesImg/img5.svg'
import img6 from '../../images/AboutImages/VisionariesImg/img6.png'
import img7 from '../../images/AboutImages/VisionariesImg/img7.svg'
import './about.css'
import Person1 from './Visionaries/Person1'
export function Visionaries() {
    return (
        <div className="px-[40px] pt-28 mb-[4%] flex flex-col gap-[54px] w-full items-center">
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Meet the Visionaries Behind Ziz.tv                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>

            <ul className="flex flex-col items-center w-auto gap-[68px]">
                <li className='flex items-center gap-[90px]'>
                    <Person1 photo={img1} name='Joy Smith' position='Founder & CEO' />
                    <Person1 photo={img2} name='David Lee' position='Chief Operating Officer' />
                    <Person1 photo={img3} name='Emma JohnSon' position='Head of Video Production' />
                    <Person1 photo={img4} name='Sarah Martinez' position='Lead Video Editor' />
                </li>
                <li className='flex items-end gap-[80px]'>
                    <Person1 photo={img5} name='Olivia Taylor' position='Marketing Director' />
                    <Person1 photo={img6} name='Michael Brown' position='Client Account Manager' />
                    <Person1 photo={img7} name='Praize Tim' position='Customer Care' />
                </li>
            </ul>
        </div>
    )
}
