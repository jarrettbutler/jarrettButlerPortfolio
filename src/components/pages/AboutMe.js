import React from 'react';
import MyPicture from '../../assets/images/me.jpg'

const styles = {
    imgStyle: {
        height: '100px',
        width: '100px',
        overflow: 'hidden',
        borderRadius: '50%',
    },
};

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img style={styles.imgStyle} src={MyPicture} alt="A picture of me"></img>
            <p>
                Hello, my name is Jarrett(He/Him) I am a 24 year old student attending UNB's Coding Bootcamp through
                UNB College of Extended learning. I am current employed with the Canadian Armed Forces as a Signal
                Operator/Recruiting NCO with 21 Electronic Warfare in Kingston, ON. I live with my dog Rhea, who is
                a 4 year old Blue German Shepard. I really enjoy playing and watching all kinds of sports especially
                hockey where I am a high level player who always works the hardest and brings a good attitude on and
                off the ice.
            </p>
            <br></br>
            <p>
                Professionally I am just getting started and would like to take on a few simple projects to keep
                developing my skills. I always bring a positive attitude towards my projects and love to sit and put
                my nose to the grindstone when things need to get done. If you select me I will bring nothing but
                the best and most professional work towards your project to ensure you can get you website up and
                running, updated and/or whatever you need for your web development. If you are interested please <a
                    id="para-contact" href="#ContactMe">Contact me</a>
            </p>
        </div>
    )
}