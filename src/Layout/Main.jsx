import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Feedback from '../Components/Feedback/Feedback';
import BlogSection from '../Components/BlogSection/BlogSection';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
            <Feedback></Feedback>
            <BlogSection></BlogSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;