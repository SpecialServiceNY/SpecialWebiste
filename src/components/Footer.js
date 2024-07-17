import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="bottomMenu">
        <Link className="bottomMenuItem" to="/">Home</Link>
        <Link className="bottomMenuItem" to="/insights">Insights</Link>
        <Link className="bottomMenuItem" to="/support">Support</Link>
        <Link className="bottomMenuItem" to="/about">About</Link>
        <Link className="bottomMenuItem" to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;