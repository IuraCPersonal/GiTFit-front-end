import React, {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import ClientUserPageElement from "../../components/ClientUser/ClientUserPageElement"

export default function ClientUserPage(props) {

    const[isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(props.location.state.user);

  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    const handleClick = () => {
      console.log('button clicked');
    };
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              user = {user}
              role={user.role}
              id={user.id}
            />
            <Sidebar/>
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <ClientUserPageElement
              user = {user}
              role={user.role}
              id={user.id}
            />
          </div>
      </div>
    );
  }
  