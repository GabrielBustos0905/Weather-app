import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <div className="flex items-center justify-center">
            <form
                className="px-4"
                onSubmit={(e) => {
                        e.preventDefault();
                        onSearch(city)
                    }
                }
            >
                <input 
                    type="text" 
                    name="search-bar"
                    placeholder="Search City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mx-4 p-2 gap-8"
                />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
};

export default SearchBar;