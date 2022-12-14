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

  useEffect(() => {
    console.log(user.roles[0])
    getUserDataByID(user.id).then((response) => {
      setUserId(response.id)
      setUserRole(response.userRole.name)
      console.log(usrRole)
   })
}, []);

  return (
    <div>
      <div>
        <Route>
          <Navbar
            user={user}
            role={usrRole}
            id={userId}
          />
        </Route>
        <AboutUsElement
          role={usrRole}
          id={userId}
        />
      </div>
    </div>
  );
}
