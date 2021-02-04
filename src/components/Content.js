import React from 'react'
import About from './About';
import Contact from './Contact';
import Location from './Location';
import Project from './Project';

function Content() {
    return (
        <>
        <div className="w3-content w3-padding" style={{maxWidth: 1564}}>
            <Project></Project>
            <About></About>
            <Contact></Contact>
            <Location></Location>
        </div>
        </>
    )
}

export default Content
