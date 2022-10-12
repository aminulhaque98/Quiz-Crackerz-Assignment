import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../quizes/Quizes';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes.data.questions);
    // const { question, options
    //     , correctAnswer
    // } = quizes.data.questions;
    // console.log(question)

    return (
        <div>
            <h2 className='text-2xl'>this is the quiz componant:{quizes.data.question
            }</h2>
            {
                quizes.data.questions.map(quiz => <Quizes
                    key={quiz.id}
                    quiz={quiz}
                ></Quizes>)
            }
        </div>
    );
};

export default Quiz;