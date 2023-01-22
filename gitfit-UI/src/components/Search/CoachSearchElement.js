import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";

import userPhoto from "../../assets/img/userPhoto.jpg"

import { sendRequest, getCoachByID } from "../../util/ApiUtils";


export default function CoachSearchElement({id, coaches}) {

let history = useHistory();

const handleClick = (e) => {
    /*history.push({pathname: '/coach-page', state: {user: user, coachId: e.currentTarget.id}});*/
    sendRequest(e.currentTarget.id).then((response) => {
        console.log(response);
    })
}

const handleCoachClick = (e) => {
    getCoachByID(e.currentTarget.id).then(response=>{
        history.push({pathname: "/coach-page", state: {id: id, coach: response}});    
    })
}

  return (

    <div className="clientsWrapper">
        <div className="clientsHeader"><h1>Results</h1></div>
        <div className="clientsList">

        {coaches.map(coach => {
            return (
                <div className="clientElement"  id={coach.id} onClick={handleCoachClick}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">{coach.username}</div>
                <div className="clientName">{coach.name} {coach.lastName}</div>
                <button style={{width: "90%"}} id={coach.id} onClick={handleClick}> Connect </button>
            </div>
            )
        })}

            
        </div>
    </div>
  );
}