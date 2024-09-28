import React from 'react'
import why3 from '../../../images/homeImg/whyUsImages/why3.svg'
import icon3 from '../../../images/homeImg/whyUsImages/icon3.svg'
import { ReusableWhy } from './ReusableWhy'

export function Why3() {
    return (
        <div>
            <ReusableWhy img={why3} article="We offer a wide range of video editing services tailored to meet the diverse needs of our clients. Whether you need promotional videos, social media content, corporate videos, or event coverage, our team of skilled editors is equipped to deliver high-quality results." icon={icon3} head="Comprehensive Video Editing" btn="Get Started" bg="bg-[#03112B]" />
        </div>
    )
}
