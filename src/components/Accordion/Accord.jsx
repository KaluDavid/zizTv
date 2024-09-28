import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export function Accord({ id, item, currOpen, setCurrOpen }) {
    const isOpen = id === currOpen;
    return (
        <li onClick={() => setCurrOpen(isOpen ? null : id)} className='flex border-b gap-[24px] border-b-[#CDCDCD] border-opacity-60 pb-[20px] cursor-pointer'>
            <div>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className='flex flex-col gap-2'>
                <b className='font-montserrat text-lg'>{item.title}</b>
                {isOpen && <article className='text-base font-poppins'>{item.article}</article>}
            </div>
        </li>
    )
}
