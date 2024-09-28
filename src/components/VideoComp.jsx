import React from 'react'
import videoCam from '../images/videoCam.mp4'
import { Button } from './Button'
export function VideoComp() {
    return (
        <div className='my-[4rem] overflow-y-hidden'>
            <video src={videoCam} loop muted autoPlay className='w-full h-[392px] object-cover'></video>
            <div className='flex flex-col items-center gap-[16px] mt-[-16rem] pb-[8rem] '>
                <h1 className='font-montserrat text-[48px] text-white font-bold'>Ready to Start Your Project?</h1>
                <Button>
                    Get Started
                </Button>
            </div>
        </div>
    )
}
