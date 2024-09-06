import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../ziz-comp/resusable/Input'

export function Otp() {
    return (
        <>
            <form className='w-1/2 h-full font-poppins items-center justify-center  p-8 flex flex-col gap-10'>
                <div className='*:text-center'>
                    <h2 className='text-[40px] font-bold text-gray pb-3 font-montserrat'>OTP Verification</h2>
                    <p className='text-darkBlue text-lg font-normal'>Please enter the 6 digit code sent to <b>John***@gmail.com</b></p>
                </div>


                <div className='flex gap-6 *:w-16 *:h-16 '>
                    <Input type="text" htmlFor="text" />
                    <Input type="text" htmlFor="text" />
                    <Input type="text" htmlFor="text" />
                    <Input type="text" htmlFor="text" />
                    <Input type="text" htmlFor="text" />
                    <Input type="text" htmlFor="text" />
                </div>

                <div className='text-darkBlue text-lg font-normal flex items-center justify-between'>
                    <p> Didn’t receive OTP?<span className='text-orange underline'>Resend</span></ p>
                </div>
                <div className='*:w-[300px] *:opacity-50'>
                    <Button>Verify</Button>
                </div>
            </ form>

        </>
    )
}
