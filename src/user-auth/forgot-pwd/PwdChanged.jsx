import React from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../ziz-comp/resusable/Modal';
import { BsPatchCheck } from "react-icons/bs";
import { Input } from '../ziz-comp/resusable/Input';

export function PwdChanged() {
    return (
        <div className='*:w-[579px]'>

            <Modal>
                <div className='flex flex-col text-center items-center justify-between gap-10'>
                    <div className='flex flex-col gap-4 items-center justify-between'>
                        <div className='text-[#008D36] text-4xl text-center '><BsPatchCheck /></div>
                        <h2 className='font-montserrat font-semibold text-[32px] '>Password Changed</h2>
                        <p className='tracking-wider leading-7'>
                            Your Password has been Successfully changed                    </p>
                    </div>
                    <div className='*:w-[300px] float-start'>
                        <Button>
                            <p className='font-semibold text-lg'>Login to your account</p>
                        </Button>
                    </div>
                </div>
            </ Modal>
        </div>
    )
}
