import React from 'react'
import { WorkReused } from './WorkReused'
import guy1 from '../../images/ServicesImg/guy1.svg'
import guy2 from '../../images/ServicesImg/guy2.svg'
import guy3 from '../../images/ServicesImg/guy3.svg'
export function SoundWork() {
    return (
        <div className="px-[40px] pt-28 mb-[4%] flex flex-col gap-[54px] w-full items-center">
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Take A Look At Some Of Our Sound Design Work                </h1>
            </div>

            <div className="grid grid-rows-2 grid-flow-col items-center w-auto gap-[60px]">
                <WorkReused img={guy1} name="Riley Coleman" />
                <WorkReused img={guy2} name="Jodan Bright" />
                <WorkReused img={guy3} name="Dave Phil" />
                <WorkReused img={guy1} name="Riley Coleman" />
                <WorkReused img={guy2} name="Jodan Bright" />
                <WorkReused img={guy3} name="Dave Phil" />
            </div>
        </div>
    )
}
