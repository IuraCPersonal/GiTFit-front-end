import React , {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './aboutUs.css';



import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import AboutUsElement from "../../components/AboutUs/aboutUs2"


export default function AboutUsPage() {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Route>
          <Navbar/>
          <Sidebar/>
        </Route>
        <AboutUsElement/>
      </div>
    </div>
  );
}
