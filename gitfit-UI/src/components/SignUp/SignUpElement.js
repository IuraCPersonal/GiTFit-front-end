import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './SignUpElement.css';

export default function SignUpElement() {

  
  let history = useHistory();

  const redirectSignUpPage = () => {
    history.push('/about')
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked)
  };

  return (

    <div>
      <div class="signUpWrapper">
        <div class="signUpHeader"><h1>Sign Up</h1></div>
        <form class="signUpForm">
          <div className="formFirstName formField">
            <label>
              <div classname="formInputName">First Name</div>
              <input  className="formInput" type="text" name="first-name"/>
            </label>
          </div>
          <div className="formLastName formField">
            <label>
              <div classname="formInputName">Last Name</div>
              <input  className="formInput" type="text" name="first-name"/>
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Username</div>
              <input  className="formInput" type="text" name="first-name"/>
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Password</div>
              <input  className="formInput" type="password" name="first-name"/>
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Repeat Password</div>
              <input  className="formInput" type="password" name="first-name"/>
            </label>
          </div>
          <div className="formField">
            <label>
              <div classname="formInputName">Email</div>
              <input  className="formInput" type="text" name="first-name"/>
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
            <input type="submit" value="Go" onClick={redirectSignUpPage}/>
          </div>
        </form>
      </div>
    </div>
  );
}