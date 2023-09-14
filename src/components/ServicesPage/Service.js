import React from "react";
import "./Service.css"

export default function Service({ service }) {
  const { name, imageSource,description } = service;
  return (
    <div className="serviceContainer">
      <div className="serviceName">{name}</div>
      <img src={imageSource} alt="buzilettel" />
      <div className="serviceDescription">{description}</div>
    </div>
  );
}
