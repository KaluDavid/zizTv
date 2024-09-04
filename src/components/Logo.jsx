import React from 'react'
import tv from '../../public/logo.svg'

export function Logo() {
    return (
        <header className='flex items-center justify-start  *:font-ribeye text-5xl font-semibold text-white'>
            <h1>ZIZ.</h1>
            <img src={tv} alt="ziz logo" className=' object-contain w-[40px] h-[40px]' />
        </header>
    )
}
