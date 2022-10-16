import React, { useState } from 'react';
import './quizes.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = ({ quiz }) => {
    const { options, question, id, correctAnswer } = quiz;

    const [quizzz, setQuizzz] = useState(0)

    const notify = () => toast(correctAnswer);
    const right = () => toast("This Is Correct Answer");
    const wrong = () => toast("This Is Wrong Answer");

    const handleRadioBtn = (props) => {
        if (props === correctAnswer) {
            right()

        }
        else {
            wrong()

        }
    }

    // className={option === correctAnswer ? `green` : `red`}

    const getId = id;
    const getNumber = getId.slice(23);

    const questionWithTag = question;
    const questionRemoveTag = questionWithTag.slice(3, -4);


    return (

        <div>

            <div className='quizComponant gap-y-4'>

                <div className='text-end'>
                    <button onClick={() => notify()} className='text-2xl text-pink-700 hover:text-sky-700 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>

                <h2 className='text-2xl text-center my-12 text-blue-700 font-semibold'>{questionRemoveTag}</h2>

                <div className='text-lg grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-2'>

                    {
                        options.map(option => <label for={() => setQuizzz(Math.floor(Math.random() * 100))} className='btmRadio text-2xl text-bold  h-32' ><input className='text-4xl' type="radio" id={quizzz} name={id} key={option} value="JavaScript" />
                            <span onClick={() => handleRadioBtn(option)}>{option}</span>
                        </label>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div>


    );
};

export default Quizes;