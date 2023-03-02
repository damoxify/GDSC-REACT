import React from "react";
import { useState } from "react";

function FeedbackItem () {
    const [rating, setRating] = useState(1)
    const handleclick = () => {
        setRating( (prev) => {
            return (prev) + 1;
        })
    }
    return (
        <div>
            <div className="card">
                <div className="num-display">{rating}</div>
                <div className="text-display">This is an example of using states in react</div>
                <button onClick={handleclick}>click</button>
            </div>
        </div>
    )
}

export default FeedbackItem