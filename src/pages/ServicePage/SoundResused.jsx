import React from 'react'

export function SoundResused({ article, name, bDown }) {
    return (
        <div className={`${bDown} flex flex-col gap-4 items-start text-left text-darkBlue`}>
            <h1 className='font-bold font-montserrat'>{name}</h1>
            <article>{article}</article>
        </div>
    )
}
