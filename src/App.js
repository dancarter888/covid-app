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
                } else {p
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
            return (<div className="flex justify-center items-center w-4/5">
                        <Table countries={casesState}/>
                    </div>
            );
        } else {
            return (<div className="display-window relative h-full w-4/5">
                        <MapContainer countries={casesState}/>
                    </div>
            );
        }
    }

    return (
        <div>
            <div className="main h-screen flex justify-center items-center">
                <div className="glass bg-white h-4/5 w-4/5 rounded-3xl z-10 flex border-solid border-2 border-white border border-opacity-10 overflow-hidden">
                    <div className="dashboard w-1/5 flex flex-col justify-center items-center">
                        <button onClick={handleToggle}>Toggle</button>
                    </div>
                    
                    {renderWindow()}
                </div>
                <div className="circle -top-48 right-8 z-0"></div>
                <div className="circle -bottom-56 left-36 z-0"></div>
                
            </div>
            
        </div>
    );
}

export default App;