import React, { useState } from 'react'

export function GoogleAcct({ image, userEmail, userName }) {
    const [user, setUser] = useState(false)

    return (
        <>
            <p onClick={() => setUser(!user)} className={`flex items-center justify-start gap-4 text-left px-6 py-4 cursor-pointer hover:bg-light ${user ? "bg-light" : ""} `}>
                <img src={image} alt="" className='w-12 h-12' />
                <span>
                    <b>{userName}</b>
                    <br />
                    {userEmail}
                </span>
            </p>
        </>
    )
}
