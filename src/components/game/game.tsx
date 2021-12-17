import React from "react";
import styles from "./game"
import Rules from "../rules/rules";
import { useState, useEffect } from "react";

export default function Game(){
    const [Open, closed] = useState(true);

    return(
        <div>{!Open ? <Rules closed={closed}/> : <button className="mybutton" onClick={()=>{closed(false)}}>RULES</button>}</div>
    )
}