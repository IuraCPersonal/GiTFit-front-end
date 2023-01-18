import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import ClientsElement from "../../components/Clients/ClientsElement"

export default function ClientsPage(props) {

  const [user, setUser] = useState(props.location.state.user);

  useEffect(() => {
    console.log(user);
  }, []);
  
    return (
      <div style={{backgroundColor: "#131F2B"}}>
          <Route>
            <Navbar
              user = {user}
              role={user.roles[0]}
              id={user.id}
            />
            <Sidebar/>
          </Route>
          <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "15%"}}>
            <ClientsElement
              user = {user}
              role={user.roles[0]}
              id={user.id}
            />
          </div>
      </div>
    );
  }
  