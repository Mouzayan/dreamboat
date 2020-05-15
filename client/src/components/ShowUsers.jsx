import React from "react";
import { Link } from "react-router-dom";

import './ShowUsers.css'

export default function ShowUsers(props) {

  return (
    <div className="usersContainer">
  

    
      <p className="usersTitle">view users</p>
      {props.currentUser && (
     <p className="userName">Hello {props.currentUser.username},</p>     
)}

      {props.users.map((user) => (
        <React.Fragment key={user.id}>

<div className="imageMantra">

          <Link className="mantra" to={`/users/${user.id}/encounters`}>
            
            '{user.mantra}'
          </Link>
            <img className="dreamScene" src={user.dream_scene} />
            </div>
        </React.Fragment>
      ))}
  


    </div>
  );
}


