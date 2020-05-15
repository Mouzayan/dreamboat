import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <Link to="/">
      <h1>dreamboat</h1> </Link>
      {props.currentUser? (
        <>
          <p>{props.currentUser.username}</p>
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )} 
    </header>
  );
}
