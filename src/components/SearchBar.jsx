import React, { useState } from "react";
import search from "../assets/search.png"

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <div className="flex items-center justify-center">
            <form
                className="px-4 flex flex-row"
                onSubmit={(e) => {
                        e.preventDefault();
                        onSearch(city);
                        setCity("")
                    }
                }
            >
                <input 
                    type="text" 
                    name="search-bar"
                    placeholder="Search City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mx-4 p-2 gap-8 text-white bg-gray-800"
                />
                <button><img src={search} className="w-8 h-8 hover:scale-110 duration-300"/></button>
            </form>
        </div>
    )
};

export default SearchBar;