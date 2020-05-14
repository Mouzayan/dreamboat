import React from "react";
import { Link } from "react-router-dom";

import './ShowUsers.css'

export default function ShowUsers(props) {

  return (
    <div>
      <h3>Users</h3>
      {props.users.map((user) => (
        <React.Fragment key={user.id}>
          <Link className="mantra" to={`/users/${user.id}/encounters`}>
            
            {user.mantra}
          </Link>
          <img className="dreamScene" src={user.dream_scene}/>
        </React.Fragment>
      ))}



    </div>
  );
}


