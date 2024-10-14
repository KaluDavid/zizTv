import React from 'react'
import img1 from '../../images/homeImg/customersImages/img1.png'
import img2 from '../../images/homeImg/customersImages/img2.png'
import img3 from '../../images/homeImg/customersImages/img3.png'

export function Customers() {
    return (
        <div className="text-[#576072] font-normal items-center flex-nowrap flex flex-col gap-6 py-[70px]  w-full group">
            <span>Trusted by +75M customers Worldwide</span>



            <ul className='flex items-center justify-center gap-[100px] animate-infinite-scroll w-auto group-hover:paused [&_img]:max-w-none' >
                <li>
                    <img src={img1} alt="customers" className='max-w-none' loading='lazy' />
                </li>
                <li>
                    <img src={img2} alt="customers" className='max-w-none' loading='lazy' />
                </li>
                <li>
                    <img src={img1} alt="customers" className='max-w-none' loading='lazy' />
                </li>
                <li>
                    <img src={img3} alt="customers" className='max-w-none' loading='lazy' />
                </li>
                <li>
                    <img src={img2} alt="customers" className='max-w-none' loading='lazy' />
                </li>

            </ul>
        </div>
    )
}
