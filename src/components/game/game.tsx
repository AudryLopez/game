import React from "react";
import  "./game.css"
import { useState, useEffect } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

export default function Game(){
  const [score, setscore] = useState(0);
  const [result, setresult] = useState<string>();
  const [select, setselect] = useState<string>();
  const options = ["paper", "scissors", "rock"];


  useEffect(()=>{

  })

  return(
    <section className="container">
      {!select ?
        <>
          <div className="circle paper" onClick={()=>setselect("paper")}>
            <img className="icons" src={paper}  alt="paper" />
          </div>
          <div className="circle scissors" onClick={()=>{setselect("scissors")}}>
            <img className="icons" src={scissors} alt="scissors" />
          </div>
          <div className="circle rock" onClick={()=>{setselect("rock")}}>
            <img className="icons" src={rock}  alt="rock" />
          </div> 
        </>:
        <>
          <div className={`circle ${select}`}>
            {console.log(`../../images/icon-${select}.svg`)}
            <img className="icons" src={`../../images/icon-${select}.svg`}  alt={select} />
          </div>
          <div className="circle scissors" >
            <img className="icons" src={scissors} alt="scissors" />
          </div>
        </>
      }
    </section>
  )
}