import React from "react";



export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="Swim" className="card--image"></img>
            <div className="card--stats">
                <img src={props.img} alt="star"></img>
                <span>{props.rating}</span>
                <span className="gray">{props.revcount} . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / Person</p>
        </div>
    )
} 