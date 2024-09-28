import React from 'react'
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import img1 from "../../images/homeImg/recentProjectsImages/img1.svg";
import img2 from "../../images/homeImg/recentProjectsImages/img2.svg";
import img3 from "../../images/homeImg/recentProjectsImages/img3.svg";
import { Project } from './RecentProjects/Project';

export function RecentProjects() {
    return (
        <div className="flex flex-col items-center py-[60px] px-[3rem] gap-8 w-full ">

            <div className="flex items-center justify-between w-full">
                <div className='flex text-center'>
                    <h1 className='text-darkBlue text-[40px] leading-[67px] font-montserrat font-bold *:text-orange'>
                        Our Recent Projects
                    </h1>
                    <p className='h-[8px] w-[64px] rotate-45 bg-orange ml-[-34px] mt-[15px]'></p>
                </div>
                <div className='flex items-center gap-[16px] *:text-[35px] *:text-[#828282] *:font-extralight'>
                    <button><SlArrowLeftCircle /></button>
                    <button> <SlArrowRightCircle /></button>
                </div>
            </div>
            <div className='flex items-center gap-11'>
                <Project img={img1} title="Product Launch Video" article="This is a dynamic video showcasing the latest product launch for our client, Carilite Tech that highlights it’s features and benefits of the product." />
                <Project img={img2} title="Social Media Ad Campaign" article="There are series of captivating social media ads designed for Fashion Trendsetters. These videos have gaenered significant attention." />
                <Project img={img3} title="Animated Explainer Video" article="An engaging animation created for Children Education, explaining complex concepts in a simple and visually appealing manner." />
            </div>
        </div >
    )
}
