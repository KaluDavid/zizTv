import React from 'react'
import { Accordion } from '../../components/Accordion/Accordion'
import { VideoComp } from '../../components/VideoComp'
import { AboutHero } from './AboutHero'
import { StandFor } from './StandFor'
import { Visionaries } from './Visionaries'
import Body from '../Body';
import './about.css'
export default function About() {
    return (
        <>
            <Body bg="active2">
                <AboutHero />
                <StandFor />
                <Visionaries />
                <Accordion />
                <VideoComp />
            </Body>
        </>
    )
}
