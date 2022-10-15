import React from 'react';
import { Link } from 'react-router-dom';

const Homes = ({ quizTopic }) => {
    const { name, logo, id, total } = quizTopic;
    console.log(quizTopic);

    return (
        <div>
            <div className='xs:flex flex-wrap'>
                <h3 className='absolute text-black-900 hover:text-white text-3xl mx-16 my-16'>{name}</h3>

                <p className='absolute text-black-900 hover:text-rose-500 text-xl' >Quiz:{total}</p>

                <Link to={`/home/${id}`}><button className='absolute md:mx-48 md:my-56 sm:my-48 sm:mx-32 bg-sky-500/100 hover:bg-rose-900 text-3xl text-white p-2 rounded-lg'>Questions</button></Link>
            </div>
            <img className='static' src={logo} alt="" />

        </div>
    );
};

export default Homes;