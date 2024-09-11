import React from 'react'
import { ZizForm } from '../ziz-comp/ZizForm'
import { Google } from '../ziz-comp/resusable/Google'
import { Input } from '../ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-1/2 *:w-full h-full pb-7  bg-white flex flex-col pr-6 justify-center bg-white items-center '>
                <ZizForm started="Sign in" signIn={<span className="cursor-pointer" onClick={() => navigate(-1)}>Sign up</span>}>
                    <Google />
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter your email" type="email" htmlFor="email" placeHolder="e.g. johndoe@gmail.com" />
                        <Input label="Enter your password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                    </div>
                    <div className='text-darkBlue text-lg font-normal flex items-center justify-between'>
                        <p>
                            <input type="checkbox" name="remember" /> Remember me
                        </p>
                        <p className='text-orange underline'>Forget password?</p>
                    </div>
                </ZizForm>

                <div className='mr-6 float-right'>
                    <Button>
                        <GrNext />
                    </Button>
                </div>
            </div>

        </>
    )
}
// pt-[12%] 