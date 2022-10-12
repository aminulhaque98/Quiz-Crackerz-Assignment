import React from 'react';
import { Link } from 'react-router-dom';

const Homes = ({ quizTopic }) => {
    const { name, logo, id } = quizTopic;

    return (
        <div>
            <div className=''>
                <h3 className='absolute text-black-900 hover:text-white text-3xl mx-16 my-16'>{name}</h3>
                <Link to={`/home/${id}`}><button className='absolute mx-48 my-56 bg-sky-500/100 hover:bg-rose-900 text-3xl text-white p-2 rounded-lg'>Questions</button></Link>
            </div>
            <img className='static' src={logo} alt="" />

        </div>
    );
};

export default Homes;