import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
    return (
        <main>
            <img src={photoGrid} alt="Photo Grid of Online Experiences"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    );
}