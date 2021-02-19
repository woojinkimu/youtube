import React from 'react';
import '../styles/header.css';

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="" className="logo"/>
        Youtube
      </div>
      <div className="search">
        <form placeholder="Search..">
          <button className="search-button">
            <img src="/images/search.png" alt=""/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;