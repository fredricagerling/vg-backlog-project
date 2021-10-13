import React, { Fragment, useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };

  const closeDropdown = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Play all the games!
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className={"nav-item"}>
            <Link
              to="/finished"
              className="nav-links"
              onClick={closeDropdown}
            >
              Finished <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/backlog"
              className="nav-links"
              onClick={closeDropdown}
            >
              Backlog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/wishlist"
              className="nav-links"
              onClick={closeDropdown}
            >
              Wishlist
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
