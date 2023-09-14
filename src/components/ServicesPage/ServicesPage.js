import React from "react";
import getServices from "./getServices"
import Service from "./Service";

const services = getServices();

const style = {
  height: "96vh",
  maxHeight: "96vh",
  width: "100vw",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflowX:"hidden",
  overflowY:"scroll",
  scrollSnapType:"y mandatory",  
  scrollBehavior: "smooth",
};

export default function ServicesPage() {
  return (
    <div className="servicesContainer" style={style}>
      {services.map((service) => {
        return <Service service={service} />;
      })}
    </div>
  );
}
