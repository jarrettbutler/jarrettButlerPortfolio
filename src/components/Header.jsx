import React from 'react';
import '../assets/CSS/style.css'

const Styles = {
  headerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#586F7C',
    padding: '10px',
  },
  tabStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none'
  },
  listStyle: {
    paddingRight: '20px',
    paddingTop: '7px',
    fontSize: '20px'
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={Styles.headerStyle}>
    <h1><a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
          Jarrett Butler
        </a></h1>
    <ul style={Styles.tabStyles}>
      <li className="nav-item">
        <a style={Styles.listStyle}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a style={Styles.listStyle}
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a style={Styles.listStyle}
          href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a style={Styles.listStyle}
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;