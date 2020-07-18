import React from "react";

const Navbar = ({ sum }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <span>{sum}</span>
    </nav>
  );
};

export default Navbar;
