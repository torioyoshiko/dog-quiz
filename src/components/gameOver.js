import React, {Component} from 'react';
import './css/gameOver.css'
import Button from "./button";

class GameOver extends Component {

    render() {
        return (
            <div className='background'>
                <div className='info-question'>
                    <p className='game-over'>Game Over</p>
                    <img className='breedImg' src={this.props.correctImg}/>
                    <p className='breed-info'>This dog is a {this.props.correctBreed}</p>
                    <Button onClick={this.props.startOver}>Play again</Button>
                </div>
            </div>
        )
    }
}

export default GameOver;