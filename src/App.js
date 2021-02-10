import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const App = () => {

    const [casesState, setCasesState] = useState([]);
    var fetchedCases = [];
    const defaultUrl = "https://covid-api.mmediagroup.fr/v1/cases?continent=oceania";

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

    async function fetchAllCountries() {
        await axios.get(defaultUrl).then(response => {
            console.log(response.data);
            for (var country in response.data) {
                fetchedCases.push({name:country, cases: response.data[country]});
            }
        })
    };  

    return (
        <div>
            <Table cases={casesState}/>
        </div>
    );
}

export default App;