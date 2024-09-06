import React from 'react'
import { Zizz } from '../ziz-comp/Zizz';
import { Login } from './Login';
import { LoginGoogle } from './LoginGoogle';
import { LoginGoogleNext } from './LoginGoogleNext';
import { ForgotPwd } from '../forgot-pwd/ForgotPwd';
import { Otp } from '../forgot-pwd/Otp';

export function SignIn() {
    return (
        <>
            <div className='w-full h-full flex relative overflow-hidden'>

                <div className='flex'>
                    <Zizz />

                    {/* <Login /> */}
                    <Otp />
                </div>
                {/* 
                <div className='absolute  inset-0 bg-darkBlue bg-opacity-30 flex items-center justify-center  z-10'>
                    <LoginGoogle />
                    <LoginGoogleNext />
                    <ForgotPwd />
                </div> */}

            </div>
        </>
    )
}

