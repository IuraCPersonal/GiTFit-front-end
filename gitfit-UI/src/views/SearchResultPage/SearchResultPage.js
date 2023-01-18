import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import CoachSearchElement from "../../components/Search/CoachSearchElement"

export default function SearchResultsPage(props) {
  

    const[isOpen, setIsOpen] = useState(false);
   /* const [results, setResults] = useState(props.location.state.name.results);*/
    const [user, setUser] = useState(props.location.state.user);
    const [coaches, setCoaches] = useState(props.location.state.coaches)
  
    /*useEffect(() => {
      console.log("user");
      console.log(coaches);
    }, []);*/

    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
             user = {user}
             role={user.role}
             id={user.id}
             />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "15%"}}>
            <CoachSearchElement
             user={user}
             coach={coaches}
             />
          </div>
      </div>
    );
  }
  