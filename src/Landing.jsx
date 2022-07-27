import React from "react";
import "./App.css";
import { useNavigate } from 'react-router-dom'
import { NavBar } from './NavBar'

function Landing() {
  const history = useNavigate()

  return (
    <>
     <NavBar />
    <div className="body-container">
    <video src={require(`./assets/video-3.mp4`)} type="video/mp4" autoPlay loop muted />
      <h1>YOUR TURN</h1>
      <p>What are you waiting for?</p>
      <div className="body-btns">
        <a onClick={() => history('/game')} className="a-btn2">
            LET'S PLAY
        </a>
      </div>
    </div>
    </>
  );
}

export default Landing;
