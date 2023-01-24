import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import dayjs from 'dayjs';

import userPhoto from "../../assets/img/userPhoto.jpg"


import './CoachPageElement.css';
import { getClientByID, getCoachByID } from "../../util/ApiUtils";


export default function CoachPageElement(id) {

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [oldDate, setDate] = useState(new Date());
    const [date, setNewFormatDate] = useState(currentDate);
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [toggle, setToggle] = useState(false)
    const [coach, setCoach] = useState("")
    const [isCoach, setIsCoach] = useState(false)


    useEffect(() => {
        console.log(date)
        console.log(times)
        console.log(id.id)
        //getClientByID()
        getClientByID(id.id).then((response) => {
            console.log(response)
            if (response.coaches.length === 0) {
                setCoach("")
                setIsCoach(false)
            }
            else {
                setCoach(response.coaches[0])
                setIsCoach(true)

                getCoachByID(response.coaches[0].id).then((resp) => {
                    console.log(resp)
                })
            }
        })

    }, []);

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
        setNewFormatDate(dayjs(newDate).format('YYYY-MM-DD'))
        console.log(dayjs(newDate).format('YYYY-MM-DD'))
    }

    const handleSchedule = event => {
        //Add get Coach by ID!
        const scheduleHour = event.currentTarget.id
        if (window.confirm(`Are you sure you wish to schedule a session with trainer name on ${date} at ${scheduleHour}:00?`)) {
            console.log("scheduled", date, scheduleHour)
        } 
    };

    return(

        <div className="CoachUserPageWrapper">
            <div className="CoachUserPageLeft">

                <div className="clientProfileWrapper">
                    <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                    <div className="clientUsername">{coach.email}</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>{coach.name} {coach.lastName}</div>
                </div>

                <div className="coachPersonalInfo">Schedule a Session With {coach.name}</div>
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={oldDate} /></div>

            </div>

                <div className="CoachUserPageRight">
                    <div className="coachPageAvailability">Availability {date}</div>
                {times.map((time) => {
                    return (
                    <div className="availabilityList" key={time}>
                        <div className="availabilityDate" id={time} onClick={handleSchedule}>{date}, {time}:00</div>
                    </div>
                   );
                   
                })}
                </div>
        </div>
    );
}