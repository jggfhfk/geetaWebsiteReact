import React, { useEffect } from 'react';
import "./Home.css"
import face from "../../assets/icons/facebook.png"
import whatsapp from "../../assets/icons/whatsapp.png"
import ln from "../../assets/icons/linkedin.png"
import git from "../../assets/icons/code.png"
import wheel from "../../assets/bg/—Pngtree—golden dharma wheel dharmachakra buddhism_15075763.png"
import karma from "../../assets/bg/tree-with-thin-branches-covered-by-leaves.png"
import jnana from "../../assets/bg/reading-book_4072131.png"
import bhakti from "../../assets/bg/diwali_8044218.png"
import raj from "../../assets/bg/exercise_1721094.png"
import CountUp from "react-countup"
import aos from "aos"
import "aos/dist/aos.css"
import Nav from "../../Componenet/Nav/Nav"





const Home = () => {

    useEffect(() => {
        aos.init({ duration: 1000 })
    }, [])


    return (
        <div className='mainHome'>
            <div data-aos="zoom-in" className="first">
                {/* <Nav /> */}
                <div data-aos="zoom-in" className="p">
                    <p>GITA</p>
                </div>
                <div data-aos="zoom-in" className="quote">
                    <p>Navigating the ship of success with the compass of the <span>BHAGVAD-GITA</span></p>
                </div>
            </div>

            <div className="second">
                <div data-aos="fade-up" className="wheels1"><img src={wheel} alt="" /></div>
                <div data-aos="fade-down" className="wheels2"><img src={wheel} alt="" /></div>
                <div data-aos="fade-right" className="left">
                    <div className="title">
                        <p>
                            What is Gita?
                        </p>
                    </div>
                    <div className="description">
                        <p>
                            The Bhagavad Gita, a celestial song
                            echoing the rhythm of
                            dharma, guiding souls
                            through life’s eternal sea.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="right">
                    <div className="moreDescription">
                        <p>
                            <span>T</span>he <span>B</span>hagavad <span>G</span>ita, often referred to as the
                            Gita, is a 700-verse Hindu scripture that is part of the
                            Indian epic Mahabharata. It is a sacred text of the
                            Hindu religion, and consists of a conversation
                            between Prince Arjuna and the god Krishna, who
                            serves as his charioteer. In this conversation,
                            Krishna provides Arjuna with guidance on how to
                            live a righteous life, fulfill his duties, achieve
                            spiritual enlightenment, and understand the nature
                            of the universe.
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="third">
                <div className="title">
                    <p></p>
                    <div className="info">
                        <div className="i1">
                            <div className="number"><CountUp end={18} duration={8} /></div><hr />
                            <div className="word">Chapters</div>
                        </div>
                        <div className="i1">
                            <div className="number"><CountUp end={700} duration={8} /></div><hr />
                            <div className="word">Shlokas</div>
                        </div>
                        <div className="i1">
                            <div className="number"><CountUp end={200} duration={8} />+</div><hr />
                            <div className="word">Translations</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourth">
                <div className="cardGroup">
                    <div data-aos="fade-right" className="card">
                        <div className="cardImg"><img src={karma} alt="" /></div>
                        <div className="cardHead"><p>Karma Yoga</p></div>
                    </div>
                    <div data-aos="fade-left" className="card">
                        <div className="cardImg"><img src={jnana} alt="" /></div>
                        <div className="cardHead"><p>Jnana Yoga</p></div>
                    </div>
                    <div data-aos="fade-right" className="card">
                        <div className="cardImg"><img src={bhakti} alt="" /></div>
                        <div className="cardHead"><p>Bhakti Yoga</p></div>
                    </div>
                    <div data-aos="fade-left" className="card">
                        <div className="cardImg"><img src={raj} alt="" /></div>
                        <div className="cardHead"><p>Raj yoga</p></div>
                    </div>
                </div>
            </div>

            <div className="contact" id='contact'>
                <div data-aos="zoom-in" className="left">
                    <div className="title"><p style={{ color: '#ffff' }}>Contact Us</p></div>
                    <div className="selfContactInfo">
                        <div className="name">
                            <p>Om Badgujar</p>
                        </div>
                        <div className="number">
                            <p>+917028756519</p>
                        </div>
                        <div className="socialLinks">
                            <a href='#' className="icn" id='facebook'><img src={face} alt="" /></a>
                            <a href='#' className="icn" id='whatsApp'><img src={whatsapp} alt="" /></a>
                            <a href='#' className="icn" id='linkedIn'><img src={ln} alt="" /></a>
                            <a href='#' className="icn" id='git'><img src={git} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="right">
                    <form action="https://api.web3forms.com/submit" method="POST" className="form">

                        <input type="hidden" name="access_key" value="f6f8afab-8b4d-498c-b83c-4b2ae3c93dc0"></input>
                        <div className="email">
                            <label htmlFor="">Email</label><br />
                            <input name='email' type="email" />
                        </div>
                        <div className="message">
                            <label htmlFor="">Message</label><br />
                            <textarea name='msg' style={{ marginTop: '3%' }} type="text" />
                        </div>

                        <div className="button">
                            <button type='submit' id='btnSubmit'><p>Send message</p></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
