import React from "react";
import logo from "../../assets/img/CLARUSWAY_LOGO.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Lesson Reminder</h1>
      </div>
    </>
  );
};

export default Header;
