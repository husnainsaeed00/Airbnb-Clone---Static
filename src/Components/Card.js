import React from "react";
import swim from './swim.png';
import Star from './Star.png';


export default function Card(){
    return(
        <div className="card">
            <img src={swim} alt="Swim" className="card--image"></img>
            <div className="card--stats">
                <img src={Star} alt="star"></img>
                <span>5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / Person</p>
        </div>
    )
}