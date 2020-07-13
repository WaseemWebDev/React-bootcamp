import React from 'react';
import NavbarHeader from '../components/navbar/navbar'
import MainSlider from '../components/mainSlider';
import Search from '../components/search/search';
import ButtonImages from '../components/buttonImages/buttonImages';
import Courses from '../components/courses/Courses';
import Video from '../components/video/video';
import TimelineSection from '../components/timeline/timeline';
import Counters from '../components/numbers/numbers';
import Charts from '../components/charts/chart';
import Faqs from '../components/faqs/faqs';
import Footer from '../components/footer/footer';
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
             <Counters />
            <Charts />
            <Faqs />
            <Footer />
        </>
    );
}