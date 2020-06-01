import React from 'react';
import './Question.css';

class Question extends React.Component {


    render() {
        if (this.question === false) {
            return false;
        }

        return (
            <div className="question">
                <div className="points">
                    Points: {this.props.question.pointsText}
                </div>
                <div className="body">
                    {this.props.question.body}
                </div>
            </div>            
        )
    }
}

export default Question;