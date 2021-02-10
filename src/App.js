import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

    const [cases, setCases] = useState([]);
    const ocianiaCountries = ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Federated States of Micronesia", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Norfolk Island", "Niue", "Tokelau", "Pitcairn Islands"];
    var covidCases = [];
    const defaultUrl = "https://covid-api.mmediagroup.fr/v1/cases/?country=";

    useEffect(() => {
        //scoped async function
        const setData = async() => {
            await fetchAllCountries();
            console.log(covidCases);
            setCases(covidCases);
        }
        if (cases.length === 0) {
            setData();
        }  
    });

    async function fetchAllCountries() {
        let promises = [];
        for (let i=0; i<ocianiaCountries.length; i++) {
            promises.push(axios.get(defaultUrl + ocianiaCountries[i]).then(response => {
                covidCases.push({name: ocianiaCountries[i], cases: response.data.All});
            }))
        }
        return Promise.all(promises);
    }    

    return (
        <div>
            {cases.map((country) => {
                let confirmedCases = "No Data Available";
                if (country.cases !== undefined) {
                    confirmedCases = country.cases.confirmed
                }
                return (<div>
                    <div>{country.name}</div>
                    <div>{confirmedCases}</div>
                </div>);
            })}
        </div>
    );
}

export default App;