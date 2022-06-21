import React from "react";
// import star from "../images/star.png";

export default function Card(props) {
    return (
        <section className="card--container">
            <img src={`../images/${props.img}`} alt="Card" className="card--image"/>
            <div className="card--image-legend">
                <img src="../images/star.png" alt="Rating:" className="card--star" />
                <span className="card--rating">{props.rating}</span>
                <span className="card--review-count">({props.reviewCount}) • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / person</p>
        </section>
    );
}