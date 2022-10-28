import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-div">
        <img className="logo-img" src="./assets/images/logo.svg" alt="" />
      </div>
      <ul className="desktop-links">
        <li className="desktop-item">
          <Link className="desktop-link" to="/">
            Home
          </Link>
        </li>
        <li className="desktop-item">
          <Link className="desktop-link" to="/new">
            New
          </Link>
        </li>
        <li className="desktop-item">
          <Link className="desktop-link" to="/popular">
            Popular
          </Link>
        </li>
        <li className="desktop-item">
          <Link className="desktop-link" to="/trending">
            Trending
          </Link>
        </li>
        <li className="desktop-item">
          <Link className="desktop-link" to="/categories">
            Categories
          </Link>
        </li>
      </ul>
      <div onClick={() => setShowMobile(true)} className="burger-div">
        <img
          className="burger-img"
          src="./assets/images/icon-menu.svg"
          alt=""
        />
      </div>
      <MobileMenu showMobile={showMobile} setShowMobile={setShowMobile} />
    </nav>
  );
};

export default Navbar;
