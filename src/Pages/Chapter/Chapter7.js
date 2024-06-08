import React, { useEffect, useState } from 'react';
import "./Chapter1.css"
import axios from 'axios';
import Nav from "../../Componenet/Nav/Nav"
import aos from "aos"
import "aos/dist/aos.css"

const Chapter1 = () => {

    const [data, setData] = useState()

    const getVerse = async () => {
        const options = {
            method: 'GET',
            url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/7/verses/',
            headers: {
                'x-rapidapi-key': '2105556877msh18f814a24779444p1e53dfjsn1f9e2b2712bb',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getVerse()
    }, [])

    const styNav = { "z-index": "1" }

    return (
        <div className='cptMain'>
            <Nav st={styNav} />
            <div className='cptMain1'>
                <div className="head"><p>Chapter No 7</p></div>
                <div className="subhead"><p>Gyaan Vigyana Yoga</p></div>
                <div className="versesCount"><p>No of verse: 30</p></div>
            </div>
            <div className="verses">

                {data ? data.map((post) => {
                    const { verse_number, text } = post
                    let i = verse_number
                    return (
                        <div data-aos="fade-up" className="verseBox" >
                            <div className="verseNo">Verse No: {verse_number}</div>
                            <div className="verse"><p>{text}</p></div>
                            <div className="verseMeaning">
                                <p>
                                    {i ? data[i - 1].translations[5].description : <div>loading</div>}
                                </p>
                            </div>
                        </div>
                    )
                })



                    : <div>
                        <h2>Loading</h2>
                    </div>}
            </div>
        </div>
    );
}

export default Chapter1;
