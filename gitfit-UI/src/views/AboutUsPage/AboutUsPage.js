import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './aboutUs.css';



import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import AboutUsElement from "../../components/AboutUs/aboutUs2"


export default function AboutUsPage(props) {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    console.log('button clicked');
  };

  const [user, setUser] = useState(props.location.state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <div>
        <Route>
          <Navbar
            
            role={user.roles[0]}
            id={user.id}
          />
          <Sidebar/>
        </Route>
        <AboutUsElement
          role={user.roles[0]}
          id={user.id}
        />
      </div>
    </div>
  );
}
