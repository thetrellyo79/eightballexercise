import React, { useState } from "react";
import { answers } from "./EightBallMsg"


function EightBall() {
    const [msgText, setMsgText] = useState({
        msg: "Think of a Question.",
        color: "black",
      });

function randomMsg(e) { 
    return e[Math.floor(Math.random() * e.length)]
}

function circleClicker () {
    setMsgText(randomMsg(answers));
  }

    return (
        <div id="EightBall" 
        onClick={circleClicker} 
        style={{ backgroundColor: msgText.color }}>
            <b>{msgText.msg}</b>
        </div>
    )
    
}


export default EightBall;