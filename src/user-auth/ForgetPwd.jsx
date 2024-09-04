import React from 'react'
import { ZizForm } from './ziz-comp/ZizForm'
import { Input } from './ziz-comp/resusable/Input';

export function ForgetPwd() {
    return (
        <>
            <ZizForm>
                <div className='flex flex-col gap-6'>
                    <Input label="Enter a password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                    <Input label="Repeat Password" type="password" htmlFor="email" placeHolder="e.g. Argentina67." />
                </div>
            </ZizForm>

        </>
    )
}

