import React from "react";


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

    </React.Fragment>
  );
}
