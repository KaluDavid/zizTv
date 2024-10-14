import React from 'react'
import Body from '../../Body'
import Hero from './Hero'
import { Guide } from './Guide'
import '../../aboutUs/about.css'
import { Success } from './Success'
import { VideoComp } from '../../../components/VideoComp'
export function Client() {
    return (
        <>
            <Body bg2="active2">
                <Hero />
                <Guide />
                <Success />
                <VideoComp />
            </Body>
        </>
    )
}
