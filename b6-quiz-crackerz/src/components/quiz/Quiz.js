import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../quizes/Quizes';

const Quiz = () => {
    const quizes = useLoaderData();
    const { name } = quizes.data

    return (
        <div>
            {/* <h2 className='text-2xl'>this is the quiz componant:{quizes.data.question
            }</h2> */}
            <h1 className='text-3xl text-center my-12 text-blue-700 font-bold'>Quiz For:{name}</h1>
            {
                quizes?.data?.questions.map(quiz => <Quizes
                    key={quiz.id}
                    quiz={quiz}
                ></Quizes>)
            }
        </div>
    );
};

export default Quiz;