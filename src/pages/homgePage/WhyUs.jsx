import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Why } from './WhyUs/Why'

export function WhyUs() {
    const [items, setItems] = useState(Why[0])

    function handleItems(item) {
        setItems(item)
    }
    return (
        <div className="flex flex-col items-center py-[60px] px-[40px] gap-14 ">

            <div className="flex flex-col items-center gap-8">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        Why choose Us?
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-34px] mt-[15px]'></p>
                </div>
                <div>
                    <ul className='flex items-center gap-[20px] *:cursor-pointer'>
                        {Why.map((item) => (
                            <li onClick={() => handleItems(item)} key={item.id} className={` text-darkBlue font-semibold font-montserrat text-lg ${item.id === items.id ? 'text-orange border-b border-b-orange pb-[2px]' : ''}`}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${items.color} rounded-2xl justify-between flex py-[50px] px-[70px] gap-[23%] items-center text-white w-full`}>
                <div className="flex flex-col gap-[72px] items-start justify-start text-left">
                    <div className="flex flex-col gap-8">
                        <div className='flex justify-center items-center rounded-lg bg-white *:w w-12 h-12 *:h-6 *:w-6 *:object-cover'><img src={items.icon} alt="" /></div>
                        <h3><b>{items.title}</b></h3>
                        <article>
                            {items.article}
                        </article>
                    </div>
                    <div className="*:w-[200px]">
                        <Button>Get Started</Button>
                    </div>
                </div>
                <img src={items.img} alt={items.title} className='w-full object-contain' />
            </div>
        </div >
    )
}
