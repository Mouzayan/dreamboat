import React from "react";
import { Link } from "react-router-dom";

import ShowUsers from "./ShowUsers";

export default function UserLanding(props) {
  return (
    <React.Fragment>
      
      <>
          <ShowUsers
          {...props}
          
            users={props.users}
          currentUser={props.currentUser}
          
      
          
          />
        </>

      


      {/* {props.currentUser ? (
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
      )} */}
    </React.Fragment>
  );
}
