import React from 'react'
import why2 from '../../../images/homeImg/whyUsImages/why2.svg'
import icon2 from '../../../images/homeImg/whyUsImages/icon2.svg'
import { ReusableWhy } from './ReusableWhy'

export function Why2() {
    return (
        <div>
            <ReusableWhy img={why2} article="We pride ourselves on delivering videos that are not only visually stunning but also technically sound. Our editors use the latest software and techniques to ensure every project is polished and professional. From color correction to sound design, we pay attention to every detail to ensure your video stands out." icon={icon2} head="High-Quality Output" btn="Get Started" bg="bg-[#2D394E]" />
        </div>
    )
}
