import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ showMobile, setShowMobile }) => {
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide"}>
      <div className="close-row">
        <img
          className="close-icon"
          onClick={() => setShowMobile(false)}
          src="./assets/images/icon-menu-close.svg"
          alt=""
        />
      </div>
      <ul className="mobile-links">
        <li className="mobile-item">
          <Link to="/" className="mobile-link">
            Home
          </Link>
        </li>
        <li className="mobile-item">
          <Link to="/new" className="mobile-link">
            New
          </Link>
        </li>
        <li className="mobile-item">
          <Link to="/popular" className="mobile-link">
            Popular
          </Link>
        </li>
        <li className="mobile-item">
          <Link to="/trending" className="mobile-link">
            Trending
          </Link>
        </li>
        <li className="mobile-item">
          <Link to="/categories" className="mobile-link">
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
