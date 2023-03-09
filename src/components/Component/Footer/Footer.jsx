import React from 'react';
import './Footer.scss';
import { motion } from "framer-motion";
import img01 from "../../../images/avater.jpg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="content-f">
                <div className="hr"></div>
                <div className="container">
                    <div className="item">
                        <img src={img01} alt="" />
                        <h3 className='f-os'>a<span>.</span>rony</h3>
                    </div>
                </div>
                <motion.span whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: 0.4 }} className='copyright f-po'>&copy;2023 | All rights reserved.</motion.span>
            </div>
        </footer>
    );
};

export default Footer;