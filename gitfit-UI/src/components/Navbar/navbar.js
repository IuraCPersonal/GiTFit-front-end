import React from 'react';
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
  
const Navbar = ({toggle}) => {

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
          <NavLink to='/payments' activeStyle>
            Payments
          </NavLink>
          <NavLink to='/settings' activeStyle>
            Logged in <br/> Jacob Jones
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