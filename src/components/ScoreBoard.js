import React, {useState} from 'react';

function ScoreBoard() {
    let [score, setScore] = useState(0);

    return <div>{score}</div>
}

export default ScoreBoard ;