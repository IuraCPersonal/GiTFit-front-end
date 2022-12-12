import React , {useState} from "react";
import Calendar from 'react-calendar'
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import userPhoto from "../../assets/img/userPhoto.jpg"


import './CoachPageElement.css';


export default function CoachPageElement() {
    return(

        <div className="CoachUserPageWrapper">
            <div className="CoachUserPageLeft">
                <div className="clientProfileWrapper">
                    <div className="profilePhoto"><img className="photo" src = {userPhoto}></img></div>
                    <div className="clientUsername">wade887</div>
                    <div className="clientName" style = {{fontWeight: 900, paddingLeft: "5px"}}>Wade Warrens</div>
                </div>
            </div>

            <div className="CoachUserPageRight">
                a
            </div>
        </div>
    );
}