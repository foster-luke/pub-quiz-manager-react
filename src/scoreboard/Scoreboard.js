import React from 'react';
import './Scoreboard.css';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: null,
            scoresLoaded: false
        }
        this.nextCategoryId = this.props.nextCategory();
    }

    componentDidMount() {
        fetch("http://quiz-manager.local/score/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.scores = result;
                    this.setState({
                        scoresLoaded: true,
                        scores: JSON.stringify(this.scores)
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

    renderFinalScoreboard() {
        return ("Final SCORE!");
    }

    sortScores() {
        var scores = JSON.parse(this.state.scores);
        scores = scores.sort(function (a, b) {
            return b.score - a.score;
        });
        return scores;
    }

    renderScoreboard() {
        if (this.state.scoresLoaded) {
            var scores = this.sortScores();
            
            return (
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((score, index) => {
                            return  (
                               <tr key={index}>
                                <td>{index + 1} </td>
                                <td>{score.teamName}</td>
                                <td>{score.score}</td>
                               </tr>
                            )
                        })}
                    </tbody>
                </table>
            );
        } else {
            return ("Loading...");
        }
    }


    render() {
        return this.renderScoreboard();
    }
}

export default Scoreboard;