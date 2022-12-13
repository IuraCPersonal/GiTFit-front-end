import React, {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import CoachSearchElement from "../../components/Search/CoachSearchElement"

export default function SearchResultsPage(props) {

    const[isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState(props.location.state.name.results);

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    const handleClick = () => {
      console.log('button clicked');
    };
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar/>
            <Sidebar/>
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "15%"}}>
            <CoachSearchElement/>
          </div>
      </div>
    );
  }
  