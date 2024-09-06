import React from 'react'
import zizImg from "../ziz-comp/ziz.png";
import google from "../ziz-comp/google.svg"



export function SignInModal({ children }) {
    return (
        <>
            <div className="flex flex-col *:font-poppins bg-[white] pb-8 rounded-2xl gap-4 w-[700px] *:text-darkBlue *:text-base *:font-medium">
                <p className='flex items-center gap-2 py-6 px-10 justify-start border-b border-b-lightGray *:w-6 *:h-6 object-contain'><img src={google} alt="" />Sign in with Google</p>

                <div className='flex flex-col text-center items-center gap-3'>
                    <img src={zizImg} alt="" className='object-contain w-auto h-auto' />
                    <h2 className='font-montserrat font-semibold text-[32px] '>Choose an Account</h2>
                    <span className='tracking-wider leading-7 text-[#2D394E] font-medium'>
                        to continue to {`"${"Ziz.tv"}"`}
                    </span>
                </div>

                {children}
                <div className='*:font-medium flex items-center justify-between px-10'>
                    <select name="languages" id="languages" className=''>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="chinese">Chinese</option>
                        <option value="latin">Latin</option>
                    </select>
                    <div className='flex gap-3 *:cursor-pointer  items-center text-[#818895]'><span>Help</span><span>Privacy</span><span>Terms</span></div>
                </div>
            </div >
        </>
    )
}
