import React from 'react';
import './Game.css';
import Stage from '../stage/Stage.js';

class Game extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            questionID: this.props.questionID,
            categoryID: this.props.categoryID,
            questionsLoaded: false,
            question: null
        };
        

        this.handleNextQuestionClick = this.handleNextQuestionClick.bind(this);
        this.nextCategory = this.nextCategory.bind(this);
    }

    componentDidMount() {
        fetch("http://quiz-manager.local/category/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.categories = result;
                    this.setState({
                        questionsLoaded: true,
                        question: this.getQuestion(this.state.questionID, this.state.categoryID)
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.questionID === -1 && nextState.finalScoreboard !== true) {
            return false;
        }
        return true;
    }

    getQuestion(questionID, categoryID) {
        return this.categories[categoryID].questions[questionID];
    }

    nextQuestion() {
        this.setState({
            categoryID: this.state.categoryID,
            questionID: this.state.questionID + 1,
            question: this.getQuestion(this.state.questionID + 1, this.state.categoryID)
        });
        
    }

    nextCategory() {
        var nextCategory = this.state.categoryID + 1;
        if (Object.keys(this.categories).length <= nextCategory) {
            nextCategory = false;
        }
        this.setState({
            categoryID: nextCategory,
            questionID: -1,
            question: false
        });
        return nextCategory;
    }

    handleNextQuestionClick(i) {
        this.nextQuestion();
    }

    render() {
        if (!this.state.questionsLoaded) {
            return "LOADING!";
        } else {
            return (
                <div>
                    <Stage question={this.state.question} nextCategory={this.nextCategory}/>
                    <button className="square" onClick={() => this.handleNextQuestionClick()}>
                        Next Question
                    </button>
                </div>
            )
        }
        
    }
}

export default Game;