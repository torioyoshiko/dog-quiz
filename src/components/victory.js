import React, {Component} from 'react';
import './css/victory.css'
import Button from "./button";

class Victory extends Component {

    render() {
        return (
            <div className='background'>
                <div className='info-question'>
                    <p className='win'>You won!</p>
                    <p className='win-info'>You are a true dog connoisseur!</p>
                    <div className='buttons'>
                        <Button onClick={this.props.startOver}>Play again</Button>
                        <Button>Share</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Victory;