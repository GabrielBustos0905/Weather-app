import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = ({onSearch}) => {
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
            <Link to="/">
                <h1>Navbar</h1>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default Navbar;