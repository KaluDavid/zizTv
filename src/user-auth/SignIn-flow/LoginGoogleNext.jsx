import React from 'react'
import { SignInModal } from './SignInModal'
import girl from "../ziz-comp/girl.png"
import { GoogleAcct } from '../ziz-comp/resusable/GoogleAcct';
import { Button } from '../../components/Button';

export function LoginGoogleNext() {
    return (
        <>
            <SignInModal>
                <div className='my-4 flex justify-start flex-col text-center border-t-[1px] gap-6 items-center border-t-lightGray '>
                    <GoogleAcct image={girl} userName="John Doe" userEmail="johndoe@gmail.com" />
                    <div className='*:w-[300px]'>
                        <Button>
                            continue
                        </Button>
                    </div>
                    <p className='*:text-orange *:underline px-11 text-[#818895]'>
                        To create your account, Google will share your name, email address, and profile picture with Ziz.tv. See Ziz.tv <span>Privacy policy</span> and <span>Terms of service.</span>
                    </p>
                </div>
            </SignInModal>
        </>
    )
}
