import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import AboutCoachElement from "../../components/AboutCoach/AboutCoachElement"

export default function AboutCoachPage(props) {
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
              role={"COACH"}
            />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "30%"}}>
            <AboutCoachElement
              id={props.location.state.id}
              coach={props.location.state.coach}
            />
          </div>
      </div>
    );
  }
  