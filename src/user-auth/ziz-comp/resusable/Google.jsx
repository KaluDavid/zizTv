import React from 'react'
import googleIcon from "../google.svg"
export function Google() {
    return (
        <div className='*:text-darkGray *:font-semibold text-2xl flex items-center justify-center flex-col gap-12 font-grotesk'>
            <button className='border border-lightGray rounded-lg  w-full flex items-center justify-center text-center gap-6 py-1 text-lg font-semibold'><img src={googleIcon} alt="googleIcon" className='w-9 h-9' /> Continue with Google</button>
            <p>Or</p>
        </div>)
}
