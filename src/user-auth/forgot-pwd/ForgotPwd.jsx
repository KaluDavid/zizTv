import React from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../ziz-comp/resusable/Modal';
import { Input } from '../ziz-comp/resusable/Input';

export function ForgotPwd() {
    return (
        <Modal>
            <div className='flex flex-col text-center items-start gap-10'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-montserrat font-semibold text-[32px] '>Forgot your Password?</h2>
                    <p className='tracking-wider leading-7'>
                        Enter your registered Email address to receive reset instructions.
                    </p>
                </div>

                <div className='w-full text-left'>
                    <Input label="Enter your email" type="email" htmlFor="email" placeHolder="e.g. johndoe@gmail.com" />

                    <div className='*:w-[300px] mt-7 float-start'>
                        <Button>
                            <p className='font-semibold text-lg'>Continue</p>
                        </Button>
                    </div>
                </div>
            </div>
        </ Modal>
    )
}
