import React from 'react'

export function GuildUl({ children }) {
    return (
        <ul className='gap-[103px]  [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:gap-[10px] [&_h1]:font-semibold [&_h1]:text-2xl  '>
            {children}
        </ul>
    )
}
