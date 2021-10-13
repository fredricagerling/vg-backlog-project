import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";

const Dropdown: React.FC = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div>
      <ul
        onClick={clickHandler}
        className={
          click ? "dropdown-menu open" : "dropdown-menu"
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  setClick(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
