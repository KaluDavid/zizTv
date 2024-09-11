import React from 'react'
import { Zizz } from '../ziz-comp/Zizz'
import { Started } from './Started'
import { EnterPwd } from './EnterPwd'
import { VerifyEmail } from './VerifyEmail';
import { Outlet } from 'react-router-dom';

export function SignUp() {
    return (
        <>
            <div className='w-full h-full flex relative overflow-hidden'>
                <Zizz />
                <Outlet />

                {/* <Started /> */}
                {/* <EnterPwd /> */}
                {/* 
                <div className='absolute inset-0 bg-darkBlue bg-opacity-30 flex items-center justify-center'>
                    <VerifyEmail />
                </div> */}
            </div>
        </>
    )
}

