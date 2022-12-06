import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div id='search' className="pa2">
            <input className="pa3 ba b--black bg-moon-gray" 
            type='search' 
            placeholder='search robots...'
            onChange={searchChange}
            />
        </div>    
    );
}

export default SearchBox;