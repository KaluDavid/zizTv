import React, { useState } from 'react'
import { ZizForm } from '../ziz-comp/ZizForm'
import { Google } from '../ziz-comp/resusable/Google'
import { Input } from '../ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


export function Started() {
    return (
        <>
            <div className='w-1/2 h-full *:w-full flex-col flex items-center justify-center pb-7 pr-6 bg-white'>
                <ZizForm started="Let's get started" signIn={<Link to="login/">Sign in</Link>}>
                    <Google />
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter your name:" type="text" htmlFor="name" placeHolder="e.g. John Doe" />
                        <Input label="Enter your email:" type="email" htmlFor="email" placeHolder="e.g. johndoe@gmail.com" />
                        <Input label="Phone number" type="tel" htmlFor="phone number" placeHolder="e.g. 0805556667778" />
                    </div>


                </ZizForm>
                <div className=' float-right px-8'>
                    <Link to='password' >
                        <Button>
                            <GrNext />
                        </Button>
                    </Link>
                </div>
            </div>

        </>
    )
}

