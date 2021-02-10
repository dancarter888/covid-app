import React from 'react';

const Table = ({countries}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Country</td>
                    <td>Cases</td>
                </tr>
            </thead>
            <tbody>
            {countries.map((country) => {
                return (<tr>
                    <td>{country.name}</td>
                    <td>{country.confirmed}</td>
                </tr>);
            })}
            </tbody>
        </table>
    );
}

export default Table;