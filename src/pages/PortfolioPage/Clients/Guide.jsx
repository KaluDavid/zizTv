import React, { useState } from 'react'
import { GuildUl } from './Guilde/GuildUl'
import { GuildNum } from './Guilde/GuildNum'
import { MainGuilde } from './Guilde/MainGuilde'
import { Next } from './Guilde/Next'
export function Guide() {
    const [open, setOpen] = useState(true)
    return (
        <div className='px-[40px] pb-[2%] pt-28 flex flex-col items-center w-full gap-[50px] '>
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Step-by-Step Guide with Videos
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>


            {open ? (<MainGuilde>
                <GuildNum>
                    <li>1</li>
                    <hr />
                    <li>2</li>
                    <hr />
                    <li>3</li>
                </GuildNum>
                <GuildUl>
                    <li>
                        <h1>Initial Consultation</h1>
                        <span>Discuss your project needs and goals with our team.</span>
                    </li>
                    <li>
                        <h1>Project Planning</h1>
                        <span>Outline the project scope, timeline, and deliverables.</span>
                    </li>
                    <li>
                        <h1>Production</h1>
                        <span>Our team begins the editing and production process.</span>
                    </li>
                </GuildUl>
            </MainGuilde>
            ) : (
                <MainGuilde>
                    <GuildNum>
                        <li>4</li>
                        <hr />
                        <li>5</li>
                    </GuildNum>
                    <GuildUl>
                        <li>
                            <h1>Review and Feedback</h1>
                            <span>Review the initial draft and provide <br /> feedback.</span>
                        </li>
                        <li>
                            <h1>Final Destination</h1>
                            <span>Receive the final edited video, ready for use.</span>
                        </li>
                    </GuildUl>
                </MainGuilde>
            )
            }
            <Next setOpen={setOpen} open={open} />
        </div>
    )
}
