import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import MapContainer from './MapContainer';

const App = () => {

    const [casesState, setCasesState] = useState([]);
    const [activeWindow, setActiveWindow] = useState("table");
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

    const handleToggle = () => {
        activeWindow === "table" ? setActiveWindow("map") : setActiveWindow("table");
    }

    const renderWindow = () => {
        if (activeWindow === "table") {
            return (<Table countries={casesState}/>);
        } else {
            return (<div className="relative h-2/3 w-2/3">
                        <MapContainer countries={casesState}/>
                    </div>
            );
        }
    }

    return (
        <div className="h-screen">
            <button onClick={handleToggle}>Toggle</button>
            {renderWindow()}
        </div>
    );
}

export default App;