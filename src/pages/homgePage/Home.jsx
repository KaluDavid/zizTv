import React from 'react'
import { NavBar } from '../../components/NavBar'
import Hero from './Hero'
import { Customers } from './Customers'
import { HomeAbout } from './HomeAbout'
import { WhyUs } from './WhyUs'

export default function Home() {
    return (
        <>
            <div className='py-[20px] overflow-x-hidden'>
                <NavBar />
                <Hero />
                <Customers />
                <HomeAbout />
                <WhyUs />
            </div>
        </>
    )
}
