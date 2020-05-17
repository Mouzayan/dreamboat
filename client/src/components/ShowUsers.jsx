import React from "react";
import { Link } from "react-router-dom";

import './ShowUsers.css'

export default function ShowUsers(props) {

  return (
    <>
    <p className="usersTitle">browse user scenes and headlines </p>
    <div className="usersContainer">

      

      {props.users.map((user) => (
        <React.Fragment key={user.id}>

<div className="imageMantra">
<div className="quotation">
             <q>
              <Link className="mantra" to={`/users/${user.id}/encounters`}>
            
              
                {user.mantra}
              
              </Link>
              </q>
              </div>
            <img className="dreamScene" src={user.dream_scene} />
            </div>
        </React.Fragment>
      ))}
  


      </div>
      </>
  );
}


