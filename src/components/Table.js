import React from 'react';
import Fade from 'react-reveal/Fade';

const Table = ({countries}) => {
    return (
        <table class="table-auto border-collapse p-4 w-3/4">
            <thead>
                <Fade><tr className="text-6xl font-bold bg-yellow-400 bg-opacity-50">
                    <td className="p-4">Country</td>
                    <td className="p-4">Cases</td>
                </tr></Fade>
            </thead>
            <tbody vfor="item in items" className="text-3xl text-black">
            {countries.map((country, index) => {
                return (<Fade bottom duration={500} delay={index*50}><tr className="bg-white even:bg-yellow-400 hover:bg-gray-400 bg-opacity-50 even:bg-opacity-50"> 
                    <td className="p-4">{country.name}</td>
                    <td className="p-4">{country.confirmed.toLocaleString()}</td>
                </tr></Fade>);
            })}
            </tbody>
        </table>
    );
}

export default Table;