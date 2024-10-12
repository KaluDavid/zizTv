import React from 'react'

export function WorkReused({ img, name }) {
    return (
        <div className='flex flex-col items-start gap-4'>
            <img src={img} alt='zizTv' />
            <strong>{name}</strong>
        </div>
    )
}
