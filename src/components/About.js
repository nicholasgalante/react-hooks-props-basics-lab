import React from "react";
// import user from "../data/user";
import Links   from "./Links";

function About(props) {
  function getBio(){
    if(props.bio){
      return (
        <p>{props.bio}</p>
      ) 
    } else {
      return (
        null
      )
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {getBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;

//links={props.links}