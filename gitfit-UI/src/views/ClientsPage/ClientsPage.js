import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import ClientsElement from "../../components/Clients/ClientsElement"
import { getPending } from "../../util/ApiUtils";

export default function ClientsPage(props) {

  const [id, setId] = useState(props.location.state.id); 

    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              id={props.location.state.id}
              role={"COACH"}
            />
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "15%"}}>
            <ClientsElement
              id={props.location.state.id}
            />
          </div>
      </div>
    );
  }
  