import React from "react";
import star from "../images/star.png";
import cardImage from "../images/katie-zaferes.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <section className="card--container">
            <img src={cardImage} alt="Card Image" className="card--image"/>
            <div className="card--image-legend">
                <img src={star} alt="Rating:" className="card--star" />
                <span className="card--rating">5.0</span>
                <span className="card--review-count">(6) • USA</span>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--price"><strong>From $136</strong> / person</p>
        </section>
    );
}