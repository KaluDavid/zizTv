import React from 'react'
import { NavBar } from '../../components/NavBar'
import Hero from './Hero'
import { Customers } from './Customers'
import { HomeAbout } from './HomeAbout'
import { WhyUs } from './WhyUs'
import { WeOffer } from './WeOffer'
import { HowItWorks } from './HowItWorks'

export default function Home() {
    return (
        <>
            <div className='py-[20px] overflow-x-hidden'>
                <NavBar />
                <Hero />
                <Customers />
                <HomeAbout />
                <WhyUs />
                <WeOffer />
                <HowItWorks />
            </div>
        </>
    )
}
