import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header-title">Irmaos Club</h1>
      </div>
      <div className='link_container'>
        <Link className="links_timer" to="/">Timer</Link>
        <Link className="links_timer" to="/settings">Settings</Link>
      </div>
    </>
  );
};

export default Header;
