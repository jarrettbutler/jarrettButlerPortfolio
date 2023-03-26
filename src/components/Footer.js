import React from 'react';
import githubIcon from '../assets/images/github-mark.png';
import linkedInIcon from '../assets/images/LI-In-Bug.png';
import emailIcon from '../assets/images/mail.png';

const Styles = {
    iconStyles: {
        height: '50px',
        width: '50px',
    },
    navStyles: {
        background: '#2F4550',
        display: 'flex',
        justifyContent: 'space-around',
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '50px',
    }
}
export default function Footer() {
    return (
        <footer style={Styles.footer}>
            <nav style={Styles.navStyles}>
                <a href='https://github.com/jarrettbutler' target='_blank'>
                    <img style={Styles.iconStyles} src={githubIcon} alt='github Icon'></img></a>

                <a href='https://www.linkedin.com/in/jarrett-butler-58baa8262/' target='_blank'>
                    <img style={Styles.iconStyles} src={linkedInIcon} alt='LinkedIn Icon'></img></a>

                <a href='mailto: jbutler98@hotmail.com' target='_blank'>
                    <img style={Styles.iconStyles} src={emailIcon} alt='github Icon'></img></a>
            </nav>
        </footer>
    )
}