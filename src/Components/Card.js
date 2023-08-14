import React from "react";

export default function Card(props){
    return (
        <div className="card">
            {!props.openSpots && <div className="card--badge">Sold Out</div>}
            <img src={props.img} alt="Swim" className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" alt="star" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">   {props.revcount} . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / Person</p>
        </div>
    );
}
