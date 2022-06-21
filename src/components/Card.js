import React from "react";
// import star from "../images/star.png";

export default function Card(props) {
    
    let badgeText = "";
    
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <section className="card--container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt="Card" className="card--image"/>
            <div className="card--image-legend">
                <img src="../images/star.png" alt="Rating:" className="card--star" />
                <span className="card--rating">{props.stats.rating}</span>
                <span className="card--review-count">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / person</p>
        </section>
    );
}