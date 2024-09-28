import React from 'react'
import logo from '../logo2.png'
import img1 from './facebook.svg'
import img2 from './instagram.svg'
import img3 from './twitter.svg'
import { Links } from './Links'
export function Footer({ children }) {
    return (
        <div className='flex flex-col gap-8 pt-8 pb-4 px-[64px]'>
            <div className='flex justify-between w-full' id='move'>
                <div className='flex w-[30%] flex-col gap-6'>
                    <fieldset>
                        <img src={logo} alt='logo' className=' object-contain' />
                    </fieldset>                <article>
                        Ziz.tv is dedicated to delivering exceptional visual content that leaves a lasting impression. It focuses on excellence and collaboration
                    </article>
                    <div className='flex flex-col gap-4 text-2xl'>
                        <b>Follow us on</b>
                        <fieldset className='flex items-center gap-6'>
                            <img src={img1} alt="facebook" />
                            <img src={img2} alt="instagram" />
                            <img src={img3} alt="twitter" />
                        </fieldset>
                    </div>
                </div>
                <div className='flex items-start gap-[100px]'>
                    <Links link='Links'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </Links>
                    <Links link='Services'>
                        <li>Video Editing</li>
                        <li>Motion Graphics</li>
                        <li>Animation</li>
                        <li>Color Grading</li>
                        <li>Sound Design</li>
                    </Links>
                    <Links link='Help'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </Links>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <p>Subscribe to get latest updates on our offers</p>
                <div className="flex justify-between w-auto">
                    <form className="flex">
                        <input type="email" placeholder="Enter Email" className="btn px-4 border-r-0 border border-lightGray rounded-lg  focus:outline-none text-left text-darkBlue rounded-r-none" />
                        <button type="submit" className='bg-orange btn border-l-0 rounded-l-none'>Subscribe</button>
                    </form>
                    {children}
                </div>

            </div>
            <p className='text-lightGray font-light text-base font-poppins'>@ 2023 Tifi.tv. All rights reserved.</p>
        </div>
    )
}
