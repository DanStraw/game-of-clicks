import React, { Component } from 'react';
import './App.css';
import banners from './components/banners.json';
import GameTitle from './components/GameTitle/';
import Directions from './components/Directions/';
import Scorecard from './components/Scorecard/';
import ImageBox from './components/ImageBox/';

class App extends Component {
  state ={
    banners: banners,
    score: 0,
    topScore: 0,
    directions: 'Click a banner to begin',
    messageId: 'continue-div'
  }
  shuffle = () => {
      banners.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({ banners: banners });
  }
  checkIfClicked = (clicked, id) => {
      const banners = this.state.banners;
      switch(clicked) {
          case false:
              banners.map(banner => {
                  switch(banner.id) {
                      case id:
                          console.log(banner.name)
                          banner.clicked = true;
                          break;
                      default:
                          break;
                  }
              })
              this.updateCurrentScore()
              break;
          case true:
              this.setState({ directions: 'You already clicked that banner. Round over. Click again to start a new round', messageId: 'wrong-div'})
              this.reset();
              break;
          default:
              break;
      }
  }
  updateCurrentScore = () => {
      this.setState({ score: this.state.score + 1, directions: 'Click a different banner to keep the round going!', messageId: 'continue-div' });
      this.updateHighScore();
  }
  updateHighScore = () => {
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
        this.checkIfAllBannersClicked();
      } else {
        this.shuffle();
      }
  }
  checkIfAllBannersClicked = () => {
    if (this.state.score === 15) {
      this.setState({directions: 'You clicked all the banners! Click again to start a new round', messageId: 'complete-div'})      
      this.reset()
    } else {
      this.shuffle();
    }
  }
  reset = () => {   
      this.state.banners.map(banner => {
          banner.clicked = false;          
      })
      this.setState({ score: 0 })
      this.shuffle();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row justify-content-around">
            <GameTitle />
            <Directions message={this.state.directions} id={this.state.messageId}/>
            <Scorecard currentScore={this.state.score} highScore={this.state.topScore} />
          </div>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <div className="gameboard col-9">
              {this.state.banners.map(banner =>
                <div key={banner.id} onClick={() => this.checkIfClicked(banner.clicked, banner.id)} >
                  <ImageBox setClicked={banner.clicked}                        
                      image={banner.image} 
                      name={banner.name}
                      action={this.shuffle}
                  />
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
