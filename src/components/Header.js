import { NavLink } from 'react-router-dom';
import React from 'react';
const Header = (props) => {
  return (
    <>
      <header>
        <div className="container flex items-center justify-between">
          <a href="#" className="logo">
            Sarang Kulkarni
          </a>
          <nav className="menu">
            <ul className="top-menu flex items-center justify-between">
              <NavLink
                to="/"
                className={props.pathname === '/' ? 'active' : ''}
              >
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                <li>About</li>
              </NavLink>
              <NavLink to="/projects" activeClassName="active">
                <li>Projects</li>
              </NavLink>
              <li>
                <a className="resume" href="./Resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
