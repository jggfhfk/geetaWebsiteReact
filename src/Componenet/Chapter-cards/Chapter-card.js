import React from 'react';
import "./Chapter-cards.css"

const ChapterCard = () => {
    return (
        <div className='cardMain'>
            <div className="header">
                <div className="chapterNo">
                    <p>Chapter 1</p>
                </div>
                <div className="more"></div>
            </div>
            <div className="subhead">
                <div className="chapterName">
                    <p>Arjuna-Vishada Yoga</p>
                </div>
                <div className="desc">
                    <p>
                        “The Yoga of Arjuna’s
                        Dejection”. It sets the
                        stage for the conversation
                        between Arjuna and Krishna.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChapterCard;
