import React from 'react';
import './Avater.scss';
import ava from '../../../images/avater.jpg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Avater = () => {

    return (
        <main className='avater'>
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} transition={{ duration: 0.5, type: 'spring' }} className="avater-box">
                <div className="left">
                    <motion.img animate={{ borderRadius: ["52% 48% 32% 68% / 51% 30% 70% 49% ", "43% 57% 29% 71% / 63% 40% 60% 37% ", "30% 70% 61% 39% / 63% 40% 60% 37% ", "30% 70% 61% 39% / 39% 56% 44% 61% ", "50% 50% 42% 58% / 36% 49% 51% 64% ", "48% 52% 42% 58% / 68% 37% 63% 32% "], }} transition={{ type: "spring", duration: 10, repeat: Infinity, repeatType: "mirror" }} src={ava} alt="" />
                    <span className='f-os'>SAMANTHA MOON</span>
                </div>
                <div className="right">
                    <h1 className='f-os'>WEB
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'DEVELOPER',
                                2000,
                                'DESIGNER',
                                2000,
                            ]}
                            speed={60}
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </h1>
                </div>
            </motion.div>
            <a href="#aboutID">
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} transition={{ duration: 0.5, type: 'spring' }} className="scrolldown" style={{ color: "#000" }}>
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </motion.div>
            </a>
        </main>
    );
};

export default Avater;