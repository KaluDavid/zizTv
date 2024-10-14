import React from 'react'
import { Button } from '../../../components/Button'
import { Testimonial } from './Testimonial'
import client1 from '../../../images/ClientImg/client1.svg'
import client2 from '../../../images/ClientImg/client2.svg'
import client3 from '../../../images/ClientImg/client3.svg'
export default function Hero() {
    return (
        <>
            <div className='flex px-[40px] items-center flex-col justify-center gap-[56px] pt-[60px] text-darkBlue w-auto'>
                <div className=" flex items-center   justify-center">
                    <div className='flex items-center gap-8 text-center flex-col relative '>
                        <h1 className='text-[64px] leading-[89px] font-montserrat font-bold *:text-orange '>
                            <span>Trusted</span> by Leading Brands and <br /> Creators </h1>
                        <p className='text-2xl w-[65%]'>At ziz.tv, we partner with brands and creators to deliver top-notch video editing services that drive engagement and success. See how we've helped our clients achieve their goals. </p>
                        <Button linkTo="">Get Started Today</Button>
                    </div>
                </div>
                <div className='flex gap-10 items-center animate-infinite-scroll hover:paused'>
                    <Testimonial img={client1} head="Emily Smith" position="Owner of Ocean Breeze Villa" article="‘Working with ziz.tv was an absolute pleasure. Their team of video editors brought our project to life with creativity and precision. The final result exceeded our expectations!’" />
                    <Testimonial img={client2} head="Sarah Williams" position="CEO Lions Groups" article="‘The team at ziz.tv is not only skilled but also highly collaborative. They listened to our ideas and transformed them into a visually stunning video that perfectly captured our message.’" />
                    <Testimonial img={client3} head="Michael Johnson" position="Manager, Zenith Groups" article="‘ziz.tv is a go-to agency for anyone looking for top-notch video editing services. Their attention to detail and commitment to delivering exceptional work is truly commendable’" />

                </div>
            </div>
        </>
    )
}
