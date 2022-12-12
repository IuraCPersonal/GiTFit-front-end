import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './SignInElement.css';

import {login} from "../../util/ApiUtils";

export default function SignInElement() {

  
  let history = useHistory();

  const redirectSignUpPage = () => {
    history.push('/sign-up')
  }

  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const loginRequest = {
      email,
      password
    }
    console.log(loginRequest);
    login(loginRequest).then(response=>{
      if(response.accessToken){
        localStorage.setItem("accessToken",response.accessToken);
        history.push("/about");
      }
    })
  }

  return (

    <div>
      <div class="signInWrapper" style={{padding: "100px 20px 170px 20px"}}>
        <div class="signUpHeader"><h1>Sign In</h1></div>
        <div class="signInFields">
            <form class="signInForm">
                <div class="inputSignIn">
                    <input  className="formInput" type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email" />
                    <input  className="formInput" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password"  placeholder="Password" />
                </div>
                <div className="SignInFormButton">
                    <input type="submit" value="Go" onClick={handleSubmit}/>
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