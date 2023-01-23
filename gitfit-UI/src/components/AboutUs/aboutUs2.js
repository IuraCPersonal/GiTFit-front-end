import React , {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import './aboutUs.css';
import RunningImage from "../../assets/img/runningathletegradient.jpg"
import postImage1 from "../../assets/img/postimage1.jpg"
import postImage2 from "../../assets/img/postimage2.jpg"
import postImage3 from "../../assets/img/postimage3.jpg"

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md"

export default function AboutUsElement() {
  return (

    <div>
      <div className="wrapper">
      <div className="box headerGrid">
        <img className="homeScreenImage" draggable="false" src={RunningImage} alt="Running Athlete"/>
        <div className="box headerText">
          <h1 style = {{fontSize: "50px"}}>Start Gitting Fit now and keep track of your goals</h1>
        </div> </div>
      <div className="box blog"><h1>Newsletter</h1></div>
      <div className="box content">
        <div className= "box postGrid">
          <div className= "postImagee"><img className="postImage" src={postImage1} alt="doing nothing"/></div>
          <div className= "postTitle">Not Doing Anything All Day Makes You Fat - Study Shows</div>
        </div>
        <div className= "box postGrid">
          <div className= "postImagee"><img className="postImage" src={postImage2} alt="getting bigger"/></div>
          <div className= "postTitle">We're Sizing Up! Important Update Coming This December</div>
        </div>
        <div className= "box postGrid">
          <div className= "postImagee"><img className="postImage" src={postImage3} alt="arnold"/></div>
          <div className= "postTitle">Fitness Legend Endorses GiTFit: "I wish I had this back in my day"</div>
        </div>
      </div>
        <div className="box footer">
          <div className="box footerTitle"><h1 style={{fontSize: "40px"}}>Keep in touch</h1></div>
          <div className= "footerContent">
            <div className= "footerIcon">  <IoCall style = {{height: "2em", width: "1.5em"}}/></div>
            <div className= "footerContactName">Give Us A Call</div>
            <div className= "footerContactData">+373 699 999 99</div>
          </div>
          <div className= "footerContent">
            <div className= "footerIcon"> <MdEmail style = {{height: "2em", width: "1.5em"}}/></div>
            <div className= "footerContactName">Write Us An Email</div>
            <div className= "footerContactData">alma.lawson@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
