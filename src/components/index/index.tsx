import React from "react";
import Header from "../header/header";
import Rules from "../rules/rules";
import { useState } from "react";
import "./index.css";

export default function Game(){
    const [visible, invisible] = useState(true);

    return(
      <section className="main">
        <Header/>
        <div className="pop"><Rules  visible={visible} invisible={invisible}/></div>
        <button className="button" onClick={()=>{invisible(true)}}>RULES</button>
      </section>
    )
}