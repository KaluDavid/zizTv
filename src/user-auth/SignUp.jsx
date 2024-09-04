import React from 'react'
import { Zizz } from './ziz-comp/Zizz'
import { Started } from './Started'
import { ForgetPwd } from './ForgetPwd'

export function SignUp() {
    return (
        <>
            <div className='w-screen h-screen flex pr-7 overflow-x-hidden'>
                <Zizz />
                {/* <Started /> */}
                <ForgetPwd />
            </div>
        </>
    )
}

