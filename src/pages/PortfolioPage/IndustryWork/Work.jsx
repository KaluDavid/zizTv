import React from 'react'

export function Work({ bg, icon, border, head, article }) {
    return (
        <div className={`flex flex-col items-start w-[572px] h-[302px] py-8 px-6 rounded-2xl gap-5 ${bg}`}>
            <fieldset className={`rounded-lg border p-3 ${border}`}>
                <img src={icon} alt="icons" />
            </fieldset>
            <h1 className='font-semibold'>{head}</h1>
            <article>{article}</article>
        </div>
    )
}
