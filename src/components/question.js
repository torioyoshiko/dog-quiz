import React from 'react';
import './css/question.css';
import Button from './button';

const Question = (props) => (
  <div className="question-background">
    <div className="info-question">
      <p className="question-number">
        {props.questionNumber}
        /16
      </p>
      <p>Which breed is this dog?</p>
    </div>
    <img className="breedImg" alt="doge" src={props.question.url} />
    <div className="buttons">
      {props.question.breeds.map((breed) => (
        <Button
          onClick={() => props.onQuestionAnswered(breed)}
          key={breed}
        >
          {breed}
        </Button>
      ))}
    </div>
  </div>
);

export default Question;
