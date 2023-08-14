import React from "react";

export default function Card(props){
    let badgeText
    if (props.item.openspots=== 0){
        badgeText='SOLD OUT'
    }else if (props.item.location==='Online'){
        badgeText='Online'
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="Swim" className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" alt="star" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">   {props.item.stats.revcount} . </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / Person</p>
        </div>
    );
}
