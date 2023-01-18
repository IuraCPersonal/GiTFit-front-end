import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './SignUpElement.css';

import {NAME_MAX_LENGTH,NAME_MIN_LENGTH,USERNAME_MIN_LENGTH,USERNAME_MAX_LENGTH,PASSWORD_MIN_LENGTH,PASSWORD_MAX_LENGTH,EMAIL_MIN_LENGTH,EMAIL_MAX_LENGTH} from "../../constants";
import { signup } from "../../util/ApiUtils";


export default function SignUpElement() {

  
  let history = useHistory();

  const [surname,setSurname] = React.useState("");
  const [firstName,setFirstName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [username,setUsername] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [birthday, setBirthday] = React.useState("2022-12-12");
  const [userType, setUserType] = React.useState("CLIENT")
  
  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      setUserType('COACH');
    } else {
      setUserType("CLIENT");
    }
    console.log(userType);
  };
  
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "surname"){
        setSurname(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }
    if (id ==="username") {
      setUsername(value);
    }
}


  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      const signUpRequest = {username, surname, firstName, email, password, birthday, userType}
      signup(signUpRequest).then(history.push({pathname: "/sign-in"}));
      /*console.log(username, surname, firstName, email, password, birthday, userType);*/
    }
  }



  return (

    <div>
      <div class="signUpWrapper">
        <div class="signUpHeader"><h1>Sign Up</h1></div>
        <form class="signUpForm">
          <div className="formFirstName formField">
            <label>
              <div classname="formInputName">First Name</div>
              <input  className="formInput" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" />
            </label>
          </div>
          <div className="formLastName formField">
            <label>
              <div classname="formInputName">Last Name</div>
              <input  className="formInput" type="text" value={surname} onChange = {(e) => handleInputChange(e)} id="surname" />
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Username</div>
              <input  className="formInput" type="text" value={username} onChange = {(e) => handleInputChange(e)} id="username" />
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Password</div>
              <input  className="formInput" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" />
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Repeat Password</div>
              <input  className="formInput" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" />
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Email</div>
              <input  className="formInput" type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" />
            </label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            /> 
            <div style = {{position: "relative", marginTop: "3px", marginLeft: "40px"}}>I would like to sign up as a coach</div>
          </div>
          <div className="formButton">
            <input type="submit" value="Go" onClick={handleSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
}