import React from 'react'
import { NavBar } from '../../components/NavBar'
import Hero from './Hero'
import { Customers } from './Customers'
import { HomeAbout } from './HomeAbout'
import { WhyUs } from './WhyUs'
import { WeOffer } from './WeOffer'
import { HowItWorks } from './HowItWorks'
import { RecentProjects } from './RecentProjects'
import { Accordion } from '../../components/Accordion/Accordion'
import { VideoComp } from '../../components/VideoComp'
import { Footer } from '../../components/Footer/Footer'
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className='py-[20px] overflow-x-hidden'>
                <div id='move'>
                    <NavBar />
                </div>
                <Hero />
                <Customers />
                <HomeAbout />
                <WhyUs />
                <WeOffer />
                <HowItWorks />
                <RecentProjects />
                <Accordion />
                <VideoComp />
                <Footer>
                    <p className='  text-xl flex items-center gap-2 *:text-2xl cursor-pointer ' onClick={() => {
                        const element = document.getElementById('move');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>Back to Top<b className='text-orange'><FaArrowAltCircleUp /></b></p>
                </Footer>

            </div>
        </>
    )
}
