import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h1>dreamboat</h1>
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
