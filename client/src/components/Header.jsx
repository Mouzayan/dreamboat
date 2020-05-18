import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

export default function Header(props) {
  return (
    <div className="headerContainer">

      <header>
        
      <div className="headerDiv">
      <Link to="/">
      <p className="homeLink">dreamboat</p> </Link>
      {props.currentUser? (
        <>
          <button className="logout" onClick={props.handleLogout}>logout</button>
        </>
      ) : (
        <Link className="login" to="/login">login</Link>
          )} 
        </div>

        <div className="headerUserNameDiv">
        {props.currentUser && (
     <p className="userName">Hello {props.currentUser.username},</p>     
      )}
</div>



      </header>
      
      </div>
  );
}
