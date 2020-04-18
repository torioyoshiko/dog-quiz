import React from 'react';
import './css/start.css';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="background">
      <h2>Who wants to be a dogellionaire?</h2>
      <p className="doge-info">
        It’s a quiz which will test your knowledge of dog breeds.
        You will be given an image of a dog and 4 answers.
        Let’s see how good are you at knowing your good boys and girls
      </p>
      <Link to="/question">
        <button type="submit">Start</button>
      </Link>
    </div>
  );
}

export default Start;
