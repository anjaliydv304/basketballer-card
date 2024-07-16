import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <div>
          <p className="stat-label">Field Goal Percentage</p>
          <p className="stat-value">{stats.fieldGoalPercentage}%</p>
        </div>
        <div>
          <p className="stat-label">Three Point Percentage</p>
          <p className="stat-value">{stats.threePointPercentage}%</p>
        </div>
        <div>
          <p className="stat-label">Points Per Game</p>
          <p className="stat-value">{stats.pointsPerGame}</p>
        </div>
        <div>
          <p className="stat-label">Rebounds</p>
          <p className="stat-value">{stats.rebounds}</p>
        </div>
        <div>
          <p className="stat-label">Assists</p>
          <p className="stat-value">{stats.assists}</p>
        </div>
        <div>
          <p className="stat-label">Blocks</p>
          <p className="stat-value">{stats.blocks}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
