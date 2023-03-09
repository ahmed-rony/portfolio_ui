import React, { useContext } from 'react';
import About from '../../Component/About/About';
import Avater from '../../Component/Avater/Avater';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/NavBar/Navbar';
import Portfolio from '../../Component/Portfolio/Portfolio';
import Testimonial from '../../Component/Testimonial/Testimonial';
import { DarkModeContext } from '../../utilities/darkModeContext';
import './Home.scss';

const Home = () => {
    const { toggle } = useContext(DarkModeContext);
    return (
        <div className="home">
            <div className="container position-relative">
                <div className="mode">
                    <label class="switch">
                        <input type="checkbox" onClick={toggle} />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            <div className="home-bg">
                <Navbar></Navbar>
                <Avater></Avater>
                <About></About>
                <Portfolio></Portfolio>
                <Testimonial></Testimonial>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;