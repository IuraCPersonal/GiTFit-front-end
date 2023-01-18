import React, {useEffect, useState, useLayoutEffect} from 'react';
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
import { BiFirstAid } from 'react-icons/bi';

  
const Navbar = ({id, role}) => {

  const [clientLastName, setClientLastName] = React.useState([]);
  const [clientFirstName, setClientFirstName] = React.useState([]);

  const [firstText, setFirstText] = React.useState([]);
  const [firstLink, setFirstLink] = React.useState([]);
  const [secondLink, setSecondLink] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [userRole, setUserRole] = React.useState(role);



  useEffect(() => {
    getUserDataByID(id).then((response) => {
      if (userRole != "COACH" && userRole != "CLIENT") {
        setUserRole(response.userRole.name)
      }
      setUser(response)
      //setUserRole(response.userRole.name)
      setClientLastName(response.lastName);
      setClientFirstName(response.name);
    })
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
  }, []);

  let history = useHistory();

  const redirectFirstPage = () => {
    history.push({pathname: firstLink, state: {id: id}});
  }
  const redirectSecondPage = () => {
    history.push({pathname: secondLink, state: {id: id}});
  }
  const redirectMainPage = () => {
    history.push({pathname: '/about', state: {user: user, role: role}});
  }

  if (role === null) return null

  return (
    
    <>
      <div><Nav>        
          <div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectFirstPage}>
            {firstText}
          </div>
          <div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectMainPage}>
            Main
          </div>
          <div style={{color: "white", cursor: "pointer", paddingTop: "30px"}} onClick={redirectSecondPage}>
            Logged in <br/> {clientFirstName} {clientLastName}
          </div>
      </Nav></div>
    </>
  );
};
  
export default Navbar;