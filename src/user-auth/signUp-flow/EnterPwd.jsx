import React from 'react'
// import { ZizForm } from '../ziz-comp/ZizForm'
import { ZizForm } from '../ziz-comp/ZizForm';
import { Input } from '../ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Button } from '../../components/Button';

export function EnterPwd() {
    return (
        <>
            <div className='w-1/2 h-full'>
                <ZizForm started="Let's get started" signIn="Sign in" >
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter a password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                        <Input label="Repeat Password" type="password" htmlFor="email" placeHolder="e.g. Argentina67." />
                    </div>

                </ZizForm>

                <div className='flex justify-between items-center m-8'>
                    <button className='btn border-[1px] text-orange border-orange'>
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

