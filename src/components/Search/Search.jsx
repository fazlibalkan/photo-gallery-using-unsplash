import "./Search.css";
import React from "react";

function Search( {searchText, setSearchText}) {



    return (
        <div className="search">
            <label className="search-label">
                <input
                    className="search-input"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            </label>
        </div>
    );
}

export default Search;