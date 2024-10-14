import React from 'react'

export function Next({ setOpen, open }) {
    return (
        <div className='flex gap-[32px]'>
            <button onClick={() => setOpen(true)} className={` ${open ? "border border-[blue]" : ''} w-[18px] h-[18px] rounded-full flex flex-col items-center justify-center`}>
                <span className={`${open ? 'bg-[blue]' : 'bg-lightGray'} p-1 rounded `}></span>
            </button>
            <button onClick={() => setOpen(false)} className={`${!open ? "border border-[blue]" : ''} w-[18px] h-[18px] rounded-full flex flex-col items-center justify-center`}>
                <span className={`${!open ? 'bg-[blue]' : 'bg-lightGray'} p-1  rounded `}></span>
            </button>
        </div>
    )
}
