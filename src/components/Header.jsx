import React from 'react';

const Header = () => {
  return (
    <div className="top_nav">
        <div className="nav_menu">
            <nav className="dashboardHeader">
                <img src={require('../assets/soil.jpg')} height="100px"/>
            </nav>
        </div>
    </div>
  );
};

export default Header;
