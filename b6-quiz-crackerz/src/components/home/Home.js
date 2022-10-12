import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homes from '../homes/Homes';
import './Home.css';

const Home = () => {
    const quizTopics = useLoaderData();
    // console.log('paici', quizTopics)
    return (
        <div>
            <h3 className='text-3xl text-center'>common header</h3>
            <div className='flex homeComponent '>
                {
                    quizTopics.data.map(quizTopic => <Homes key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></Homes>)
                }
            </div>

        </div>
    );
};

export default Home;