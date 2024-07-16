import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMountain, faRoad, faGasPump, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import MiniSearchComponent from './MiniSearch'; // Adjust the path as per your project structure

// Example data for demonstration
const data = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Insights', link: '/insights' },
  { id: 3, title: 'Support', link: '/support' },
  { id: 4, title: 'About', link: '/about' },
  { id: 5, title: 'Contact', link: '/contact' }
  // Add more items as needed
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">
          <a href="/">
            <FontAwesomeIcon icon={faHome} className="fa-icon" />
            Home
          </a>
        </li> 
        <li className="menu-item">
          <a href="/insights">
            <FontAwesomeIcon icon={faRoad} className="fa-icon" />
            Insights
          </a>
          <ul className="submenu">
            <li><a href="/insights/learn">Learn</a></li>
            <li><a href="/insights/history">History</a></li>
            <li><a href="/insights/experience">Experience</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="/support">
            <FontAwesomeIcon icon={faGasPump} className="fa-icon" />
            Support
          </a>
          <ul className="submenu"> 
            <li><a href="/support/service">Service</a></li>
            <li><a href="/support/encourage">Encourage</a></li>
            <li><a href="/support/technology">Technology</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="/about">
            <FontAwesomeIcon icon={faMountain} className="fa-icon" />
            About
          </a>
          <ul className="submenu">
            <li><a href="https://xanderxuan.wordpress.com" target="_blank" rel="noopener noreferrer">About Me</a></li>
            <li><a href="https://medium.com/@tianhe1019/a-digital-initiative-for-the-visually-impaired-in-new-york-3d405de5a4e5" target="_blank" rel="noopener noreferrer">The Project</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            Contact
          </a>
          <ul className="submenu">
            <li><a href="/contact/organization">Organization</a></li>
            <li><a href="/contact/community">Community</a></li>
            <li><a href="/contact/volunteer">Volunteer</a></li>
          </ul>
        </li>
      </ul>
      {/* Use the MiniSearchComponent here */}
      <MiniSearchComponent data={data} />
    </nav>
  );
};

export default Navbar;