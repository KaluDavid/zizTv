import React from 'react'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { BiArrowToRight } from 'react-icons/bi'
export default function Error() {
    return (
        <div className='flex items-center justify-center gap-7 flex-col text-center  overflow-hidden  h-screen'>
            <h1 className='text-7xl text-darkBlue shadow-gray shadow-sm font-extrabold p-12 animate-bounce'>404</h1>

            <div className='flex items-center flex-col font-bold'>
                <em className=''>Ooops....</em>
                <em>page not found</em>

            </div>
            <Link to="/" className='flex items-center gap-2 font-semibold' >
                Back to  <BiArrowToRight className='text-darkBlue font-bold text-[50px] animate-pulse' />

                <Button>
                    Home
                </Button>
            </Link>
        </div>
    )
}
