import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import MapContainer from './MapContainer';
import toggleIcon from './images/Toggle.svg';

const App = () => {

    const [countriesState, setCountriesState] = useState([]);
    const [activeWindow, setActiveWindow] = useState("table");
    var fetchedCountries = [];
    const defaultUrl = "https://covid-api.mmediagroup.fr/v1/cases?continent=oceania";

    useEffect(() => {
        //Scoped async function
        const fetchAndSetData = async() => {
            await fetchAllCountries();
            console.log(fetchedCountries);
            setCountriesState(fetchedCountries);
        }
        if (countriesState.length === 0) {
            fetchAndSetData();
        }  
    });

    async function fetchAllCountries() {
        await axios.get(defaultUrl).then(response => {
            for (var country in response.data) {
                if (country === "Australia") {
                    fetchedCountries.push({name:country, confirmed: response.data[country].All.confirmed, lat: "-25.2744", long: "133.7751"});
                } else {
                    fetchedCountries.push({name:country, confirmed: response.data[country].All.confirmed, lat: response.data[country].All.lat, long: response.data[country].All.long});
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
                        <Table countries={countriesState}/>
                    </div>
            );
        } else {
            return (<div className="display-window relative h-full w-4/5">
                        <MapContainer countries={countriesState}/>
                    </div>
            );
        }
    }

    return (
        <div>
            <div className="main h-screen flex justify-center items-center">
                <div className="h-screen w-screen flex flex-col justify-center items-center">
                    <div className="bg-white p-4 mb-2 -mt-2"><h1 className="text-8xl font-light bg-yellow-400 p-2">Covid-19 in Oceania</h1></div>
                    <div className="glass bg-white h-4/5 w-4/5 rounded-3xl z-10 flex border-solid border-2 border-white border border-opacity-10 overflow-hidden">
                        <div className="dashboard w-1/5 flex flex-col justify-center items-center">
                            <h2 className={activeWindow === "table" ? "active" : "inactive"}>Table</h2>
                            <img className="h-16 w-16 my-4 cursor-pointer transition duration-300 ease-in-out transform hover:rotate-45 hover:scale-110" src={toggleIcon} alt="Toggle Icon" onClick={handleToggle}/>
                            <h2 className={activeWindow === "map" ? "active" : "inactive"}>Map</h2>
                        </div>
                        {renderWindow()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;