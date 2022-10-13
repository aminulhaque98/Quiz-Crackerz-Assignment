import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../quizes/Quizes';

const Quiz = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data.questions);

    return (
        <div>
            {/* <h2 className='text-2xl'>this is the quiz componant:{quizes.data.question
            }</h2> */}
            <h1>Quiz For:{ }</h1>
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