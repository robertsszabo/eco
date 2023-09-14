import React from "react";
import "./Team.css";

export default function Team({ team }) {
    const { location, imageSource } = team;
  return (
    <div className="teamContainer">
      <div className="teamCity" >{location} </div>
      <img className="locationImage" src={imageSource} alt="buzilettel" />
    </div>
  );
}
