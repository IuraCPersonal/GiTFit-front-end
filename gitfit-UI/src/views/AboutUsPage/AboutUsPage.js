import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './aboutUs.css';



import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import AboutUsElement from "../../components/AboutUs/aboutUs2"

import { getUserDataByID } from "../../util/ApiUtils";

export default function AboutUsPage(props) {

  const [user, setUser] = useState(props.location.state.user);
  const [userData, setUserData] = useState("");
  const [userId, setUserId] = useState("");
  const [usrRole, setUserRole] = useState("");

  return (
    <div>
      <div>
        <Route>
          <Navbar
            id={props.location.state.user.id}
          />
        </Route>
        <AboutUsElement/>
      </div>
    </div>
  );
}
