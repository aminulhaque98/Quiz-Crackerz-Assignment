import React from 'react';

const Homes = ({ quizTopic }) => {
    console.log(quizTopic)
    return (
        <div>
            <div className=''>
                <h3 className='absolute text-black-900 hover:text-white text-3xl mx-16 my-16'>{quizTopic.name}</h3>
                <button className='absolute mx-48 my-56 bg-sky-500/100 hover:bg-rose-900 text-3xl text-white p-2 rounded-lg'>Questions</button>
            </div>
            <img className='static' src={quizTopic.logo} alt="" />

        </div>
    );
};

export default Homes;