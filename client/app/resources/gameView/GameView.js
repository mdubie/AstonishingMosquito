import React from 'react';
import Game from '../../../game/Game.js';
import {GameOverModal, LoadingModal} from '../stateless/Modals.js';
import ScoreView from '../stateless/ScoreView.js';
import SongQueueView from '../stateless/SongQueueView.js';
import { connection } from './GameModel';

class GameView extends React.Component {
  componentDidMount() {
    var game = new Game('game', this.props.params.fileName);
    this.game = game;
    game.addEventListener('updateTime', (newState, time) => {
      this.props.updateTime(time);
    });
    game.addEventListener('decrementLife', (newState) => {
      this.props.updateLives(newState.lives);
    });
    game.addEventListener('updateGameState', (newState, stateName) => {
      this.props.updateGameState(stateName);
    });
  }
  componentWillUnmount() {
    this.game.destroy();
  }
  render() {
    return (
      <div className="game-view">
        <ScoreView time={this.props.elapsed} duration={this.props.duration} lives={this.props.lives} stateName={this.props.stateName}/>
        <div id="game" />
        <SongQueueView fileName={this.props.params.fileName} title={this.props.location.search}/>
        <LoadingModal show={this.props.stateName === 'LOADING'} />
        <GameOverModal status={this.props.stateName}/>
      </div>
    );
  }
}

export default connection(GameView);
