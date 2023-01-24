import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import {BiCommentEdit} from 'react-icons/bi'
import userPhoto from "../../assets/img/userPhoto.jpg"

import { getUserDataByID } from "../../util/ApiUtils";


import './ClientPageElement.css';

export default function ClientPageElement(id, client) {

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [toggle, setToggle] = useState(false)
    const [coach, setCoach] = useState("")
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        console.log("HERE")
        console.log("id", id.id)
        console.log("client", id.client)
        getUserDataByID(id.id).then((response) => {
            console.log(response)
            setCoach(response)
        })

    }, []);

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    return (
        <div className="clientPageWrapper">
            <div className="left">
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={date} /></div>

                <div className="clientLatestStats">
                    <div className="clientProfileWrapper">
                        <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                        <div className="clientUsername">{id.client.username}</div>
                        <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>{id.client.name} {id.client.lastName}</div>
                    </div>
                    <div className="latestStatsTitleWrapper">
                        <div style={{fontWeight: "700", fontSize: "37px"}}>{id.client.name}'s Latest Stats</div>
                        <div style={{fontWeight: "500"}}>as of {currentDate}</div>
                    </div>
                    <div className="clientPageStats">
                        <div className="ClientPageStatName">Weight-In</div>
                        <div className="clientPageStatValue">100 kg</div>

                        <div className="ClientPageStatName">Bodyfat Percentage</div>
                        <div className="clientPageStatValue">11 %</div>

                        <div className="ClientPageStatName">Max Bench Press</div>
                        <div className="clientPageStatValue">90 kg / 1 rep</div>
                    </div>
                </div>
            </div>
            
            <div className="clientPageStatsWrapper">
                <div className="clientPageDate">{date.toDateString()}</div>
                <div className="clientPageStats">
                    <div className="ClientPageStatName">Weight-In</div>
                    <div className="clientPageStatValue">100 kg</div>

                    <div className="ClientPageStatName">Bodyfat Percentage</div>
                    <div className="clientPageStatValue">11 %</div>

                    <div className="ClientPageStatName">Max Bench Press</div>
                    <div className="clientPageStatValue">90 kg / 1 rep</div>

                    <div className="ClientPageStatName">Max Bench Press</div>
                    <div className="clientPageStatValue">90 kg / 1 rep</div>

                    <div className="ClientPageStatName">Max Bench Press</div>
                    <div className="clientPageStatValue">90 kg / 1 rep</div> 

                    <div className="clientPageLeaveNote">
                        <div  onClick={() => setToggle(!toggle)}>
                        <div className="noteIcon"><BiCommentEdit style = {{height: "2em", width: "1.5em"}}/><div/>
                        <div className="noteText">Add a note to this session</div></div>
                    </div>

                    <div>
                    {toggle && (
                        <form>
                          <div className="notesFormInput">
                            <label>
                                <input type="text" name="note" style = {{height: "50px"}}/>
                            </label>
                          </div>
                          <div>
                            <input className="notesPostButton" type="submit" value="Post"/>
                          </div>
                        </form>                      
                    )}
                    </div>
                </div>
            </div>
            <div className="coachCommentWrapper">
                <div className="clientProfileWrapper">
                    <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                    <div className="clientUsername">{coach.username}</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>{coach.name} {coach.lastName}</div>
                </div>
                <div className="coachComment">
                    We’re also gonna try for a new Bench Press PR next time!!!
                </div>
            </div>
            </div>
        </div>
    );
}