import React from 'react';
import Question from '../question/Question.js';
import Scoreboard from '../scoreboard/Scoreboard.js';

class Stage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scoresCalculated: false
        }
        this.handleScoresCalculatedClick = this.handleScoresCalculatedClick.bind(this);
    }

    renderQuestion() {
        return (<Question question={this.props.question} />);
    }

    renderScoreboard(nextCategory) {
        return (<Scoreboard nextCategory={nextCategory} />);
    }


    handleScoresCalculatedClick() {
        this.setState({
            scoresCalculated: true
        });
    }

    renderCalculatingWarning() {
        return (<div>
            Calculating Scores...
            <br />
            <button onClick={() => this.handleScoresCalculatedClick()} />
        </div>);
    }

    render() {
        return (
            <div className="stage">
                {(this.props.question === undefined)
                    ? (this.state.scoresCalculated === false)
                        ? this.renderCalculatingWarning()
                        : this.renderScoreboard(this.props.nextCategory)
                    : this.renderQuestion()
                }
            </div>
        );
    }
}

export default Stage;