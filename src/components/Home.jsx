import React, { useState } from "react";
import Navbar from "./Navbar";
import Cards from  "./Cards";

const Home = () => {

    const [cities, setCities] = useState([]);
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onSearch(ciudad) {
        //Llamado a la API del clima
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
            if(recurso.main !== undefined){
            const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
            } else {
            alert("Ciudad no encontrada");
            }
        });
    }

    return (
        <div className="h-screen w-full bg-gradient-to-b from-slate-500 to-white">
            <Navbar onSearch={onSearch}/>
            <div>
                <Cards cities={cities} onClose={onClose}/>
            </div>
        </div>
    )
};

export default Home;