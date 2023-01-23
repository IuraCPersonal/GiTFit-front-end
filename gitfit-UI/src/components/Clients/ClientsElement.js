import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './ClientsElement.css';

import userPhoto from "../../assets/img/userPhoto.jpg"
import { getPending, answerRequest } from "../../util/ApiUtils";


export default function ClientsElement(id) {

    let history = useHistory();

    const redirectClientPage = () => {
        history.push('/client')
    }

    useEffect(() => {
        getPending().then((response) => {
            console.log(response)
            setPending(response)
      })
    }, []);

    const handleAccept = event => {
        // 👇️ prevent page refresh
        //event.preventDefault();
        console.log('form submitted');
       /* answerRequest(event.currentTarget.id, 'ACCEPT').then(
            console.log('ok'),
            history.push({pathname: '/clients', state: {id: id.id}})
        )*/
    };

    const [toggle, setToggle] = useState(true)
    const [pending, setPending] = useState([])

  return (

    <div className="clientsWrapper">
        <div className="pendingHeader" onClick={() => setToggle(!toggle)} style={{cursor: "pointer"}}><h1>Your Requests</h1></div>
        {toggle && (<div className="pendingList">
        {pending.reverse().map(pendingRequest => {
            return (
            <div className="clientElement">
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Trainee</div>
                <div className="clientName">{pendingRequest.sourceUser.name} {pendingRequest.sourceUser.lastName}</div>
                <input style={{width: "90%"}} id={pendingRequest.id} type="submit" value="Accept" onClick={handleAccept} />
                {/*<button style={{width: "90%"}} id={pendingRequest.id} onClick={handleAccept}> Accept </button>*/}
            </div>
            )})}
        </div>)}

        <div className="clientsHeader"><h1>Your Clients</h1></div>
        <div className="clientsList">
            <div className="clientElement" onClick={redirectClientPage}>
                <div className="clientPhoto"><img className="photo" src = {userPhoto}></img></div>
                <div className="clientStatus">Trainee</div>
                <div className="clientName">Wade Warrens</div>
                <div className="clientLastRecord">Last Recorded Session on Dec 1 2022</div>
            </div>
        </div>
    </div>
  );
}