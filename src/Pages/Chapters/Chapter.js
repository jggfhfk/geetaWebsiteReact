import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Chapter.css"
import c1 from "../../assets/bg/chapter1.png"
import c2 from "../../assets/bg/chapter2.png"
import c3 from "../../assets/bg/chapter3.png"
import c4 from "../../assets/bg/chapter4.png"
import c5 from "../../assets/bg/chapter5.png"
import c6 from "../../assets/bg/chapter6.png"
import c7 from "../../assets/bg/chapter7.png"
import c8 from "../../assets/bg/chapter8.png"
import c9 from "../../assets/bg/chapter9.png"
import c10 from "../../assets/bg/chapter10.png"
import c11 from "../../assets/bg/chapter11.png"
import c12 from "../../assets/bg/chapter12.png"
import c13 from "../../assets/bg/chapter13.png"
import c14 from "../../assets/bg/chapter14.png"
import c15 from "../../assets/bg/chapter15.png"
import c16 from "../../assets/bg/chapter16.png"
import c17 from "../../assets/bg/chapter17.png"
import c18 from "../../assets/bg/chapter18.png"
import { Link } from "react-router-dom"
import Aos from 'aos';
import Nav from '../../Componenet/Nav/Nav';


const Chapter = () => {
    const [data, setData] = useState()
    const [num, setNum] = useState()
    let imgArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18]

    useEffect(() => {
        const getApiData = async () => {
            try {
                const response = await axios.request("https://bhagavadgitaapi.in/chapters/");
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        getApiData()
        alert("Double click on the `Read more` button to visit the chapter")

        Aos.init({ duration: 1000 })

    }, [])

    const fun = (e) => {
        setNum(`Chapter${e.target.value}`)
        console.log(e.target.value);
    }

    return (
        <div className='chapterMain'>
            {/* <Nav /> */}
            <div data-aos="zoom-in" className="hero">
                <div data-aos="zoom-in" className='head'>
                    <p>CHAPTERS</p>
                </div>
                <div data-aos="zoom-in" className="quickVerse">
                    <p className='chapterNo'>Chapter: 2</p>
                    <p className='verseNo'>Verse: 47</p>
                    <p className='verseDesc'>
                        योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
                        सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।
                    </p>
                </div>
            </div>
            <div className="body">


                {data ? data.map((post) => {
                    const { chapter_number, summary } = post
                    return (
                        <div data-aos="fade-down" to className={`chapter${chapter_number} cpt`}>
                            <p onClick={fun} to="/chtpter1" className="block">
                                <div className="img"><img src={imgArray[chapter_number - 1]} alt="" /></div>
                                <div className='desc'>
                                    <h3>Chapter No: {chapter_number}</h3>
                                    <p className='tabs'>
                                        {summary.en}
                                    </p>

                                </div>
                            </p>
                            <Link to={num} className="btn">
                                <button value={chapter_number} onClick={fun}>Read More</button>
                            </Link>
                        </div>
                    )
                }) : <div className='loading'>
                    <div className="block1">.</div>
                    <div className="block2">.</div>
                    <div className="block3">.</div>
                    <div className="block4">.</div>
                </div>}


            </div>
        </div>
    );
}

export default Chapter;
