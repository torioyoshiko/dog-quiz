import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Start from './components/start';
import Question from './components/question';
import getRandomIntInclusive from './utils/random';
import GameOver from './components/gameOver';
import Victory from './components/victory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      question: {
        breeds: [],
        url: '',
        correctBreed: '',
      },
      questionNumber: 1,
    };
    this.generateQuestion = this.generateQuestion.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const json = await response.json();
    const breedNames = Object.getOwnPropertyNames(json.message);
    this.setState({ breeds: breedNames });
    await this.generateQuestion();
  }

  generateQuestion = async () => {
    const randomBreeds = [];
    for (let i = 0; i < 4; i++) {
      let breed;
      do {
        const randomIndex = getRandomIntInclusive(0, this.state.breeds.length - 1);
        breed = this.state.breeds[randomIndex];
      } while (randomBreeds.includes(breed));
      randomBreeds.push(breed);
    }
    const indexCorrectBreed = getRandomIntInclusive(0, randomBreeds.length - 1);
    const correctBreed = randomBreeds[indexCorrectBreed];
    const response = await fetch(`https://dog.ceo/api/breed/${correctBreed}/images/random`);
    const json = await response.json();
    const correctBreedUrl = json.message;
    this.setState({
      question: {
        breeds: randomBreeds,
        url: correctBreedUrl,
        correctBreed,
      },
    });
  }

  onQuestionAnswered = (breed) => {
    if (breed === this.state.question.correctBreed) {
      this.setState((prevState) => ({ questionNumber: prevState.questionNumber + 1 }));
      this.generateQuestion();
      if (this.state.questionNumber === 16) {
        this.props.history.push('/victory');
      }
    } else {
      this.props.history.push('/gameover');
    }
  }

  startOver = async () => {
    this.setState({ questionNumber: 1 });
    await this.generateQuestion();
    this.props.history.push('/question');
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/question">
            <Question
              question={this.state.question}
              onQuestionAnswered={this.onQuestionAnswered}
              questionNumber={this.state.questionNumber}
            />
          </Route>
          <Route path="/gameover">
            <GameOver
              correctBreed={this.state.question.correctBreed}
              correctImg={this.state.question.url}
              startOver={this.startOver}
            />
          </Route>
          <Route path="/victory">
            <Victory startOver={this.startOver} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
