import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';

import {getUserDataByID} from "../../util/ApiUtils";

  
const Navbar = ({toggle, user, role, id}) => {

  const [clientLastName, setClientLastName] = React.useState([]);
  const [clientFirstName, setClientFirstName] = React.useState([]);

  const [firstText, setFirstText] = React.useState([]);
  const [firstLink, setFirstLink] = React.useState([]);
  const [secondLink, setSecondLink] = React.useState([]);

  useEffect(() => {
    console.log(id)
    if (role === "COACH") {
      setFirstText("Clients")
      setFirstLink('/clients')
      setSecondLink('/my-page-coach')
    }
    else {
      setFirstText("Coach")
      setFirstLink('/coach-page')
      setSecondLink('/my-page-user')
    }
    getUserDataByID(id).then(response=>{
      setClientLastName(response.lastName);
      setClientFirstName(response.name);
    })
  }, []);

  let history = useHistory();

  const redirectFirstPage = () => {
    history.push({pathname: firstLink, state: {user: user, role: role, id: id}});
  }
  const redirectSecondPage = () => {
    history.push({pathname: secondLink, state: {user: user, role: role, id: id}});
  }
  const redirectMainPage = () => {
    history.push({pathname: '/about', state: {user: user, role: role, id: id}});
  }

  return (
    
    <>
      <div><Nav>
        
        <Bars onClick={toggle}/>
          <div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectFirstPage}>
            {firstText}
          </div>
          {/*<div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectMainPage}>
            Main
  </div>*/}
          <div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectSecondPage}>
            Logged in <br/> {clientFirstName} {clientLastName}
          </div>
      
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        {/*<NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        </NavBtn>*/}
      </Nav></div>
    </>
  );
};
  
export default Navbar;