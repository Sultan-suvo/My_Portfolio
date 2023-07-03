import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Main;