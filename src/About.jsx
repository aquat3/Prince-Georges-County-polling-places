/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Map from "./assets/map-icon.png";

function AboutRight() {
  return (
    <div className="about-right">
      <img src={Map} />
    </div>
  );
}

function AboutLeft() {
  return (
    <div className="about-left">
      <h1>About this Application</h1>
      <p>
        We’re a group of students many of whom live have lived in PG county and
We’re a group of students many of whom live have lived in PG county and 
        We’re a group of students many of whom live have lived in PG county and
        We’re a group of students many of whom live have lived in PG county and
        We’re a group of students many of whom live have lived in PG county and
        we’ve heard the residents pain points about needing a fast and reliable
        way to find their assigned and closest polliing placing!
      </p>
      <p>
        This application uses data provided by PG county to deliver the right
        experience to the PG county voter. We aim to help PG county voters plan
        a head by quickly locating thier polling places, make their election day
        a breeze.
      </p>
    </div>
  );
}
var NewComponent = React.createClass({
  render: function() {
    return (
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
});

function About() {
  return (
    <div className="about-container">
      <AboutLeft />
      <AboutRight />
    </div>
  );
}


export default About;
