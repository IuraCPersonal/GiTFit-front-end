import React , {useState} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";

import {AiFillPlusCircle} from 'react-icons/ai'
import userPhoto from "../../assets/img/userPhoto.jpg"
import dayjs from 'dayjs';


import './ClientUserPageElement.css';

import { getCoachByName, getCoachByID, getStatsByID, postStatsbyID} from "../../util/ApiUtils";


export default function ClientPageElement(id) {

    const history = useHistory();
    const [dateOld, setDate] = useState(new Date());
    const [date, setNewFormatDate] = useState("");
    const [coachName, setCoachName] = useState("");
    const [coaches, setCoaches] = useState("");
    const [stats, setStats] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [fatRatio, setFatRatio] = useState("");
    const [diet, setDiet] = useState("");



    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
        setNewFormatDate(dayjs(newDate).format('YYYY-MM-DD'))
        console.log(dayjs(newDate).format('YYYY-MM-DD'))

        getStatsByID(id.id, dayjs(newDate).format('YYYY-MM-DD')).then(response=>{
            if (!response.ok){throw new Error ('Bad Response');} 
            else { return response.json()};
        })
        .then(data => { 
            // process data here or pass to processing function;    
            console.log(data)
        })
        .catch(error => {
           // if in a loop can also log which url failed;
           console.log('error made: ', error);
        });
    }

    const handleSubmit = event => {
        const postStatsRequest = {
            date,
            weight,
            height,
            fatRatio,
            diet
          }
        //event.preventDefault();
        console.log(postStatsRequest);
        setToggle(!toggle)
        postStatsbyID(id.id, postStatsRequest).then(response => {
            console.log("done")
        })
    };

    const handleCoachSearchSubmit = event => {
        event.preventDefault();
        const searchRequest = {name: coachName}
        //GET should not have body
        getCoachByName(coachName).then(response => {
            setCoaches(response);
            console.log(response);
            history.push({pathname: "/search", state: {id: id.id, coaches: response}});
        })
    }

    const handleInputChange = e => {
        const {id , value} = e.target;
        if(id === "coachName"){
            setCoachName(value);
        }
        if(id === "weight"){
            setWeight(value);
        }
        if(id === "height"){
            setHeight(value);
        }
        if(id === "fatRatio"){
            setFatRatio(value);
        }
        if(id === "diet"){
            setDiet(value);
        }
    };

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const [toggle, setToggle] = useState(false)

    return (
        <div className="clientPageWrapper">
            <div className="left">
                <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={dateOld} /></div>

                <div className="clientLatestStats"><div className="latestStatsTitleWrapper">
                        <div style={{fontWeight: "700", fontSize: "37px"}}>Your Coach</div>
                        <form>
                            <input style={{height: "50px"}} type="text" value={coachName} onChange = {(e) => handleInputChange(e)} id="coachName"  placeholder="Search coach"/>
                            {/*<button onClick={handleCoachSearchSubmit}>Search</button>*/}
                            <input type="submit" value="Search" onClick={handleCoachSearchSubmit} />
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="clientPageStatsWrapper">
                <div className="clientPageDate">{dateOld.toDateString()}</div>
                <div className="clientPageStats">
                    <div className="ClientPageStatName">Weight</div>
                    <div className="clientPageStatValue">100 kg</div>

                    <div className="ClientPageStatName">Height</div>
                    <div className="clientPageStatValue">11 %</div>

                    <div className="ClientPageStatName">Fat Ratio</div>
                    <div className="clientPageStatValue">90 kg / 1 rep</div>

                    <div className="ClientPageStatName">Diet</div>
                    <div className="clientPageStatValue">90 kg / 1 rep</div>

                    <div className="clientPageLeaveNote">
                        <div  onClick={() => setToggle(!toggle)}>
                        <div className="noteIcon"><AiFillPlusCircle style = {{height: "2em", width: "1.5em"}}/><div/>
                        <div className="noteText">Add a new stat</div></div>
                    </div>

                    <div>
                    {toggle && (
                        <form onSubmit={handleSubmit}>
                          <div className="enterStatForm">

                            <div style = {{ gridColumn: "1/ -1"}}><label>
                                <div> Weight</div>  
                                <input style={{height: "50px"}} value={weight} id='weight' type="text" name="weight" placeholder="kg" onChange = {(e) => handleInputChange(e)}/>
                            </label></div>

                            <div style = {{ gridColumn: "1/ -1"}}><label>
                                <div> Height </div>  
                                <input style={{height: "50px"}} value={height} id='height' type="text" name="height" placeholder="cm" onChange = {(e) => handleInputChange(e)}/>
                            </label></div>

                            <div style = {{ gridColumn: "1", gridRow: "3"}}><label>
                                <div> Fat Ratio</div>  
                                <input style={{height: "50px"}} value={fatRatio} id='fatRatio' type="text" name="fatRatio" placeholder="%" onChange = {(e) => handleInputChange(e)}/>
                            </label></div>

                            <div style = {{ gridColumn: "2", gridRow: "3"}}><label>
                                <div>Diet</div>  
                                <input style={{height: "50px"}} value={diet} id='diet' type="text" name="diet" placeholder="Your Diet" onChange = {(e) => handleInputChange(e)}/>
                            </label></div>

                            <div>
                                <input  type="submit" value="Go" /*onClick={() => setToggle(!toggle)} */style={{width: "172px", height: "56px"}}/>
                            </div>

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