import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistic = () => {
    const quizChart = useLoaderData();
    const [total, id, name] = quizChart.data;
    console.log('get data ', total);



    return (

        <BarChart width={500} height={400} data={total}>
            <Bar dataKey="id" fill="#8884d8" />
            <XAxis dataKey="id" />
            <YAxis />
        </BarChart>


    );
};

export default Statistic;