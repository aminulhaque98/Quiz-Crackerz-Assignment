import React from 'react';

const Homes = ({ quizTopic }) => {
    console.log(quizTopic)
    return (
        <div>
            <h3>{quizTopic.name}</h3>
            <img src={quizTopic.logo} alt="" />
            <button>questions</button>
        </div>
    );
};

export default Homes;