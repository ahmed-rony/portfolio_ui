import React from 'react';
import './Testimonial.scss';
import { MdFormatQuote } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import img01 from '../../../images/testimonial/1.jpg';
import img02 from '../../../images/testimonial/2.jpg';
import img03 from '../../../images/testimonial/4.jpg';

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="testimonial" id="testimonialID">
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className='f-os sec-title'>TESTIMONIAL</motion.h2>
                <div className="hr"></div>
                <Slider {...settings}>
                    <div>
                        <div className="item">
                            <div className="left-card">
                                <div className="t-img">
                                    <img src={img01} alt="" />
                                </div>
                                <small className='f-po'>WIZARD TECH</small>
                                <h4 className='f-os'>LEO POTTER</h4>
                                <span className='f-po'>CEO OF OFFICER</span>
                            </div>
                            <div className="right-card">
                                <MdFormatQuote className='icon' />
                                <div className="content">
                                    <div className="title">
                                        <div className="info">
                                            <h4 className='f-po'>Web App Development</h4>
                                            <span className='f-po'>via Upwork - April 2, 2022 - April 6, 2022</span>
                                        </div>
                                        <div className="rating">
                                            <Rating value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    <div className="hr"></div>
                                    <p className='f-po'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore delectus commodi explicabo. Eligendi eveniet assumenda inventore, animi, ullam quisquam ipsa nemo eum sequi, nobis veniam ex voluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <div className="left-card">
                                <div className="t-img">
                                    <img src={img02} alt="" />
                                </div>
                                <small className='f-po'>ARCHITAA</small>
                                <h4 className='f-os'>LUCY JOE</h4>
                                <span className='f-po'>MANAGING DIRECTOR</span>
                            </div>

                            <div className="right-card">
                                <MdFormatQuote className='icon' />
                                <div className="content">
                                    <div className="title">
                                        <div className="info">
                                            <h4 className='f-po'>Web App Development</h4>
                                            <span className='f-po'>via Upwork - April 2, 2022 - April 6, 2022</span>
                                        </div>
                                        <div className="rating">
                                            <Rating value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    <div className="hr"></div>
                                    <p className='f-po'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore delectus commodi explicabo. Eligendi eveniet assumenda inventore, animi, ullam quisquam ipsa nemo eum sequi, nobis veniam ex voluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <div className="left-card">
                                <div className="t-img">
                                    <img src={img03} alt="" />
                                </div>
                                <small className='f-po'>WORKIO</small>
                                <h4 className='f-os'>APRIL GRANGER</h4>
                                <span className='f-po'>ASSISTANT</span>
                            </div>

                            <div className="right-card">
                                <MdFormatQuote className='icon' />
                                <div className="content">
                                    <div className="title">
                                        <div className="info">
                                            <h4 className='f-po'>Web App Development</h4>
                                            <span className='f-po'>via Upwork - April 2, 2022 - April 6, 2022</span>
                                        </div>
                                        <div className="rating">
                                            <Rating value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    <div className="hr"></div>
                                    <p className='f-po'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore delectus commodi explicabo. Eligendi eveniet assumenda inventore, animi, ullam quisquam ipsa nemo eum sequi, nobis veniam ex voluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;