import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer/Footer'
import { FaArrowAltCircleUp } from "react-icons/fa";


export default function Body({ children, bg, bg2 }) {
    return (
        <>
            <div className='py-[20px] overflow-x-hidden'>
                <div id='move'>
                    <NavBar bg={bg} bg2={bg2} />
                </div>
                {children}
                <Footer>
                    <p className='  text-xl flex items-center gap-2 *:text-2xl cursor-pointer ' onClick={() => {
                        const element = document.getElementById('move');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>Back to Top<b className='text-orange'><FaArrowAltCircleUp /></b></p>
                </Footer>

            </div >
        </>
    )
}
