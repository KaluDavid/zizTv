import React from 'react'
import { SignInModal } from './SignInModal'
import person from "../ziz-comp/person.png"
import girl from "../ziz-comp/girl.png"
import { GoogleAcct } from '../ziz-comp/resusable/GoogleAcct';

export function LoginGoogle() {
    return (
        <>
            <SignInModal>
                <div className='my-4 flex justify-start flex-col border-t-[1px] border-t-lightGray '>
                    <GoogleAcct image={girl} userName="John Doe" userEmail="johndoe@gmail.com" />
                    <GoogleAcct image={girl} userName="John Doe" userEmail="johndoe@gmail.com" />
                    <GoogleAcct image={person} userName="Use another account" />
                </div>
            </SignInModal>
        </>
    )
}
