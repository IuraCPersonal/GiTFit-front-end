import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';


import userPhoto from "../../assets/img/userPhoto.jpg"

import { sendRequest } from "../../util/ApiUtils";


export default function CoachSearchElement({user, coach}) {

let history = useHistory();

const handleClick = (e) => {
    /*history.push({pathname: '/coach-page', state: {user: user, coachId: e.currentTarget.id}});*/
    sendRequest(e.currentTarget.id).then((response) => {
        console.log(response);
    })
}

/*useEffect(() => {
    console.log("user");
    console.log(user);
  }, []);*/

  return (

    <div className="clientsWrapper">
        <div className="clientsHeader"><h1>Results</h1></div>
        <div className="clientsList">
            <div className="clientElement"  id={coach.id}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">{coach.username}</div>
                <div className="clientName">{coach.name} {coach.lastName}</div>
                <button style={{width: "90%"}} id={coach.id} onClick={handleClick}> Connect </button>
            </div>
        </div>
    </div>
  );
}