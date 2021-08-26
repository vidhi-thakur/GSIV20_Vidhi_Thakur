import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
    return (
        <nav className="fixed bg-white w-full max-w-4xl flex flex-row items-center justify-between py-2 px-3 border-b-gray-300 border-b-2 z-10 border-b-solid boxShadow-bottom">
            <div className="flex flex-row items-center justify-between bg-gray-300 px-2 py-1 rounded-md pr-8">
                <SearchIcon />
                <input placeholder="Search" type="text" className="bg-transparent p-1 outline-none flex-1" />
            </div>
            <HomeIcon className="cursor-pointer" />
        </nav>
    )
}

export default Navbar
