import React, { Fragment, useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Play all the games!
        </Link>
        <BurgerMenu openMenu={toggleMenu} />
      </nav>
      {showMenu && <Dropdown />}
    </React.Fragment>
  );
};

export default Navbar;