import { Component } from "react";
import "./Quiz.css";

class Quiz extends Component {
  render() {
    return (
      <div className="parent-div">
        <div className="main-container">
          <div className="question-container">
            <div className="question-number">1 of 15</div>
            <h3>Question</h3>
            <p>Which is the only mammal that can jump?</p>
          </div>
          <div className="option-container">
            <div className="option-parent">
              <div className="option">Dog</div>
              <div className="option">Elephant</div>
            </div>
            <div className="option-parent">
              <div className="option">Goat</div>
              <div className="option">Lion</div>
            </div>
          </div>
          <div className="button-container">
            <button className="quiz-button previous">Previous</button>
            <button className="quiz-button next">Next</button>
            <button className="quiz-button quit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
