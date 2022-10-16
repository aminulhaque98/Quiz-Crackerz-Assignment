import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>

            <div className="navbar bg-teal-500 bg-gradient-to-r from-purple-300 to-pink-500 ">
                <div className="navbar-start">

                    <div className=' title flex '>
                        <img src="../../faviconJCH.png" alt="" />
                        <h2 className=' text-4xl font-bold text-sky-500 m-1'>   JCH Quizzy Contest</h2>
                    </div>
                </div>
                <div className="navbar-end">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-500 rounded-box w-full">
                            <Link to="/home"> Home </Link>
                            <Link to="/statistic">Statistic</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/blog">Blog</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;