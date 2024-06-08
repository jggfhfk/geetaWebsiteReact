import React from 'react';
import "./Nav.css"
import gita from "../../assets/icons/bhagavad-gita.png"
import { Link, useNavigate } from "react-router-dom"

const Nav = (props) => {

    
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
        <div className='navMain' style={props.st}>
            <Link to="/" className="logo">
                <img src={gita} alt="" />
                <div className="title">
                    <p><span>G</span>ITA</p>
                </div>
            </Link>
            <div className="links">
                <div className="links"><Link to="/">Home</Link></div>
                <div className="links"><Link to="/chapters">Chapters</Link></div>
                <div className="links"><Link to="/about">About Us</Link></div>
                <div className="links"><Link to="/#contact" onClick={nav} >Contact Us</Link></div>
            </div>
        </div>
    );
}

export default Nav;
