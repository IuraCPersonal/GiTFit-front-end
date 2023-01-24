import React , {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import { NavLink as Link } from 'react-router-dom';
import userPhoto from "../../assets/img/userPhoto.jpg"
import './CoachUserPageElement.css';
import { addCoachDetails, getCoachByID, getUserDataByID, getCoachSchedule } from "../../util/ApiUtils";
import dayjs from 'dayjs'
import moment from 'moment'



export default function CoachPageElement(id) {

    const[aboutMe,setAbout] = useState("");
    const[gymAddress,setAddress] = useState("");
    const[ratePerHour,setRatePerHour] = useState("");
    const[viewAbout, setViewAbout] = useState("");
    const[viewRatePerHour, setViewRatePerHour] = useState("");
    const[viewAddrress, setViewAddrress] = useState("");
    const [toggle, setToggle] = useState(false)
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [oldDate, setDate] = useState(new Date());
    const [date, setNewFormatDate] = useState(currentDate);
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        console.log(date)
        console.log(id.id)
        getCoachByID(id.id).then((response) => {
          setViewAbout(response.aboutMe);
          setViewAddrress(response.gymAddress);
          setViewRatePerHour(response.ratePerHour);
          setSchedule(response.scheduledSessions)
          console.log(response.scheduledSessions)
       })
    }, []);

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
        setNewFormatDate(dayjs(newDate).format('YYYY-MM-DD'))
        console.log(dayjs(newDate).format('YYYY-MM-DD'))
    }

    const handleSubmit = event => {
        event.preventDefault()

        const addDetailsRequest = {aboutMe, ratePerHour}
        addCoachDetails(addDetailsRequest)
        setViewAbout(aboutMe);
        setViewRatePerHour(ratePerHour);
    };

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "aboutMe"){
            setAbout(value);
        }
        if(id === "ratePerHour"){
            setRatePerHour(value);
        }
        if(id === "address"){
            setAddress(value);
        }
    }

    return (
        <div className="coachPersonalPageWrapper">
            <div className="left">
                <div className="coachDetails">
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>About me</div>
                    <div>{viewAbout}</div>
                    <div className="titleCoachPage"style={{fontWeight: "700", fontSize: "25px"}}>Rate per hour</div>
                    <div className="hourRate">{viewRatePerHour}$</div>
                    <div style={{paddingTop:'20px', paddingBottom:'20px'}}><button  onClick={() => setToggle(!toggle)}>Edit</button></div>

                    {toggle && (
                        <form>
                          <div className="coachDetailsForm">

                            <div><label>
                                <div> About Me</div>  
                                <input style={{height: "50px"}}  type="text"  onChange = {(e) => handleInputChange(e)} id="aboutMe" placeholder="Something about your activity as a coach" />
                            </label></div>

                            <div><label>
                                <div> Rate per hour (in dollars)</div>  
                                <input style={{height: "50px"}} type="text"  onChange = {(e) => handleInputChange(e)} id="ratePerHour" placeholder="$"/>
                            </label></div>
                            <div>
                                <input  type="submit" value="Submit" onClick={handleSubmit} style={{width: "172px", height: "56px"}}/>
                            </div>

                          </div>
                          
                        </form>       
                    )}
                </div>
                <div className="clientPageStatsWrapper" style={{marginTop: "20px"}}>
               {/* <div className="clientPageCalendar"><Calendar onChange={onDateChange} value={oldDate} /></div> */}
                </div>

            </div>
            
            <div className="clientPageStatsWrapper">
                {/*<div className="clientPageDate">{date}</div>*/}
                {schedule.reverse().map((ses) => {
                    return (<div className="coachPersonalSessions">
                
                    <div>
                    <div className="clientElement" style={{padding: "10px"}} >
                            <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                            <div className="clientStatus">{ses.client.email}</div>
                            <div className="clientName">{ses.client.name} {ses.client.lastName}</div>
                            <div className="clientLastRecord" style={{color:"#2F80ED"}}>Session on {moment(ses.dateAndTime).format('YYYY-MM-DD, HH:00')}</div>
                        </div>
                    </div>
                   
                </div> );
                })}
            </div>
        </div>
    );
}