import React from 'react';
import MyPicture from '../../assets/images/me.jpg'

const styles = {
    imgStyle: {
        height: '203px',
        width: '200px',
        overflow: 'hidden',
        borderRadius: '50%',
        margin: '10px',
        paddingBottom: '5px'
    },
    divStyle: {
        background: '#B8DBD9',
        textAlign: 'center',
        fontSize: 'large',
    },
    h1Style: {
        fontSize: '75px',
        padding: '10px',
    },
    pStyles: {
        padding: '10px',
        fontSize: '27px',
        width: '75%',
        marginLeft: '12.5%'
    }
};

export default function AboutMe() {
    return (
        <div style={styles.divStyle}>
            <h1 style={styles.h1Style}>About Me</h1>
            <img style={styles.imgStyle} src={MyPicture} alt="myself"></img>
            <p style={styles.pStyles}>
                Hello, my name is Jarrett(He/Him) I am a 25 year old student attending UNB's Coding Bootcamp through
                UNB College of Extended learning. I am current employed with the Canadian Armed Forces as a Signal
                Operator/Personnel management non-commissioned Officer with the 6 Canadian Combat Support Brigade in 
                Kingston, ON. I live with my dog Rhea, who is a 4 year old Blue German Shepard. I really enjoy playing 
                and watching all kinds of sports especially hockey where I am a high level player who always works the 
                hardest and brings a good attitude on and off the ice.
            </p>
            <br></br>
            <p style={styles.pStyles}>
                Professionally I am just getting started and would like to take on a few simple projects to keep
                developing my skills. I always bring a positive attitude towards my projects and love to sit and put
                my nose to the grindstone when things need to get done. If you select me I will bring nothing but
                the best and most professional work towards your project to ensure you can get you website up and
                running, updated and/or whatever you need for your web development. If you are interested please <a href='ContactMe'>Contact Me!</a>
            </p>
        </div>
    )
}