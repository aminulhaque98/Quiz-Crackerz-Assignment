import React from 'react';

const Blog = () => {
    return (
        <div>

            <header className='flex flex-wrap text-center justify-center m-12 gap-12'>
                <div className='text-blue-600 text-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4'>
                    <h3 className='text-4xl '>Aminul Haque Nihad</h3>
                    <small>Web Devoloper</small>
                    <p>I Am A Junior Font End Web Devoloper Lives  In Habiganj. <span className='text-2xl text-black font-bold'>My Blog Side.</span> </p>
                </div>
                <div>
                    <img className=' rounded-lg drop-shadow-2xl w-48' src={require('../../Aminulpic120x150.jpg')} alt="" />
                </div>
            </header>
            <hr className='border my-12 text-gray w-full text-2xl' />

            <div className=' flex flex-wrap gap-12 '>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-red-200 p-4 rounded-lg drop-shadow-2xl'>
                    <h2 className='text-2xl text-blue-600 w-bold m-4'>What is the of react router?</h2>

                    <p className='text-xl w-bold m-4'>React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.</p>
                </div>

                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-red-200 p-4 rounded-lg drop-shadow-2xl'>
                    <h1 className='text-2xl text-blue-600 w-bold m-4'>How does context api work?</h1>

                    <p className='text-xl w-bold m-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        <br /><br />

                        <span className='underline'>
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </span>
                    </p>
                </div >



                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-red-200 p-4 rounded-lg drop-shadow-2xl'>

                    <h1 className='text-2xl text-blue-600 w-bold m-4'>What is useRef in react?</h1>

                    <p className='text-xl w-bold m-4'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  ref="{"myRef"}", React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                </div>
            </div></div>
    );
};

export default Blog;