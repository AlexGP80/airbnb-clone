import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const cardComponents = data.map(card => 
        <Card
            img={`../images/${card.coverImg}`}
            title={card.title}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            price={card.price}
        />);

    return (
        <div className="container">
            <Navbar />
            <Hero />
            {cardComponents}
        </div>
    );
}