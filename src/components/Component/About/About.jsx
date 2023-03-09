import React from 'react';
import ParallaxText from '../ParallaxText/ParallaxText';
import './About.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import img01 from "../../../images/icons/reactJS.png";
import img02 from "../../../images/icons/js.png";
import img03 from "../../../images/icons/html5.png";
import img04 from "../../../images/icons/css.png";
import img05 from "../../../images/icons/mui.png";
import img06 from "../../../images/icons/bootstrap.png";
import img07 from "../../../images/icons/sass.png";
import img08 from "../../../images/icons/expressJS.png";
import img09 from "../../../images/icons/nodeJS.png";
import img10 from "../../../images/icons/mongodb.png";
import img11 from "../../../images/icons/jwt.png";
import img12 from "../../../images/icons/psd.png";
import img13 from "../../../images/icons/figma.png";
import img14 from "../../../images/icons/jquery.png";
import img15 from "../../../images/icons/Redux.png";
import img16 from "../../../images/icons/mysql.png";
import img17 from "../../../images/icons/tailwind.png";
import img18 from "../../../images/icons/wordpress.png";
import img19 from "../../../images/icons/chrome.png";
import img20 from "../../../images/icons/pinterest.png";
import img21 from "../../../images/icons/skype.png";

const About = () => {
    return (
        <section className="about" id='aboutID'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left">
                            <h2 className='f-os'>ABOUT ME</h2>
                            <div className="hr"></div>
                            <div className="content f-po">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illo assumenda ipsa? Maiores atque recusandae quam, modi provident earum voluptate ullam iusto vel eos aperiam sit aut, dolores ullam iusto vel eos assumenda! Suscipit, odio! Sapiente consectetur quam exercitationem, deleniti voluptatibus voluptate veniam laborum eaque. Totam ipsum adipisci rerum numquam aspernatur error iure explicabo.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illo assumenda ipsa? Maiores atque recusandae quam, modi provident earum voluptate ullam iusto vel eos aperiam sit aut, dolores assumenda! Suscipit, odio! Sapiente consectetur quam exercitationem.</p>
                                <div className="left-btn">
                                    <Link to="/files/resume.pdf" target="_blank" download><button>DOWNLOAD MY RESUME</button></Link>
                                    <a href="#contactID"><button>HIRE ME</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="right">
                            <h3 className='f-os'>ABOUT MY SKILLS</h3>
                            <div className="hr"></div>
                            <div className="content">

                                <div className="item">
                                    <h4 className='f-os'>PRIMARY SKILLS ON</h4>
                                    <ul>
                                        <li title='title'><img src={img01} alt="" /></li>
                                        <li title='title'><img src={img02} alt="" /></li>
                                        <li title='title'><img src={img03} alt="" /></li>
                                        <li title='title'><img src={img04} alt="" /></li>
                                        <li title='title'><img src={img05} alt="" /></li>
                                        <li title='title'><img src={img06} alt="" /></li>
                                        <li title='title'><img src={img07} alt="" /></li>
                                        <li title='title'><img src={img08} alt="" /></li>
                                        <li title='title'><img src={img09} alt="" /></li>
                                        <li title='title'><img src={img10} alt="" /></li>
                                        <li title='title'><img src={img11} alt="" /></li>
                                        <li title='title'><img src={img12} alt="" /></li>
                                        <li title='title'><img src={img13} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h4 className='f-os'>SECONDARY SKILLS ON</h4>
                                    <ul>
                                        <li title='title'><img src={img14} alt="" /></li>
                                        <li title='title'><img src={img15} alt="" /></li>
                                        <li title='title'><img src={img16} alt="" /></li>
                                        <li title='title'><img src={img17} alt="" /></li>
                                        <li title='title'><img src={img18} alt="" /></li>
                                        <li title='title'><img src={img19} alt="" /></li>
                                        <li title='title'><img src={img20} alt="" /></li>
                                        <li title='title'><img src={img21} alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-text">
                        <ParallaxText baseVelocity={-5}>full-stack e-commerce portfolio MERN STACK</ParallaxText>
                        <ParallaxText baseVelocity={5}>web design development dashboard commercial</ParallaxText>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;