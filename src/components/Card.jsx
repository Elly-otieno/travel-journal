import React from "react";
import image from "../assets/images/location.svg";

function Card(props) {
  console.log(props);
  return (
    <section>
      <div className="card">
        <img src={props.item.coverImg} alt="image" className="cover-img" />
        <div className="container">
          <div className="content">
            <img src={image} alt="location" className="location-img" />
            <h2>{props.item.country}</h2>
            <a href={props.item.link}>View on Google Maps</a>
          </div>
          <div className="main-content">
            <h1>{props.item.name}</h1>
            <h3>{props.item.dateVisited}</h3>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
      <hr className="line" />
    </section>
  );
}

export default Card;
