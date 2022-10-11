import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h2 className='text-4xl font-bold text-blue-300'>JCH Quizzy Contest</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/static">Static</a>
                <a href="/about">About us</a>
                <a href="/blog">Blog</a>
            </div>
        </nav>
    );
};

export default Header;