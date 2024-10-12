import React from 'react'
import { SoundResused } from './SoundResused'

export default function SoundDesign() {
    return (
        <div className="px-[40px] pt-5 flex flex-col gap-[54px] w-full items-center">
            <div className='flex text-center justify-center'>
                <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                    Sound Design Services
                </h1>
                <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-30px] mt-[15px]'></p>
            </div>

            <div className="grid grid-rows-2 grid-flow-col items-center w-auto gap-[60px]">
                <SoundResused name='Sonic Branding' article="Every brand has an audio signature – a soundtrack or an effect that relates audiences to the product, company, or emotions it brings. Thanks to hundreds of successful branding projects, we can create original sounds that you can proudly use to represent your brand. Let millions of customers remember your brand and services with our unique sonic branding, customized for your brand." bDown="pb-[50px] border-b border-b-lightGray " />

                <SoundResused name='Voice Over' article="Need voice-over for IVR, on-hold messages, or full-fledged narration, we work with professional voice-over artists to deliver better than your expectations. After a detailed conversation about your needs, we carefully shortlist a range of professionals and deliver a fresh and prompt voice-over." />

                <SoundResused name='Recording & Mixing' article="Every recording or mixing project that we work on, gets our clients happy. Our creative sound design services are based on thousands of man-hours spent on perfecting our craft. The seasoned sound engineers and SFX professionals at Increditors are experts at mixing, layering, and recording sounds. Give yourself the Increditors advantage." bDown="pb-[50px] border-b border-b-lightGray " />

                <SoundResused name='Audio Post Production' article="Sound is more than just the missing piece to visuals – it is an artistic way to convey emotions. With industry-leading technical software, we make sure your audiences love what they hear. Convey the drama, thrill, suspense, and every emotion with our audio post-production services." />
            </div>
        </div>
    )
}
