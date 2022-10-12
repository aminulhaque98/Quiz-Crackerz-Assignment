import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header bg-gradient-to-r from-purple-300 to-pink-500 '>
                <div className='title flex '>
                    <img src="../../faviconJCH.png" alt="" />
                    <h2 className=' text-4xl font-bold text-sky-500 m-1'>   JCH Quizzy Contest</h2>
                </div>
                <div>
                    <Link to="/home"> Home </Link>
                    <Link to="/statistic">Statistic</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </nav>

        </div>

    );
};

export default Header;