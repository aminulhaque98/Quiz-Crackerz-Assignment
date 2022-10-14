import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homes from '../homes/Homes';
import './Home.css';

const Home = () => {
    const quizTopics = useLoaderData();
    console.log('paici', quizTopics)
    return (
        <div>
            <header className='flex text-center justify-center m-12 gap-12 '>
                <div className='text-blue-600 text-xl'>
                    <h3 className='text-4xl '>Jubayer Ahmed Shipon</h3>
                    <small>Web Devoloper</small>
                    <p>He Is A Famous Font End Web Devoloper  in Sylhet </p>
                </div>
                <div>
                    <img className='w-48 rounded-lg drop-shadow-2xl' src={require('../../shawon.jpg')} alt="" />
                </div>
            </header>
            <div className='flex homeComponent '>
                {/* <h1>Let's Play a Quiz </h1> */}

                {
                    quizTopics?.data?.map(quizTopic => <Homes key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></Homes>)
                }
            </div>

        </div>
    );
};

export default Home;