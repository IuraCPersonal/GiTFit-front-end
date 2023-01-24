import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import {BiCommentEdit} from 'react-icons/bi'
import userPhoto from "../../assets/img/userPhoto.jpg"
import dayjs from 'dayjs'

import { getUserDataByID, getStatsByID, postReviewbyID } from "../../util/ApiUtils";

export default function ClientPageElement(id, coach) {

    const[currentCoach, setCoach] = useState(id.coach[0])

    useEffect(() => {
        console.log(currentCoach)
    }, []);

    
    return (
    
        <div className="coachPersonalPageWrapper">
            <div className="left">
                <div className="coachDetails">
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>About me</div>
                    <div>{currentCoach.aboutMe}</div>
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>Rate per hour</div>
                    <div className="hourRate">{currentCoach.ratePerHour}</div>
                </div>
            </div>        
            <div className="clientElement">
                  <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                  <div className="clientStatus" >{currentCoach.username}</div>
                  <div className="clientName" >{currentCoach.name} {currentCoach.lastName}</div>
            </div>    
        </div>
    );
}