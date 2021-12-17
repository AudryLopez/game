import React from "react";
import  "./game.css"
import Rules from "../rules/rules";
import { useState } from "react";

export default function Game(){
    const [Open, closed] = useState(true);

    return(
        <div>{!Open ? <Rules closed={closed}/> : <button className="button" onClick={()=>{closed(false)}}>RULES</button>}</div>
    )
}