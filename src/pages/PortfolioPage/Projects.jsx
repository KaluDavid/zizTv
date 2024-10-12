import React from 'react'
import img1 from "../../images/homeImg/recentProjectsImages/img1.svg";
import img2 from "../../images/homeImg/recentProjectsImages/img2.svg";
import img3 from "../../images/homeImg/recentProjectsImages/img3.svg";
import { Project } from '../homgePage/RecentProjects/Project';
import Recent from '../homgePage/RecentProjects/Recent';

export function Projects() {
    return (
        <>
            <Recent heading="Our Featured Projects">
                <Project img={img1} title="Dynamic Marketing Campaign" article="A high-energy promotional video created for a leading retail brand to boost their online sales during the holiday season. " />
                <Project img={img2} title="Corporate Training Video" article="A comprehensive training video for a multinational corporation, designed to educate employees on new software tools." />
                <Project img={img3} title="Event Highlight Reel" article="A captivating highlight reel capturing the key moments of a major industry conference. The video features interviews, keynote speeches, and.." />
            </Recent>
        </>
    )
}
