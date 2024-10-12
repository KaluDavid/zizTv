import React from 'react'
import Hero from './Hero'
import { Customers } from './Customers'
import { HomeAbout } from './HomeAbout'
import { WhyUs } from './WhyUs'
import { WeOffer } from './WeOffer'
import { HowItWorks } from './HowItWorks'
import { RecentProjects } from './RecentProjects'
import { Accordion } from '../../components/Accordion/Accordion'
import { VideoComp } from '../../components/VideoComp'
import Body from '../Body';


export default function Home() {
    return (
        <>
            <Body>
                <Hero />
                <Customers />
                <HomeAbout />
                <WhyUs />
                <WeOffer />
                <HowItWorks />
                <RecentProjects />
                <Accordion />
                <VideoComp />
            </Body>

        </>
    )
}
