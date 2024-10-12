import React, { useState } from 'react'

export function Case({ img, text }) {
    const [showText, setShowText] = useState(false);

    return (
        <div className='flex flex-col items-center text-center relative cursor-pointer rounded-md transition duration-700 ease-in-out  hover:scale-110 ' onMouseEnter={() => setShowText(!showText)} onMouseLeave={() => setShowText(!showText)}>
            <img src={img} alt="" />
            {showText && <p className='text-2xl  bg-darkBlue rounded-md bg-opacity-60 w-full h-full font-semibold text-white absolute pt-[40%]'>{text}</p>}
        </div >
    )
}
