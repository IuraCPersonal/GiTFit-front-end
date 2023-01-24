import React , {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import SignInElement from "../../components/SignIn/SignInElement"


export default function LogInPage() {

  return (
    <div style={{backgroundColor: "#131F2B"}}>
      <div style = {{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "10%"}}>
        <SignInElement/>
      </div>
    </div>
  );
}
