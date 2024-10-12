import React from 'react'
import Body from '../Body';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { CaseStudy } from './CaseStudy';
import { Industry } from './Industry';
import { VideoComp } from '../../components/VideoComp'

export function Portfolio() {
    return (
        <>
            <Body>
                <Hero />
                <Projects />
                <CaseStudy />
                <Industry />
                <VideoComp />
            </Body>
        </>
    )
}
