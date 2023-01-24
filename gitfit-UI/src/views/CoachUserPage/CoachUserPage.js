import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import CoachUserPageElement from "../../components/CoachUser/CoachUserPageElement"

export default function CoachUserPage(props) {

    const [id, setId] = useState(props.location.state.id);   
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
              role={"COACH"}
            />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <CoachUserPageElement
              id={id}
            />
          </div>
      </div>
    );
  }
  