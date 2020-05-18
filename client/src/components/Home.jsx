import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Hero from './Hero'

import './Home.css'

export default function Home(props) {
  const history= useHistory()
  return (

    <React.Fragment> 

      {props.currentUser ? 
    history.push("/users/:id")
        : (
          
          <div className="centered">
          <div className="splashText">
              <p className="positioning">find your ultimate</p>
              <div className="splashText2">
              <p className="positioning2">catch</p>
            <Link className="signUp" to="/sign-up">SIGN UP</Link>
            </div> 
            </div>
            </div>
          
          )}
      
    </React.Fragment>  
  );
}
