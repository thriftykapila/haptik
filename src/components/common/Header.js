import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Slider
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        Task
      </NavLink>
    </nav>
  );
};

export default Header;
