import React from 'react'

export function GuildNum({ children }) {
    return (
        <ul className='[&_li]:w-[60px] [&_li]:h-[60px] [&_li]:rounded-full [&_li]:border [&_li]:border-lightGray [&_li]:font-semibold [&_li]:text-2xl [&_li]:flex [&_li]:items-center [&_li]:justify-center [&_hr]:w-[400px] [&_hr]:border-lightGray gap-[6px]'>
            {children}
        </ul>
    )
}
