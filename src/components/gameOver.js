import React from 'react';
import './css/gameOver.css';
import Button from './button';

const GameOver = (props) => (
  <div className="background">
    <div className="info-question">
      <p className="game-over">Game Over</p>
      <img alt="correctBreed" className="breedImg" src={props.correctImg} />
      <p className="breed-info">
        {`This dog is a ${props.correctBreed}`}
      </p>
      <Button onClick={props.startOver}>Play again</Button>
    </div>
  </div>
);

export default GameOver;
