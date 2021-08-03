import { set } from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import TrackSearchCard from "./TrackSearchCard";


const Search = () => {

    const {searchItems} = useParams();

    const languages = useSelector(state => state.meta.languages)

    const [searchResults, setSearchResults] = useState({});
    const [filter, setFilter] = useState("");
    const [langDropDownArrow, setLangDropDownArrow] = useState(false)

    const handleSearch = async (searchItems) => {
        const res = await fetch(`/api/search/${searchItems}`);
        const json = await res.json();
        setSearchResults(json.query);
    };

    useEffect(() => {
        handleSearch(searchItems);
    }, [searchItems]);

    useEffect(() => {
        console.log("searchResults:  ", searchResults)
    }, [searchResults]);


    return (
        <div className="search-results-container">
            
            <div className="search-filter-container">
                <button className={`search-filter-button ${filter === "tracks" && "active-filter"}`} onClick={() => setFilter("tracks")}>Filter by Tracks</button>
                <button className={`search-filter-button ${filter === "users" && "active-filter"}`} onClick={() => setFilter("users")}>Filter by Users</button>
                <button className={`search-filter-button ${filter === "albums" && "active-filter"}`} onClick={() => setFilter("albums")}>Filter by Albums</button>
                <button 
                    className="search-filter-button" 
                    onClick={() => {
                        setLangDropDownArrow(!langDropDownArrow)
                    }}
                    >{`Filter by Language ${langDropDownArrow === false ? "▼" : "▲"}`}</button>
                    {langDropDownArrow === true && <ul className="lang-dropdown-list">
                        {languages && languages.map((language, index) => <li className={`lang-dropdown-li ${filter === language.name && "active-lang-filter"}`} key={index} onClick={() => setFilter(language.name)}>{language.name} </li>)}
                    </ul>}
                <button className="search-filter-button cancel-filter-button" onClick={() => setFilter("")}>Clear Filters</button>
            </div>
            <div className="search-content-container">
                <h1>{searchItems}</h1>
            </div>
            {/* {searchResults.queryTracks.length === 0 && searchResults.queryUsers.length === 0 && searchResults.queryAlbums === 0 && <h1>No Results Found</h1>} */}

            {/* {filter === "tracks" && searchResults?.queryTracks.map(track => {
                <TrackSearchCard />
            })} */}
        </div>
    )
}


export default Search;