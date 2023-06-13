import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <div className="flex items-center justify-center">
            <form
                className="px-4"
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
                    className="mx-4 p-2 gap-8 text-black bg-gray-800"
                />
                <input type="submit" value="Add" className=""/>
            </form>
        </div>
    )
};

export default SearchBar;