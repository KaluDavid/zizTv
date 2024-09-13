import React from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../ziz-comp/resusable/Modal';
import circles from "../ziz-comp/circles.svg"
import { useNavigate } from 'react-router-dom';

export function VerifyEmail({ showModal }) {
    const navigate = useNavigate();

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <Modal onClick={showModal}>
                <div className='flex flex-col text-center items-center gap-3'>
                    <img src={circles} alt="circles" />
                    <h2 className='font-montserrat font-semibold text-[32px] '>Please verify your email</h2>
                    <p className='tracking-wider leading-7'>
                        <span>We just sent an email to <b>johndoe@gmail.com</b>.</span>
                        <br />
                        <span>Click the link in the mail to verify your account.</span>
                    </p>
                    <div className='*:w-[300px] mt-7'>
                        <Button onClick={() => navigate("/")}>
                            <p className='font-semibold text-lg'>Continue</p>
                        </Button>
                    </div>
                </div>
            </ Modal>
        </div>

    )
}
