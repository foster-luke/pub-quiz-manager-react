import React from 'react';
import Question from '../question/Question.js';
import Scoreboard from '../scoreboard/Scoreboard.js';

class Stage extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.question === undefined) {
            this.props.nextCategory = this.props.nextCategory;
        }
    }

    renderQuestion() {
        return (<Question question={this.props.question} />);
    }

    renderScoreboard(nextCategory) {
        return (<Scoreboard nextCategory={nextCategory} />);
    }

    render() {
        if (this.props.question === undefined) {
            return (this.renderScoreboard(this.props.nextCategory));
        } else {
            return(this.renderQuestion());
        }
    }
}

export default Stage;