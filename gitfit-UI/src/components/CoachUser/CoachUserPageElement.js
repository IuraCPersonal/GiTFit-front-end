import React , {useState} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import {AiFillPlusCircle} from 'react-icons/ai'
import userPhoto from "../../assets/img/userPhoto.jpg"

import './CoachUserPageElement.css';


export default function CoachPageElement() {

    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        console.log('form submitted');
    };

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const [toggle, setToggle] = useState(false)

    return (
        <div className="coachPersonalPageWrapper">
            <div className="left">
                <div className="coachDetails">
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>About me</div>
                    <div>I am a coach and here is something interesting about my activity.</div>
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>Rate per hour</div>
                    <div className="hourRate">8$</div>
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>Gym Adress</div>
                    <div>Str Stefan cel mare 225, Chisinau, Moldova</div>
                    <div style={{paddingTop:'20px', paddingBottom:'20px'}}><button  onClick={() => setToggle(!toggle)}>Edit</button></div>

                    {toggle && (
                        <form onSubmit={handleSubmit}>
                          <div className="coachDetailsForm">

                            <div><label>
                                <div> About Me</div>  
                                <input style={{height: "50px"}}  type="text" name="AboutMe" placeholder="Something about your activity as a coach"/>
                            </label></div>

                            <div><label>
                                <div> Rate per hour (in dollars)</div>  
                                <input style={{height: "50px"}} type="text" name="RatePerHour" placeholder="$"/>
                            </label></div>

                            <div style = {{ gridColumn: "2", gridRow: "2"}}><label>
                                <div>Gym address</div>  
                                <input style={{height: "50px"}} type="text" name="GymAdress" placeholder="Gym Adress"/>
                            </label></div>

                            <div>
                                <input  type="submit" value="Submit" onClick={() => setToggle(!toggle)} style={{width: "172px", height: "56px"}}/>
                            </div>

                          </div>
                          
                        </form>       
                    )}
                </div>

            </div>
            
            <div className="clientPageStatsWrapper">
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={date} /></div>
                <div className="clientPageDate">{date.toDateString()}</div>
                <div className="coachPersonalSessions">
                    <div>
                    <Link to='/client'><div className="clientElement" style={{padding: "10px"}}>
                            <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                            <div className="clientStatus">Username</div>
                            <div className="clientName">Wade Warrens</div>
                            <div className="clientLastRecord" style={{color:"#2F80ED"}}>Session at 12:30 AM. <br/>Duration: 60 min</div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}