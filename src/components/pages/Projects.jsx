import React from 'react';
import construction from '../../assets/images/construction.jpg';
import expertise from '../../assets/images/homepage1.jpg';
import worldCup from '../../assets/images/portfolio.jpg';
import myDaily from '../../assets/images/mydaily.jpg';
import alphaTeam from '../../assets/images/alphaTeam.jpg';
import readMe from '../../assets/images/ReadMe.jpg';

const Styles = {
    divStyles: {
        background: '#B8DBD9',
        textAlign: 'center',
    },
    imageStyles: {
        height: '200px',
        width: '200px',
    },
    aStyles: {
        display: 'inline-block',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingTop: '40px',
        paddingBottom: '40px',
        textDecoration: 'none',
        fontSize: '20px',
    },
    h1Style: {
        fontSize: '75px',
        padding: '10px',
    },
}

const projects = [
    {
        link: 'https://github.com/jarrettbutler/Expertise',
        image: expertise,
        deployed: "https://expertise-app.herokuapp.com/",
        name: 'Expertise',
        description: 'A place where employers can find expert coders',
        stack: 'Tech Stack: Handlebars.js, JavaScript, CSS, MySQL',
        alt: 'image of expertise'
    },
    {
        link: 'https://github.com/jarrettbutler/WorldcupStats',
        image: worldCup,
        deployed: "https://jarrettbutler.github.io/WorldcupStats/",
        name: 'World Cup Stats',
        description: 'The up to date scores and standings for the 2022 World Cup',
        stack: 'Tech Stack: HTML, CSS, JavaScript',
        alt: 'image of world cup stats'
    },
    {
        link: 'https://github.com/jarrettbutler/myDailyScheduler',
        image: myDaily,
        deployed: "https://jarrettbutler.github.io/myDailyScheduler/",
        name: 'My Daily Scheduler',
        description: 'A place you can add your daily schedule',
        stack: 'Tech Stack: jquery, HTML, CSS, JavaScript',
        alt: 'image of my daily schedule'
    },
    {
        link: 'https://github.com/jarrettbutler/alphaTeam',
        image: alphaTeam,
        deployed: "https://github.com/jarrettbutler/alphaTeam",
        name: 'Alpha Team',
        description: 'Add your team by using the terminal to create your own',
        stack: 'Tech Stack: Tests, Javascript, bootstrap',
        alt: 'image of Alpha Team'
    },
    {
        link: 'https://github.com/jarrettbutler/READme_genie',
        image: readMe,
        deployed: "https://github.com/jarrettbutler/READme_genie",
        name: 'Read Me Generator',
        description: 'A command prompt application that will creat a ReadMe file',
        stack: 'Tech Stack: prompt, JavaScript',
        alt: 'image of a read me file'
    },
    {
        link: 'https://github.com/jarrettbutler/workinprogress',
        image: construction,
        deployed: "https://jarrettbutler.github.io/workinprogress/",
        name: 'In Construction',
        description: 'This site is currently under construction',
        stack: 'Tech Stack: HTML, CSS',
        alt: 'image of a construction sign'
    },
]

export default function Portfolio() {
    return (
        <div style={Styles.divStyles}>
            <h1 style={Styles.h1Style}>Projects</h1>
            {projects.map((project) => (
            <a style={Styles.aStyles} href={project.deployed} target="_blank">
                <img style={Styles.imageStyles} src={project.image} alt={project.alt} />
                <p>{project.name}</p>
                <p>{project.description}</p>
                <p>{project.stack}</p>
            </a>
            ))}
        </div>

    )
}
