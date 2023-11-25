import { Component } from "react";
import Quiz from "./Quiz";
import "./Home.css"; 

class Home extends Component {
  state = {
    isQuizStarted: false,
  };

  handlePlay = () => {
    this.setState({
      isQuizStarted: true,
    });
  };

  render() {
    const { isQuizStarted } = this.state;

    return (
      <div className="homepage">
        <h2>Quiz App</h2>
        {isQuizStarted ? (
          <Quiz />
        ) : (
          <button className="play-button" onClick={this.handlePlay}>
            Play
          </button>
        )}
      </div>
    );
  }
}

export default Home;
