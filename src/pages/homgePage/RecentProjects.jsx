import React from 'react'
import img1 from "../../images/homeImg/recentProjectsImages/img1.svg";
import img2 from "../../images/homeImg/recentProjectsImages/img2.svg";
import img3 from "../../images/homeImg/recentProjectsImages/img3.svg";
import { Project } from './RecentProjects/Project';
import Recent from './RecentProjects/Recent';

export function RecentProjects() {
    return (
        <>
            <Recent heading="Our Recent Projects">
                <Project img={img1} title="Product Launch Video" article="This is a dynamic video showcasing the latest product launch for our client, Carilite Tech that highlights it’s features and benefits of the product." />
                <Project img={img2} title="Social Media Ad Campaign" article="There are series of captivating social media ads designed for Fashion Trendsetters. These videos have gaenered significant attention." />
                <Project img={img3} title="Animated Explainer Video" article="An engaging animation created for Children Education, explaining complex concepts in a simple and visually appealing manner." />
            </Recent>
        </>
    )
}
