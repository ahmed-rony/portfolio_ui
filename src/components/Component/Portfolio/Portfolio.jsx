import React from 'react';
import './Portfolio.scss';
import { BiLink } from 'react-icons/bi';
import { BsImage } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { motion } from "framer-motion";
import img01 from "../../../images/portfolio/sunny_side.png";
import img02 from "../../../images/portfolio/OnePage.jpg";
import img03 from "../../../images/portfolio/Desktop - 1.png";
import img04 from "../../../images/portfolio/Template.png";
import img05 from "../../../images/portfolio/loopstudio.png";
import img06 from "../../../images/portfolio/New 3d  home 1.png";

const Portfolio = () => {
    return (
        <section className='portfolio' id="portfolioID">
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1}} initial={{ x: -80, opacity: 0}} transition={{duration: 1, type: 'spring', delay: 0.4 }} className='f-os sec-title'>PORTFOLIO</motion.h2>
                <div className="hr"></div>
                <div className="row gx-0 gx-md-4 gx-lg-5">
                    <div className="col-md-4 col-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1}} initial={{ y: 80, opacity: 0}} transition={{duration: 1, type: 'spring' }} className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img01} alt="" />
                                    <p class="title f-po">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </motion.div>
                        <div className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img02} alt="" />
                                    <p class="title">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1}} initial={{ y: 80, opacity: 0}} transition={{duration: 1, type: 'spring', delay:0.1 }} className="card-b">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img03} alt="" />
                                    <p class="title">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>
                        </motion.div>
                        <div className="card-b">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img04} alt="" />
                                    <p class="title">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1}} initial={{ y: 80, opacity: 0}} transition={{duration: 1, type: 'spring', delay:0.2 }} className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img05} alt="" />
                                    <p class="title">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </motion.div>
                        <div className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={img06} alt="" />
                                    <p class="title">Project</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><span><GrFacebookOption className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://google.com"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://github.com/"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;