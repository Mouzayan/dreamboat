import React from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function Home(props) {
  const history= useHistory()
  return (

    <React.Fragment> 

      {props.currentUser ? 
history.push("/users/:id")
   : (
          <>
        <p>find your ultimate catch</p>
          
            <Link to="/sign-up">SIGN UP</Link>
        </> 
      )}
    </React.Fragment>  
  );
}
