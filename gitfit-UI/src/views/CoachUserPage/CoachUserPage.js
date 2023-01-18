import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import CoachUserPageElement from "../../components/CoachUser/CoachUserPageElement"

export default function CoachUserPage(props) {

    const[isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(props.location.state.user);
    const [role, setRole] = useState(props.location.state.role);
    const [id, setId] = useState(props.location.state.id);

    useEffect(() => {
      console.log(role)
    }, []);
  
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
              role={role}
              id={id}
            />
            <Sidebar/>
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <CoachUserPageElement
              user = {user}
              role={role}
              id={id}
            />
          </div>
      </div>
    );
  }
  