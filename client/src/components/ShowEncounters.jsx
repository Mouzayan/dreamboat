import React from "react";
import { Link } from "react-router-dom";

export default function ShowEncounters(props) {
 
  // debugger
  return (
    <div>
      <h3>Encounters</h3>
      {props.encounters.map((encounter) => (
        <React.Fragment key={encounter.id}>
          <Link to={`/users/${encounter.user_id}/encounters/${encounter.id}`}>
            {encounter.encounter_description}
          </Link>
          {props.currentUser.id === encounter.user_id && (
            <>
          <button
            onClick={() => {
              props.history.push(`/encounters/${encounter.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
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
        </React.Fragment>
      ))}
      <Link to="/user/encounters/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
