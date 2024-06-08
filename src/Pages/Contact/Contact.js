import React from 'react';
import './Contact.css'
import face from "../../assets/icons/facebook.png"
import whatsapp from "../../assets/icons/whatsapp.png"
import ln from "../../assets/icons/linkedin.png"
import git from "../../assets/icons/code.png"


const Contact = () => {
    return (
        <div className="contactMain">
                <div className="left">
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
                <div className="right">
                    <div className="form">
                        <div className="email">
                            <label htmlFor="">Email</label><br />
                            <input type="email" />
                        </div>
                        <div className="message">
                            <label htmlFor="">Message</label><br />
                            <textarea style={{ marginTop: '3%' }} type="text" />
                        </div>

                        <div className="button">
                            <button id='btnSubmit'><p>Send message</p></button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;
