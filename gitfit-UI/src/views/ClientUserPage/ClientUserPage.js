import React, {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import ClientUserPageElement from "../../components/ClientUser/ClientUserPageElement"

export default function ClientUserPage(props) {

    const[isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(props.location.state.id);   
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
            />
            <Sidebar/>
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <ClientUserPageElement
              id={props.location.state.id}
            />
          </div>
      </div>
    );
  }
  