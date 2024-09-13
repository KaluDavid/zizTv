import React, { useState } from 'react'
// import { ZizForm } from '../ziz-comp/ZizForm'
import { ZizForm } from '../ziz-comp/ZizForm';
import { Input } from '../ziz-comp/resusable/Input';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Button } from '../../components/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { VerifyEmail } from './VerifyEmail';

export function EnterPwd() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();

    function handleModalClick() {
        setShowModal(!showModal);
        navigate("/auth/password")
    }
    // function handleModal() {
    //     setShowModal(showModal === false);
    // }

    return (
        <>
            <div className='w-1/2 *:w-full h-full flex flex-col items-center pb-7 pr-6 bg-white'>
                <ZizForm started="Let's get started" signIn={<Link to="/auth/login">Sign in</Link>} >
                    <div className='flex flex-col gap-6'>
                        <Input label="Enter a password" type="password" htmlFor="name" placeHolder="e.g. Argentina67." />
                        <Input label="Repeat Password" type="password" htmlFor="email" placeHolder="e.g. Argentina67." />
                    </div>

                </ZizForm>
                <div className='flex justify-between items-center m-8 px-8'>
                    <button className='btn border-[1px] text-orange border-orange' onClick={() => navigate(-1)}>
                        <GrPrevious />
                    </button>

                    <Button onClick={() => { setShowModal(true); }}>
                        <GrNext />
                    </Button>
                </div>
            </div >

            {showModal && (
                <div className='absolute inset-0 bg-darkBlue bg-opacity-30 flex items-center justify-center' onClick={handleModalClick}><VerifyEmail showModal={handleModalClick} /></div>
            )}
        </>
    )
}

