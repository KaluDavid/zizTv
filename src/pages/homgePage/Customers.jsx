import React from 'react'
import img1 from '../../images/homeImg/img1.png'
import img2 from '../../images/homeImg/img2.png'
import img3 from '../../images/homeImg/img3.png'

export function Customers() {
    return (
        <div className="text-[#576072] font-normal items-center flex flex-col gap-6 py-[70px]  ">
            <span>Trusted by +75M customers Worldwide</span>

            <div className='flex items-center gap-[100px] ' >
                <img src={img1} alt="customers" />
                <img src={img2} alt="customers" />
                <img src={img1} alt="customers" />
                <img src={img3} alt="customers" />
                <img src={img2} alt="customers" />

            </div>
        </div>
    )
}
