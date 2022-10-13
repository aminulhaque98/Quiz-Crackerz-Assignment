import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistic = () => {
    const quizChart = useLoaderData();




    return (


        <ResponsiveContainer width="95%" height={400}>
            <BarChart data={quizChart.data}>
                <Bar type="name" dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart >
        </ResponsiveContainer>

        // <div>

        // <LineChart width={500} height={400} data={quizChart.data}>
        //     <Line type="name" dataKey="total" stroke="#82ca9d" />
        //     <XAxis dataKey="name" />
        //     <YAxis />
        //     <Tooltip></Tooltip>
        // // </LineChart>
        // </div>
    );
};

export default Statistic;