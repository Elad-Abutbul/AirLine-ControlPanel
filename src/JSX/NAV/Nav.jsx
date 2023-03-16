import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navBar.css";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navBar">
      <div className="navBar__menu" onClick={handleMenuClick}>
        <div className={`navBar__menu-line ${showMenu && "open"}`} />
        <div className={`navBar__menu-line ${showMenu && "open"}`} />
        <div className={`navBar__menu-line ${showMenu && "open"}`} />
      </div>
      <div className={`navBar__links ${showMenu && "open"}`}>
        <Link to={"/controlPanel"} className="navBar__link" onClick={handleLinkClick}>
          <button className="btnNavBar">Home Page</button>
        </Link>
        <Link to={"/addFly"} className="navBar__link" onClick={handleLinkClick}>
          <button className="btnNavBar">Add Fly</button>
        </Link>
        <Link to={"/deleteFly"} className="navBar__link" onClick={handleLinkClick}>
          <button className="btnNavBar">Delete Fly</button>
        </Link>
        <Link to={"/sort"} className="navBar__link" onClick={handleLinkClick}>
          <button className="btnNavBar">Sort Fly</button>
        </Link>
        <Link to={"/"} className="navBar__link" onClick={handleLinkClick}>
          <button className="btnNavBar">EXIT</button>
        </Link>
      </div>
    </nav>
  );
}
