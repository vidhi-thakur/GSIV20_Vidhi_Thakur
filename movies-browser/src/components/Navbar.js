import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
    return (
        <nav>
            <div>
                <SearchIcon />
                <input type="text" />
            </div>
            <HomeIcon />
        </nav>
    )
}

export default Navbar
