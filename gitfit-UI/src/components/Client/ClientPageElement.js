import React , {useState} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import {BiCommentEdit} from 'react-icons/bi'
import userPhoto from "../../assets/img/userPhoto.jpg"


import './ClientPageElement.css';

export default function ClientPageElement() {

    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [toggle, setToggle] = useState(false)

    return (
        <div className="clientPageWrapper">
            <div className="left">
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={date} /></div>

                <div className="clientLatestStats">
                    <div className="clientProfileWrapper">
                        <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                        <div className="clientUsername">wade887</div>
                        <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>Wade Warrens</div>
                    </div>
                    <div className="latestStatsTitleWrapper">
                        <div style={{fontWeight: "700", fontSize: "37px"}}>Wade's Latest Stats</div>
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
                    <div className="clientUsername">wade887</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>Wade Warrens</div>
                </div>
                <div className="coachComment">
                    We’re also gonna try for a new Bench Press PR next time!!!
                </div>
            </div>
            <div className="coachCommentWrapper">
                <div className="clientProfileWrapper">
                    <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                    <div className="clientUsername">wade887</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>Wade Warrens</div>
                </div>
                <div className="coachComment">
                    Great job today! Congrats on hitting that new PR!!! Still need a little 
                    work on form though... We also need to lower our body fat, so for the 
                    next few weeks try to limit yourself to only black rice, chicken, 
                    legumes and raw eggs. No fats or oils of any kind.
                </div>
            </div>
            </div>
        </div>
    );
}