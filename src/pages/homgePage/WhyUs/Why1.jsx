import React from 'react'
import why1 from '../../../images/homeImg/why1.png'
import icon1 from '../../../images/homeImg/icon1.png'
import { ReusableWhy } from './ReusableWhy'

export function Why1() {
    return (
        <div className=''>
            <ReusableWhy img={why1} article="Our user-friendly platform makes it easy for clients to submit their projects and track progress. Simply upload your footage, provide your editing instructions, and leave the rest to us. You can review drafts, request revisions, and download the final video all from one convenient location." icon={icon1} head="Easy Process" btn="Get Started" bg="#464646" />
        </div>
    )
}
