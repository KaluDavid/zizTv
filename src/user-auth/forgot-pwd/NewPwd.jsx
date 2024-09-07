import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../ziz-comp/resusable/Input'

export function NewPwd() {
    return (
        <>
            <form className='w-1/2 h-full font-poppins items-center  p-8  mr-6 flex flex-col gap-10'>
                <div className='*:text-center'>
                    <h2 className='text-[40px] font-bold text-gray pb-3 font-montserrat'>Create New Password</h2>
                </div>


                <div className='flex flex-col gap-6 w-full'>
                    <Input label="Enter a password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                    <Input label="Repeat Password" type="password" htmlFor="email" placeHolder="e.g. Argentina67." />

                    <div className='mt-10 flex justify-start text-center items-start *:w-[300px]'>
                        <Button>Continue</Button>
                    </div>
                </div>

            </ form>

        </>
    )
}
