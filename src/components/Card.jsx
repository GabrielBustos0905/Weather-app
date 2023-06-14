import React from "react";
import Close from "../assets/close.png"
import { Link } from "react-router-dom";

const Card = ({min, max, name, img, id, onClose}) => {
    return (
        <div className="bg-white shadow-md shadow-gray-600 rounded-lg">
            
            
            <div className="flex justify-between items-center">
                <Link to={`/city/:${id}`}>
                    <p className="text-3xl font-medium inline border-b-4 border-gray-300 m-4">{name}</p>
                </Link>
                <div className="flex items-center justify-center ml-10 pr-2 pb-6 pt-2">
                    <button onClick={onClose}><img src={Close} className="h-7 w-7 hover:scale-110 duration-300" /></button>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="px-3 m-2 items-center justify-center">
                    <p className="text-2xl font-extralight">Min</p>
                    <p className="text-2xl font-extralight px-1">{min}°c</p>       
                </div>

                <div className="px-3 m-2 items-center justify-center">
                    <p className="text-2xl font-extralight">Max</p>
                    <p className="text-2xl font-extralight px-1">{max}°c</p>
                </div>

                <div className="px-3 m-2 items-center justify-center">
                    <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
                </div>
            </div>
            
        </div>
    )
};

export default Card;