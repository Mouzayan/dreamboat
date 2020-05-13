import React from "react";
import { Link } from "react-router-dom";

export default function ShowEncounters(props) {
  // debugger
  return (
    <div>
      <h3>Encounters</h3>
      {props.encounters.map((encounter) => (
        <React.Fragment key={encounter.id}>
          <Link to={`/encounters/${encounter.id}`}>
            {encounter.encounter_description}
          </Link>
          <button
            onClick={() => {
              props.history.push(`/encounters/${encounter.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.handleEncounterDelete(encounter.id);
            }}
          >
            Delete
          </button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/user/encounters/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
