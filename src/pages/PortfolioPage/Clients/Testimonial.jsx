import React from 'react'

export function Testimonial({ head, img, position, article }) {
    return (


        <div className='w-[392px] h-[235px] py-6 px-9 rounded-2xl flex flex-col gap-3 text-left *:flex *:flex-col *:gap-1 [&_article]:text-[13px] [&_article]:font-medium [&_img]:w-[40px] [&_img]:h-[40px] shadow-2xl [&_h1]:font-semibold [&_h1]:text-xl'>
            <fieldset>
                <img src={img} alt="testimonials" />
                <h1>{head}</h1>
                <span className='text-sm text-lightGray font-light'>{position}</span>
            </fieldset>
            <article>{article}</article>
        </div>
    )
}
