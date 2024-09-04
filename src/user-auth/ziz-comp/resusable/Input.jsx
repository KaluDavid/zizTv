import React from 'react'

export function Input({ label, type, htmlFor, placeHolder }) {
    return (
        <div className='text-darkBlue flex flex-col gap-2 font-normal text-lg'>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} placeholder={placeHolder} className='border border-lightGray rounded-lg px-4 py-2 focus:ring-1 focus:ring-lightGray focus:outline-none ' />
        </div >
    )
}
