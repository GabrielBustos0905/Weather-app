import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import reactIcon from "../assets/react.svg"

const Navbar = ({onSearch}) => {
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
            <Link to="/">
                <img src={reactIcon} className="w-12 h-12" />
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default Navbar;