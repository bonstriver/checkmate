import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { auth, db } from "./firebase";

function Home() {
  const { currentUser } = auth;
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const newGameOptions = [
    { label: "Black pieces", value: "b" },
    { label: "White pieces", value: "w" },
    { label: "Random", value: "r" },
  ];

  // async function startLocalGame(startingPiece) {
  // }

  function handlePlayOnline() {
    setShowModal(true);
  }

  async function startOnlineGame(startingPiece) {
    const member = {
      uid: currentUser.uid,
      piece:
        startingPiece === "r"
          ? ["b", "w"][Math.round(Math.random())]
          : startingPiece,
      name: localStorage.getItem("userName"),
      creator: true,
    };
    const game = {
      status: "waiting",
      members: [member],
      gameId: `${Math.random().toString(36).substr(2, 9)}_${Date.now()}`,
    };
    await db.collection("games").doc(game.gameId).set(game);
    history(`/game/${game.gameId}`);
  }

  return (
    <>
      <NavBar />
      <div className="body-container">
        <video
          src={require(`./assets/video-3.mp4`)}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <h1>YOUR MOVE</h1>
        <p>What are you waiting for?</p>
        <div className="body-btns">
          <a href="https://board-games.vercel.app/" className="a-btn2">
            LOCAL PLAY
          </a>
          <a onClick={handlePlayOnline} className="a-btn2">
            ONLINE PLAY
          </a>
        </div>
      </div>
      <div className={`modal ${showModal ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                Please select a side:
                            </div>

                        </div>
                        <footer className="card-footer">
                            {newGameOptions.map(({ label, value }) => (
                                <span className="card-footer-item pointer" key={value}
                                    onClick={() => startOnlineGame(value)}>
                                    {label}
                                </span>
                            ))}
                        </footer>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={() => setShowModal(false)}></button>
            </div>
    </>
  );
}

export default Home;
