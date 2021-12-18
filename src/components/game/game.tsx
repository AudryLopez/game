import React from "react";
import  "./game.css"
import Rules from "../rules/rules";
import { useState } from "react";

export default function Game(){
    const [visible, invisible] = useState(true);

    return(
        <section className="main">
          <header className="main header">
            <div className="image" ></div>
            <div className="score-card">
              <header className="title"></header>
              <footer className="score"></footer>
            </div>
          </header>
          <Rules visible={visible} invisible={invisible}/> 
          <div> <button className="button" onClick={()=>{invisible(true)}}>RULES</button></div>
        </section>
    )
}