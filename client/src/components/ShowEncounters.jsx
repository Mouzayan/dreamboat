import React from "react";
import { Link } from "react-router-dom";

import './ShowEncounters.css'

export default function ShowEncounters(props) {
  return (
    <div className="itemsDiv">
      <p className="itemsTitle">Encounters</p>
      {props.encounters.map((encounter) => (
        <React.Fragment key={encounter.id}>
          <div className="lnk-btns">
            <div className="itemLink">
          <Link  to={`/users/${encounter.user_id}/encounters/${encounter.id}`}>
            {encounter.encounter_description}
              </Link>
              </div>
          {props.currentUser.id === encounter.user_id && (
            <>
              
          <button className="btn edit"
            onClick={() => {
              props.history.push(`/encounters/${encounter.id}/edit`);
            }}
          >
            Edit
          </button>
          <button className="btn delete"
            onClick={() => {
              props.handleEncounterDelete(props.currentUser.id, encounter.id);
            }}
          >
              Delete
          </button>
            </>
            )
          }
            <br />
            </div>
        </React.Fragment>
    
        
      ))}
      <div className="create">
        <Link to="/user/encounters/new">
        <button className="btn">Create</button>
      </Link>
      </div>
      </div> 
  );
}
