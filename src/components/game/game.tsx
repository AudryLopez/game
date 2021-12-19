import React from "react";
import  "./game.css"
import { useState, useEffect } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

export default function Game(){
  const [score, setscore] = useState(0);
  const [result, setresult] = useState();

  return(
    <section className="container">
      <div className="circle paper">
        <img className="icons" src={paper} alt="paper" />
      </div>
      <div className="circle scissors">
        <img className="icons" src={scissors} alt="scissors" />
      </div>
      <div className="circle rock">
        <img className="icons" src={rock} alt="rock" />
      </div>
    </section>
  )
}