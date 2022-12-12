import React , {useState} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import userPhoto from "../../assets/img/userPhoto.jpg"


import './CoachPageElement.css';


export default function CoachPageElement() {

    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return(

        <div className="CoachUserPageWrapper">
            <div className="CoachUserPageLeft">

                <div className="clientProfileWrapper">
                    <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                    <div className="clientUsername">wade887</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>Wade Warrens</div>
                </div>

                <div className="coachPersonalInfo">Schedule a Session With Ronald</div>
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={date} /></div>

            </div>

            <div className="CoachUserPageRight">
                <div className="coachPageAvailability">Availability</div>
                <div className="availabilityList">
                    <div className="availabilityDate">22 dec 2022, 10:00 AM</div>
                    <div className="availabilityDate">22 dec 2022, 10:00 AM</div>
                    <div className="availabilityDate">22 dec 2022, 10:00 AM</div>
                </div>
            </div>
        </div>
    );
}