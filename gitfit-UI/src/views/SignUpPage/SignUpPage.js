import React , {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import SignUpElement from "../../components/SignUp/SignUpElement"


export default function SignUpPage() {

  return (
    <div style={{backgroundColor: "#131F2B"}}>
      <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "10%"}}>
        <SignUpElement/>
      </div>
    </div>
  );
}
