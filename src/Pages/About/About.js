import React, { useEffect } from 'react';
import "./About.css"
import { Link, useNavigate } from "react-router-dom"
import Aos from 'aos';
import "aos/dist/aos.css"

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const navi = useNavigate()
    const nav = () => {
        navi("/");
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100)
    }

    return (
        <div className='aboutMain'>
            <div data-aos="zoom-in" className='contents'>
                <div data-aos="fade-right" className="left">
                    <div className="head">
                        <h3>Introduction</h3>
                    </div>
                    <div className="in">
                        <p>
                            The Bhagavad Gita is a 700-verse
                            Hindu scripture that is part of
                            the Indian epic Mahabharata. It is
                            a conversation between prince Arjuna
                            and the god Krishna, who serves as
                            his charioteer. In this conversation,
                            Krishna provides Arjuna with guidance
                            on how to deal with moral dilemmas and
                            make decisions that are in line with
                            Dharma (duty/righteousness). The Bhagavad
                            Gita is highly respected for its spiritual
                            guidance and has been commented upon by
                            various philosophers and scholars. It’s
                            not just a religious book, but also a
                            scripture that has philosophical and practical
                            insights which are relevant even today.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="right">
                    <div className="head">
                        <h3>Our Mission</h3>
                    </div>
                    <div className="in">
                        <p>
                            The mission of the website could be to make
                            the wisdom of the Bhagavad Gita accessible
                            to everyone. This could involve providing
                            clear and understandable translations of the
                            verses, offering detailed interpretations
                            that relate the ancient text to modern life,
                            discuss and learn from each other. The
                            ultimate goal could be to help people
                            navigate the challenges of life with the
                            wisdom of the Gita.
                        </p>
                    </div>
                </div>
            </div>
            <div className="quickAcess">
                <div className="i">
                    <p>Feel free to contact us</p>
                </div>
                <div className="btn">
                    <button><Link to="/#contact" onClick={nav} className='Link'>Contact Us</Link></button>
                </div>
            </div>
        </div>
    );
}

export default About;
