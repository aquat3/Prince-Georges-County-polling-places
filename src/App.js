import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./About.jsx";

function App() {
  return (
    <div>
      <ul>
        <li className ="logo">
        <svg width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0829 10.0268L43.279 22.7459L15.4226 41.845L14.0829 10.0268Z" fill="#FF6347"/>
</svg>

        </li>
        <li>
          <a href="news.asp">Documentation</a>
        </li>
        <li>
          <a href="contact.asp">About</a>
        </li>
        <li>
          <a href="about.asp">Home</a>
        </li>
      </ul>
      <About />
    </div>
  );
}
export default App;
