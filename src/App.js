import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import MapContainer from './MapContainer';

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
            for (var country in response.data) {
                if (country === "Australia") {
                    fetchedCases.push({name:country, confirmed: response.data[country].All.confirmed, lat: "-25.2744", long: "133.7751"});
                } else {
                    fetchedCases.push({name:country, confirmed: response.data[country].All.confirmed, lat: response.data[country].All.lat, long: response.data[country].All.long});
                }
            }
        })
    };  

    return (
        <div>
            <Table cases={casesState}/>
            <MapContainer countries={casesState}/>
        </div>
    );
}

export default App;