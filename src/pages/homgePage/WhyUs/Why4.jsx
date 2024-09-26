import React from 'react'
import why4 from '../../../images/homeImg/why4.svg'
import icon4 from '../../../images/homeImg/icon4.svg'
import { ReusableWhy } from './ReusableWhy'

export function Why4() {
    return (
        <div>
            <ReusableWhy img={why4} article="We are committed to providing outstanding client support. Our team is available to answer your questions, address your concerns, and assist you at every step of the process. With tifi.tv, you can be confident that your project is in good hands." icon={icon4} head="Client Support" btn="Get Started" bg="bg-[#020916]" />
        </div>
    )
}
