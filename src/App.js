import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      name: "Build Adventure",
      players: "1.2M",
      image: "🏗️",
      description: "Build your own world"
    },
    {
      id: 2,
      name: "Battle Royale",
      players: "890K",
      image: "⚔️",
      description: "Last player standing"
    },
    {
      id: 3,
      name: "Speed Run",
      players: "650K",
      image: "🏃",
      description: "Race against time"
    },
    {
      id: 4,
      name: "Tower Defense",
      players: "430K",
      image: "🏰",
      description: "Defend your base"
    },
    {
      id: 5,
      name: "Parkour Master",
      players: "320K",
      image: "🤸",
      description: "Extreme obstacles"
    },
    {
      id: 6,
      name: "Zombie Survival",
      players: "280K",
      image: "🧟",
      description: "Survive horde"
    }
  ];

  return (
    <div className="App">
      <header className="game-header">
        <div className="logo">
          <span className="logo-text">BLOX</span>
          <span className="logo-games">GAMES</span>
        </div>
      </header>

      <main className="game-main">
        <section className="hero-section">
          <h1 className="hero-title">Choose Your Game</h1>
          <p className="hero-subtitle">Join millions of players in amazing adventures</p>
        </section>

        <section className="games-grid">
          {games.map(game => (
            <div 
              key={game.id} 
              className={`game-card ${selectedGame === game.id ? 'selected' : ''}`}
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="game-image">{game.image}</div>
              <div className="game-info">
                <h3 className="game-name">{game.name}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-stats">
                  <span className="player-count">👥 {game.players} playing</span>
                </div>
              </div>
              <button className="play-button">
                {selectedGame === game.id ? 'SELECTED' : 'PLAY'}
              </button>
            </div>
          ))}
        </section>

        <section className="menu-section">
          <div className="menu-buttons">
            <button className="menu-btn primary">🎮 Continue</button>
            <button className="menu-btn secondary">🛒 Shop</button>
            <button className="menu-btn secondary">👥 Friends</button>
            <button className="menu-btn secondary">⚙️ Settings</button>
          </div>
        </section>
      </main>

      <footer className="game-footer">
        <div className="footer-nav">
          <button className="nav-btn">🏠 Home</button>
          <button className="nav-btn">🎯 Games</button>
          <button className="nav-btn">👕 Avatar</button>
          <button className="nav-btn">💬 Chat</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
