import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const App = () => {

    const [casesState, setCasesState] = useState([]);
    const oceaniaCountries = ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Guam", "Kiribati", "Federated States of Micronesia", "Tonga", "American Samoa", "Northern Mariana Islands", "Marshall Islands", "Palau", "Cook Islands", "Wallis and Futuna", "Tuvalu", "Nauru", "Norfolk Island", "Niue", "Tokelau", "Pitcairn Islands"];
    var fetchedCases = [];
    const defaultUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=";

    useEffect(() => {
        //Scoped async function
        const fetchAndSetData = async() => {
            await fetchAllCountries();
            console.log(fetchedCases);
            setCasesState(fetchedCases);
        }
        if (casesState.length === 0) {
            fetchAndSetData();
        }  
    });

    // async function fetchAllCountries() {
    //     await axios.get(url).then(response => {
    //         fetchedCases.push(response.data);
    //     })
    // };

    async function fetchAllCountries() {
        let promises = [];
        for (let i=0; i<oceaniaCountries.length; i++) {
            promises.push(axios.get(defaultUrl + oceaniaCountries[i]).then(response => {
                fetchedCases.push({name: oceaniaCountries[i], cases: response.data.All});
            }))
        }
        return Promise.all(promises);
    }    

    return (
        <div>
            <Table cases={casesState}/>
        </div>
    );
}

export default App;