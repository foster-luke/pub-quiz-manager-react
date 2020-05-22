import React from 'react';
import './Question.css';

class Question extends React.Component {


    render() {
        if (this.question === false) {
            return false;
        }

        return (
            <div className="question">
                <div className="body">
                    {this.props.question.body}
                </div>
                <div className="points">
                    {this.props.question.points}
                </div>
                <div className="helpText">
                    {this.props.question.help ?? ''}
                </div>
            </div>
            
        )
    }
}

export default Question;