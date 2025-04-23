import React from 'react'
import vector from '../../images/AboutImages/Vector.svg'
import weStand from '../../images/AboutImages/weStand.svg'

export function StandFor() {
    return (
        <div className="px-[40px] pt-28 pb-[5%] flex justify-between w-auto bg-[#FFE5DC2E] relative">
            <img src={vector} alt="" className='absolute left-0 bottom-0' />

            <div className="flex w-auto gap-6 ">
                <fieldset className='z-10 flex flex-col w-auto mb-[10%]'>
                    <img src={weStand} alt="" className='h-[74vh]  object-contain z-10' />
                    <span className='  ml-[7%] mt-[-74%] w-[454px] h-[300px] border rounded-2xl border-orange rotating-element rotate-[-15deg]'> </span>
                </fieldset>

            </div>

            <div className="flex flex-col items-start text-left gap-8 text-darkBlue w-[50%]">
                <h1 className='text-[40px]  font-montserrat font-bold *:text-orange relative'>
                    Who We Stand For...
                </h1>
                <article className='flex flex-col gap-3'>
                    <span>
                        Our mission at Ziz.tv is simple yet profound: to empower video editors by connecting them with exciting projects and providing clients with exceptional video editing solutions that bring their visions to life.
                    </span>
                    <span>
                        We envision a world where creativity and technology seamlessly blend, enabling every story to be told through high-quality, captivating video content.
                    </span>
                    <span>
                        Our goal is to become the leading platform for video editing, known for our dedication to quality, innovation, and client satisfaction, while fostering a thriving community of talented video editors.
                    </span>
                </article>
            </div>


        </div>
    )
}
