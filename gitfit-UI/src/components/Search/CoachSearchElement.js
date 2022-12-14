import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';


import userPhoto from "../../assets/img/userPhoto.jpg"


export default function CoachSearchElement({user, coach}) {

let history = useHistory();

const redirectClientPage = () => {
    history.push({pathname: '/coach-page', state: {user: user}});
}

useEffect(() => {
    console.log("user");
    console.log(user);
  }, []);

  return (

    <div className="clientsWrapper">
        <div className="clientsHeader"><h1>Results</h1></div>
        <div className="clientsList">
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">{coach.username}</div>
                <div className="clientName">{coach.name} {coach.lastName}</div>
                <div className="clientLastRecord">{coach.aboutMe}</div>
            </div>
        </div>
    </div>
  );
}