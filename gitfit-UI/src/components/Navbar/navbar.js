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

import {getClient} from "../../util/ApiUtils";

  
const Navbar = ({toggle, role, id}) => {

  const [clientLastName, setClientLastName] = React.useState([]);
  const [clientFirstName, setClientFirstName] = React.useState([]);

  const [firstText, setFirstText] = React.useState([]);
  const [firstLink, setFirstLink] = React.useState([]);
  const [secondText, setSecondText] = React.useState([]);
  const [secondLink, setSecondLink] = React.useState([]);



  useEffect(() => {
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
   console.log(role);
  }, []);

  let history = useHistory();

  const redirectSignUpPage = () => {
    history.push('/sign-up')
  }

  return (
    
    <>
      <Nav>
        <Bars onClick={toggle}/>
        <NavLogo to='/about' /*state={{ user: "occupation" }}*/>GiTFit</NavLogo>
        <NavMenu>
        <NavLink to='/about' activeStyle>
            Main
          </NavLink>
          <NavLink to={firstLink} activeStyle>
            {firstText}
          </NavLink>
          <NavLink to={secondLink} activeStyle>
            Logged in <br/> Name Surname
        </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/*<NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        </NavBtn>*/}
      </Nav>
    </>
  );
};
  
export default Navbar;