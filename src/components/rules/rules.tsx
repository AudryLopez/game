import { useState } from "react";
import "./rules.css";
import close from "../../images/icon-close.svg";
import rules from "../../images/image-rules.svg";

export default function Rules(props: any){


  return(
    <section className="card">
      <header className="header">
        <h1 className="title">RULES</h1>
        <img className="icon" src={close} onClick={()=>{props.closed(true)}} />
      </header>
      <div className="rules">
        <img className="img" src={rules}/>
      </div>
    </section>
  )
}