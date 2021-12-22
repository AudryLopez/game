import React from "react";
import Header from "../header/header";
import Rules from "../rules/rules";
import Game from "../game/game"
import { useState } from "react";
import "./index.css";

export default function index(){
    const [visible, invisible] = useState(false);

    return(
      <section className="main">
        <Header/>
        <Game/>
        <Rules visible={visible} invisible={invisible}/>
        <button className="button" onClick={()=>{invisible(true)}}>RULES</button>
      </section>
    )
}