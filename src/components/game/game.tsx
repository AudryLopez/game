import React from "react";
import  "./game.css"
import { useState, useEffect } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import "../index/logic.js";

export default function game(){
  const [score, setscore] = useState(0);
  const [seleted, seseleted] = useState<string>();
  const [result, setresult] = useState<string>();
  const [select, setselect] = useState<any>();
  const [show, setshow] = useState<boolean>(true);
  const types:any = { rock, paper, scissors };

  const myshow = () =>{
    setselect(false);
    setshow(true);
  }  
  function resulted(seleted:string){
    const rules = {
      paper: "rock" ,
      scissors: "paper" ,
      rock: "scissors" 
    }
    const answer = ["paper", "scissors", "rock"];
    const number = answer[Math.floor(Math.random() * 3)];
    let myresult: string = "";

    if (number === seleted) {
      return({myresult: "YOU WIN", number});
    } else {
      return({myresult: "YOU LOSE", number});
    }
  } 

  useEffect(()=>{
    if(select){
      const { myresult, number } = resulted(select);
      seseleted(number);
      setresult(myresult);
      setshow(false);
    }
  });

  return(
    <section className="container">
      {show ?
        <section className="select">
          <div className="circle paper" onClick={()=>setselect("paper")}>
            <img className="icons" src={paper}  alt="paper" />
          </div>
          <div className="circle scissors" onClick={()=>{setselect("scissors")}}>
            <img className="icons" src={scissors} alt="scissors" />
          </div>
          <div className="circle rock" onClick={()=>{setselect("rock")}}>
            <img className="icons" src={rock}  alt="rock" />
          </div> 
        </section>
        :
        <section className="results">
          <div className={`circle ${select}`}>
            <img className="icons" src={types[`${select}`]}  alt={select} />
          </div>
          <div className={`circle ${seleted}`} >
            <img className="icons" src={types[`${seleted}`]} alt={seleted} />
          </div>
          <button className="again" onClick={myshow}>Play Again</button>
        </section>
      }
    </section>
  )
}