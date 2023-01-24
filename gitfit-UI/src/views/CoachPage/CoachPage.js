import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import CoachPageElement from "../../components/CoachPage/CoachPageElement"

export default function CoachPage(props) {

    const [id, setId] = useState(props.location.state.id);   
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
            />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <CoachPageElement
              id={props.location.state.id}
            />
          </div>
      </div>
    );
  }
  