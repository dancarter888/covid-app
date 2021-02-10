import React from 'react';

const Table = ({cases}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Country</td>
                    <td>Cases</td>
                </tr>
            </thead>
            <tbody>
            {cases.map((country) => {
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