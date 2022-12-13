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

  
const Navbar = ({toggle}) => {

  const [clientLastName, setClientLastName] = React.useState([]);
  const [clientFirstName, setClientFirstName] = React.useState([]);


  useEffect(() => {
    getClient().then((response) => {
      console.log(response);
      setClientLastName(response[0].lastName);
      setClientFirstName(response[0].name);
   })
  }, []);

  let history = useHistory();

  const redirectSignUpPage = () => {
    history.push('/sign-up')
  }

  return (
    
    <>
      <Nav>
        <Bars onClick={toggle}/>
        <NavLogo to='/about'>GiTFit</NavLogo>
        <NavMenu>
        <NavLink to='/about' activeStyle>
            Main
          </NavLink>
          <NavLink to='/clients' activeStyle>
            Clients
          </NavLink>
          <NavLink to='/settings' activeStyle>
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