import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import ShowUsers from "./ShowUsers";

export default function UserLanding(props) {
  return (
    <React.Fragment>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />

      {props.currentUser ? (
        <>
          <ShowUsers
            {...props}
            users={props.users}
            currentUser={props.currentUser}
          />
        </>
      ) : (
        <>
          <p>find your ultimate catch</p>

          <Link to="/sign-up">SIGN UP</Link>
        </>
      )}
    </React.Fragment>
  );
}
