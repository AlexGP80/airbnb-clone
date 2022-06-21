import React from "react";
// import star from "../images/star.png";

export default function Card(props) {
    
    let badgeText = "";
    
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <section className="card--container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} alt="Card" className="card--image"/>
            <div className="card--image-legend">
                <img src="../images/star.png" alt="Rating:" className="card--star" />
                <span className="card--rating">{props.item.stats.rating}</span>
                <span className="card--review-count">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><strong>From ${props.item.price}</strong> / person</p>
        </section>
    );
}