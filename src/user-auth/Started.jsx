import React from 'react'
import { ZizForm } from './ziz-comp/ZizForm'
import { Google } from './ziz-comp/resusable/Google'
import { Input } from './ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { Button } from '../components/Button';

export function Started() {
    return (
        <>
            <div className='w-1/2 h-screen'>
                <ZizForm>
                    <Google />
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter your name:" type="text" htmlFor="name" placeHolder="e.g. John Doe" />
                        <Input label="Enter your email:" type="email" htmlFor="email" placeHolder="e.g. johndoe@gmail.com" />
                        <Input label="Phone number" type="tel" htmlFor="phone number" placeHolder="e.g. 0805556667778" />
                    </div>
                </ZizForm>

                <div className='pt-[12%] float-right'>
                    <Button>
                        <GrNext />
                    </Button>
                </div>
            </div>

        </>
    )
}

