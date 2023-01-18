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

  
const Navbar = ({id}) => {

  const [clientLastName, setClientLastName] = React.useState([]);
  const [clientFirstName, setClientFirstName] = React.useState([]);

  const [firstText, setFirstText] = React.useState([]);
  const [firstLink, setFirstLink] = React.useState([]);
  const [secondLink, setSecondLink] = React.useState([]);
  const [role, setUserRole] = React.useState([]);
  const [user, setUser] = React.useState([]);



  useEffect(() => {
    getUserDataByID(id).then((response) => {
      setUser(response)
      setUserRole(response.userRole.name)
      setClientLastName(response.lastName);
      setClientFirstName(response.name);
    })
    /*console.log(id)*/
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
    history.push({pathname: '/about', state: {user: user}});
  }

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