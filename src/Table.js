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
                let confirmedCases = "No Data Available";
                if (country.cases !== undefined) {
                    confirmedCases = country.cases.All.confirmed
                }
                return (<tr>
                    <td>{country.name}</td>
                    <td>{confirmedCases}</td>
                </tr>);
            })}
            </tbody>
        </table>
    );
}

export default Table;