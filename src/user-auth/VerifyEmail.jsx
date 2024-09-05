import React from 'react'
import { Button } from '../components/Button'
import { LiaTimesCircleSolid } from "react-icons/lia";
import circles from "./ziz-comp/circles.svg"
export function VerifyEmail() {
    return (
        <div className='flex flex-col *:font-poppins px-6 py-9 bg-[white] rounded-2xl border border-orange  gap-4 w-[700px] '>
            <button className='text-3xl text-gray text-left ml-[95%]'>
                <LiaTimesCircleSolid />
            </button>
            <div className='flex flex-col text-center items-center gap-3'>
                <img src={circles} alt="circles" />
                <h2 className='font-montserrat font-semibold text-[32px] '>Please verify your email</h2>
                <p className='tracking-wider leading-7'>
                    <span>We just sent an email to <b>johndoe@gmail.com</b>.</span>
                    <br />
                    <span>Click the link in the mail to verify your account.</span>
                </p>
                <div className='*:w-[300px] mt-7'>
                    <Button>
                        <p className='font-semibold text-lg'>Continue</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}
