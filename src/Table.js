import React from 'react';

const Table = ({countries}) => {
    return (
        <table class="table-auto border-collapse p-4">
            <thead>
                <tr className="text-6xl">
                    <td className="p-4">Country</td>
                    <td className="p-4">Cases</td>
                </tr>
            </thead>
            <tbody className="text-3xl text-gray-600 even:rotate-45">
            {countries.map((country) => {
                return (<tr>
                    <td className="p-4">{country.name}</td>
                    <td className="p-4">{country.confirmed}</td>
                </tr>);
            })}
            </tbody>
        </table>
    );
}

export default Table;