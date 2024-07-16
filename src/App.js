import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';

function App() {
  const player = {
    name: 'LeBron James',
    image: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/c5r52rbifxn2srhp9no0',
    stats: {
      fieldGoalPercentage: 54.9,
      threePointPercentage: 36.2,
      pointsPerGame: 26.8,
      rebounds: 7.9,
      assists: 8.6,
      blocks: 1.1,
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
