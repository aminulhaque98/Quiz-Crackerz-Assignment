import React from 'react';
import './quizes.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = ({ quiz }) => {
    const { options, question, id, correctAnswer } = quiz
    console.log(quiz)
    const notify = () => toast(correctAnswer);

    const handleRadioBtn = (props) => {
        if (props === correctAnswer) {
            console.log('right')
            notify()
        }
        else { console.log('wrong') }
    }

    return (
        <div>

            <div className='quizComponant gap-y-4'>
                <button onClick={() => handleRadioBtn(correctAnswer)} className=''>eye</button>

                <h2 className='text-2xl'>quiz:{ },{question}</h2>

                <div className='text-lg grid grid-cols-2 gap-y-4 gap-x-2'>

                    {
                        options.map(option => <label for="java" className='btmRadio text-2xl text-bold  h-32'><input className='text-4xl' type="radio" id="java" name={id} key={option} value="JavaScript" />
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