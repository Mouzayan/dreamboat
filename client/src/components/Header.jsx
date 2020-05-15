import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

export default function Header(props) {
  return (
    <div className="headerContainer">
    <header className="headerDiv">
      <Link to="/">
      <p className="homeLink">dreamboat</p> </Link>
      {props.currentUser? (
        <>
          <p className="userName">Hello {props.currentUser.username},</p>
          <button className="logout" onClick={props.handleLogout}>logout</button>
        </>
      ) : (
        <Link className="login" to="/login">login</Link>
      )} 
      </header>
      </div>
  );
}
