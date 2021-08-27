import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider"

function Navbar() {

    const [, dispatch] = useStateValue();

    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch({
            type: "SET_INPUT",
            input: input
        })
    }, [input])

    return (
        <nav className="fixed bg-white w-full max-w-4xl flex flex-row items-center justify-between py-2 px-3 border-b-gray-300 border-b-2 z-10 border-b-solid boxShadow-bottom">
            <div className="flex flex-row items-center justify-between bg-gray-300 px-2 py-1 rounded-md pr-8">
                <SearchIcon />
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search" type="text" className="bg-transparent p-1 outline-none flex-1" />
            </div>
            <Link to="/" >
                <HomeIcon className="cursor-pointer" />
            </Link>
        </nav>
    )
}

export default Navbar
