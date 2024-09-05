import React from 'react'
import { Zizz } from './ziz-comp/Zizz'
import { Started } from './Started'
import { ForgetPwd } from './ForgetPwd'
import { VerifyEmail } from './VerifyEmail';

export function SignUp() {
    return (
        <>
            <div className='w-full h-screen flex pr-7 overflow-x-hidden relative'>
                <Zizz />
                {/* <Started /> */}
                <ForgetPwd />
                {/* 
                <div className='absolute inset-0 bg-darkBlue bg-opacity-30 flex items-center justify-center'>
                    <VerifyEmail />
                </div> */}
            </div>
        </>
    )
}

