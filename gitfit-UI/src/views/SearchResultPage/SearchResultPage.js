import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import CoachSearchElement from "../../components/Search/CoachSearchElement"

export default function SearchResultsPage(props) {
  

    const[isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(props.location.state.id);
    const [coaches, setCoaches] = useState(props.location.state.coaches)

    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
             />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "15%"}}>
            <CoachSearchElement
              id={props.location.state.id}
              coaches={props.location.state.coaches}
             />
          </div>
      </div>
    );
  }
  