import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import {BiCommentEdit} from 'react-icons/bi'
import userPhoto from "../../assets/img/userPhoto.jpg"
import dayjs from 'dayjs'

import { getUserDataByID, getStatsByID } from "../../util/ApiUtils";


import './ClientPageElement.css';

export default function ClientPageElement(id, client) {

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [oldDate, setDate] = useState(new Date());
    const [date, setNewFormatDate] = useState(currentDate);
    const [toggle, setToggle] = useState(false)
    const [coach, setCoach] = useState("")
    const [stats, setStats] = useState("")


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
        setNewFormatDate(dayjs(newDate).format('YYYY-MM-DD'))
        console.log(dayjs(newDate).format('YYYY-MM-DD'))

        getStatsByID("4", dayjs(newDate).format('YYYY-MM-DD')).then(response=>{
            setStats(response)
            //setSugestions(response.suggestions)
            console.log("here", response)
            console.log(stats)
            //if (!response.ok){throw new Error ('Bad Response');} 
            //else { return response.json()};
        }).catch(error => {
            // if in a loop can also log which url failed;
            console.log('error made: ', error);
         });
    }


    return (
        <div className="clientPageWrapper">
            <div className="left">
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={oldDate} /></div>

                <div className="clientLatestStats">
                    <div className="clientProfileWrapper">
                        <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                        <div className="clientUsername">{id.client.username}</div>
                        <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>{id.client.name} {id.client.lastName}</div>
                    </div>
                </div>
            </div>
            
            <div className="clientPageStatsWrapper">
                <div className="clientPageDate">{date}</div>
                <div className="clientPageStats">
                    <div className="ClientPageStatName">Weight</div>
                    <div className="clientPageStatValue">{stats.weight}</div>

                    <div className="ClientPageStatName">Height</div>
                    <div className="clientPageStatValue">{stats.height}</div>

                    <div className="ClientPageStatName">Fat Ratio</div>
                    <div className="clientPageStatValue">{stats.fatRatio}</div>

                    <div className="ClientPageStatName">Diet</div>
                    <div className="clientPageStatValue">{stats.diet}</div>

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