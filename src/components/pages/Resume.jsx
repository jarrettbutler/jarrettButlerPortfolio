import React from 'react';
import MyResume from '../../assets/resume/Jarrett_resume.docx'

const Styles = {
    liStyle: {
        listStylePosition: 'inside',
    },
    divStyle: {
        textAlign: 'Center',
        fontSize: '29px',
        background: '#B8DBD9'
    },
    h1Style: {
        fontSize: '75px',
        padding: '10px',
    },
    h2Style: {
        fontSize: '50px',
    }
}
export default function Resume() {
    return (
        <div style={Styles.divStyle}>
            <h1 style={Styles.h1Style}>Resume</h1>
            <br></br>
            <h2 style={Styles.h2Style}>Front-End Skills</h2>
            <ul style={Styles.liStyle}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jquery</li>
                <li>React</li>
            </ul>
            <br></br>
            <h2 style={Styles.h2Style}>Back-End Skills</h2>
            <ul style={Styles.liStyle}>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySql</li>
                <li>NoSQL (MongoDB)</li>
                <li>GraphQL</li>
            </ul>
            <p>Click here for <a href={MyResume} download="Jarrett_resume.docx">Resume</a></p>
        </div>
    );
}