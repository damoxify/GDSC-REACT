import React from "react";
import { useState } from "react";

function FeedbackItem() {
const [rating, setRating] = useState(1);
const handleClick = () => {
    setRating ( (prev) => {
        return prev + 1;
    })
}

    return (
        <div>
            <div className="card">
                <div className="num-display">{rating}</div>
                <div className="text-display">This is an example of state in react</div>
                <button onClick={handleClick}>click</button>


            </div>

        </div>
    )
}

export default FeedbackItem