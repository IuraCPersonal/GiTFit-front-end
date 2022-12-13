import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';


import userPhoto from "../../assets/img/userPhoto.jpg"


export default function CoachSearchElement() {

let history = useHistory();

const redirectClientPage = () => {
    history.push('/client')
}

  return (

    <div className="clientsWrapper">
        <div className="clientsHeader"><h1>Results</h1></div>
        <div className="clientsList">
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Username</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Username</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Username</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Username</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Username</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
        </div>
    </div>
  );
}