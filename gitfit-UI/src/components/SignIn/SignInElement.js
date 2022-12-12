import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './SignInElement.css';

export default function SignInElement() {

  
  let history = useHistory();

  const redirectSignUpPage = () => {
    history.push('/sign-up')
  }

  const redirectMainPage = () => {
    history.push('/about')
  }

  return (

    <div>
      <div class="signInWrapper" style={{padding: "100px 20px 170px 20px"}}>
        <div class="signUpHeader"><h1>Sign In</h1></div>
        <div class="signInFields">
            <form class="signInForm">
                <div class="inputSignIn">
                    <input  className="formInput" type="text" name='username' placeholder="Username" />
                    <input  className="formInput" type="password" name='password' placeholder="Password" />
                </div>
                <div className="SignInFormButton">
                    <input type="submit" value="Go" onClick={redirectMainPage}/>
                </div>
            </form>
            <div className="registerLink" onClick={redirectSignUpPage}>
                Don't have an account yet? SIgn-up!
            </div>
        </div>
      </div>
    </div>
  );
}