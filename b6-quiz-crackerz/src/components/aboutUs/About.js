import React from 'react';

const About = () => {
    return (
        <div className='flex text-center justify-center m-12 gap-12'>
            <div>
                <img className='w-48 rounded-lg drop-shadow-2xl' src={require('../../Aminulpic120x150.jpg')} alt="" />
            </div>

            <div className='text-blue-600 text-xl'>
                <h3 className='text-4xl '>Aminul Haque Nihad</h3>
                <small>Web Devoloper</small>
                <p>I Am A Junior Font End Web Devoloper Lives  In Habiganj. <span className='text-2xl text-black font-bold'>My personal information.</span> </p>
            </div>

            <div>
                <img className='w-48 rounded-lg drop-shadow-2xl' src={require('../../Aminulpic120x150.jpg')} alt="" />
            </div>

        </div>
    );
};

export default About;