import React from "react";

function Header({text}) {
    return (
        <div className="container">
            <h2>{text}</h2>
        </div>

    )
    }

    Header.defaultProps = {
        text:'FeedbackUI'
    }

export default Header