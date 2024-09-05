import React from 'react'
import { ZizForm } from './ziz-comp/ZizForm'
import { Input } from './ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Button } from '../components/Button';

export function ForgetPwd() {
    return (
        <>
            <div className='w-1/2 h-auto'>
                <ZizForm>
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter a password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                        <Input label="Repeat Password" type="password" htmlFor="email" placeHolder="e.g. Argentina67." />
                    </div>
                </ZizForm>


                <div className='pt-[20%] flex justify-between items-center'>
                    <button className='btn border-[1px] text-orange border-orange m-8'>
                        <GrPrevious />
                    </button>
                    <Button>
                        <GrNext />
                    </Button>
                </div>
            </div>
        </>
    )
}

