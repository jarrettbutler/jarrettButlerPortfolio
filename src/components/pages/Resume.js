import React from 'react';
import MyResume from '../../assets/resume/Jarrett_resume.docx'

const Styles = {
    liStyle: {
        textIndent: '25px',
    }
}
export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <br></br>
            <ul> <h2>Front-End Skills</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jquery</li>
                <li>React</li>
            </ul>
            <ul><h2>Back-End Skills</h2>
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