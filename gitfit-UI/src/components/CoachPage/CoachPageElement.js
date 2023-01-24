import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import dayjs from 'dayjs';
import moment from 'moment'

import userPhoto from "../../assets/img/userPhoto.jpg"


import './CoachPageElement.css';
import { getClientByID, getCoachByID, sessionSchedule, addBillingDetails} from "../../util/ApiUtils";


export default function CoachPageElement(id) {

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [oldDate, setDate] = useState(new Date());
    const [date, setNewFormatDate] = useState(currentDate);
    const [toggle, setToggle] = useState(false)
    const [coach, setCoach] = useState("")
    const [isCoach, setIsCoach] = useState(false)
    const [coachSchedule, setCoachSchedule] = useState([])


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
                    setCoachSchedule(response.scheduledSessions)
                    console.log(coachSchedule)
                })
            }
        })
        const billingRequest = {
            town: "Chisinau",
            street: "Cahul",
            countryCode: "MD",
            iban: "MD24 AG00 0225 1000 1310 4168",
            postCode: "MD-2005"
        }
        addBillingDetails(billingRequest).then((resp) => {
            console.log(resp)
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
        if (window.confirm(`Are you sure you wish to schedule a session with ${coach.name} ${coach.lastName} on ${date} at ${scheduleHour}:00?`)) {
           // const date = `${date}${scheduleHour}:00:00.411Z`
            const coachId = coach.id
            const hours = 1
            const scheduleRequest = {
                coachId,
                date: `${date} ${scheduleHour}:00`,
                //date: `${date} ${scheduleHour}:00:00.411Z`,
                hours
            }
            sessionSchedule(scheduleRequest).then((resp) => {
                console.log(resp)
            })
            console.log(scheduleRequest)
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