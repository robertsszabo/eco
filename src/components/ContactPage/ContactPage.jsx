import React from "react";
import getTeams from "./getTeams"
import Team from "./Team";

const teams = getTeams();

const style = {  
  height: "96vh",
  maxHeight: "96vh",
  width: "100vw",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  overflow:"hidden"
};

export default function ContactPage() {
  return (
    <div style={style}>
      {teams.map((team) => {
        return <Team team={team} />;
      })}
    </div>
  );
  
}
