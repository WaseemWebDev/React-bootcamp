import React from 'react';
import NavbarHeader from '../components/navbar/navbar'
import MainSlider from '../components/mainSlider';
import Search from '../components/search/search';
import ButtonImages from '../components/buttonImages/buttonImages';
import Courses from '../components/courses/Courses';
import Video from '../components/video/video';
import TimelineSection from '../components/timeline/timeline';
export default function Home() {
    return (
        <>
            <NavbarHeader />
            <MainSlider />
            <Search />
            <br /><br />
            <ButtonImages />
            <br />
            <Courses />
            <Video />
            <TimelineSection />
        </>
    );
}