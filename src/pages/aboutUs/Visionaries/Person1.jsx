import React from 'react'

export default function Person1({ name, position, photo }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <img src={photo} alt="" />
            <h1 className='font-bold'>{name}</h1>
            <p>{position}</p>
        </div>
    )
}
