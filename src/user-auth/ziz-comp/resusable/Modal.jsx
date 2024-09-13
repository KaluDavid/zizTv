import React from 'react'
import { LiaTimesCircleSolid } from "react-icons/lia";

export function Modal({ children, onClick }) {
    return (
        <div className='flex flex-col *:font-poppins px-6 py-9 bg-[white] pb-20 rounded-2xl gap-4 w-[700px]'>
            <button className='text-3xl text-gray text-left ml-[95%]' onClick={onClick}>
                <LiaTimesCircleSolid />
            </button>
            <div className='flex flex-col text-center items-center gap-3'>
                {children}
            </div>
        </div>
    )
}
