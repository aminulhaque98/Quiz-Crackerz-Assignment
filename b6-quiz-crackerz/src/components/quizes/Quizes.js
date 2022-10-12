import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quizes.css'

const Quizes = ({ quiz }) => {
    const { options, question } = quiz
    console.log(quiz)
    // const navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate(`/home/${homeId}`)
    // }

    return (
        <div className='quizComponant gap-y-4'>
            <h2 className='text-2xl'>{question}</h2>

            <div className='text-lg grid grid-cols-2 gap-y-4 gap-x-2'>

                {
                    options.map(option => <label for="javascript" className='btmRadio text-2xl text-bold h-32'><input type="radio" id="javascript" name="fav_language" value="JavaScript" />{option}
                        {/* <span onClick={handleNavigate}></span> */}
                    </label>
                    )
                }




            </div>
        </div>


    );
};

export default Quizes;