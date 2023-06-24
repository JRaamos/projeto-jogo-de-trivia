import { Component } from 'react';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <button
          data-testid="btn-go-home"
        >
          <a href="/">Voltar</a>
        </button>
      </div>
    );
  }
}
