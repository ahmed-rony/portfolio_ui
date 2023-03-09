import React, { useRef } from 'react';
import './Contact.scss';
import { RxTwitterLogo } from 'react-icons/rx';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import img01 from '../../../images/contact.jpg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_key', 'template_key', form.current, 'key')
            .then((result) => {
                e.target.reset();
                toast("Message successfully sent!");
            }, (error) => {
                toast('Something went wrong!');
            });

    };
    return (
        <section className='contact' id="contactID">
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="f-os sec-title">CONTACT ME</motion.h2>
                <div className="hr"></div>
                <div className="row">
                    <div className="col-md-12 col-12 col-lg-5">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left-card f-po">
                            <div className="t-img">
                                <img src={img01} alt="" />
                            </div>
                            <h4 className='f-os'>SAMANTHA MOON</h4>
                            <span>FULL STACK WEB DEVELOPER</span>
                            <p>I am available for freelance or remote work. Connect with me via and call in to my account.</p>
                            <div className="contacts">
                                <h5>Phone: <span> +0123456789</span></h5>
                                <h5>Email: <span> example@mail.com</span></h5>
                            </div>
                            <h6>FIND ME WITH</h6>
                            <ul>
                                <a target={'_blank'} rel="noreferrer" href="https://twitter.com/"><li><RxTwitterLogo /></li></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/"><li><FiFacebook /></li></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/"><li><FiLinkedin /></li></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.fiverr.com/"><li><span>fi</span></li></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.upwork.com/"><li><span>Up</span></li></a>
                            </ul>

                        </motion.div>
                    </div>
                    <div className="col-md-12 col-12 col-lg-7">
                        <motion.form whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} ref={form} onSubmit={sendEmail} className="right-card">
                            <div>
                                <h3>Got a <span>PROJECT IN MIND?</span></h3>
                                <h3>Let's Talk!</h3>
                            </div>
                            <div className="double-c">
                                <div className="item">
                                    <TextField name="user_name" label="YOUR NAME" variant="outlined" />
                                </div>
                                <div className="item">
                                    <TextField type={'number'} name="user_phone" label="PHONE NUMBER" variant="outlined" />
                                </div>
                            </div>
                            <div className="item">
                                <TextField name="user_email" label="EMAIL" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="subject" label="SUBJECT" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="message" className="text-field" multiline label="MESSAGE" variant="outlined" />
                            </div>
                            <input type="submit" value="SEND MESSAGE" className="form-btn" />
                        </motion.form>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;