import React from 'react'
import { VideoComp } from '../../components/VideoComp'
import { Hero } from './Hero';
import { Customers } from '../homgePage/Customers';
import SoundDesign from './SoundDesign';
import { SoundWork } from './SoundWork';
import Body from '../Body';

export function Services() {
    return (
        <>
            <Body>
                <Hero />
                <Customers />
                <SoundDesign />
                <SoundWork />
                <VideoComp />
            </Body>
        </>
    )
}
