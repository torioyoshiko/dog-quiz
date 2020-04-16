import React, {Component} from 'react';
import './css/question.css'
import Button from "./button";

class Question extends Component {

    render() {
        return (
            <div className='question-background'>
                <div className='info-question'>
                    <p className='question-number'>{this.props.questionNumber}/16</p>
                    <p>Which breed is this dog?</p>
                </div>
                <img className='breedImg' alt='doge' src={this.props.question.url}/>
                <div className='buttons'>
                    {this.props.question.breeds.map((breed) =>
                        <Button
                            onClick={() => this.props.onQuestionAnswered(breed)}
                            key={breed}
                        >
                            {breed}
                        </Button>)
                    }
                </div>
            </div>
        )
    }
}

export default Question;