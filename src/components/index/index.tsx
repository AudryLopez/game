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
        <Rules  visible={visible} invisible={invisible}/>
        <section className="game"></section>
        <button className="button" onClick={()=>{invisible(true)}}>RULES</button>
      </section>
    )
}