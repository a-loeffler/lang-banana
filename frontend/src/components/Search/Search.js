import { set } from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import TrackSearchCard from "./TrackSearchCard";


const Search = () => {

    const {searchItems} = useParams();

    const languages = useSelector(state => state.meta.languages)

    const [searchResults, setSearchResults] = useState({});
    const [searchResultsUsers, setSearchResultsUsers] = useState([]);
    const [searchResultsAlbums, setSearchResultsAlbums] = useState([]);
    const [searchResultsTracks, setSearchResultsTracks] = useState([]);

    const [filteredTracks, setFilteredTracks] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);


    const [filter, setFilter] = useState("");
    const [langFilter, setLangFilter] = useState("")
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
        if (searchResults.queryTracks && searchResults.queryAlbums && searchResults.queryUsers) {
            setSearchResultsUsers(searchResults.queryUsers)
            setSearchResultsTracks(searchResults.queryTracks)
            setSearchResultsAlbums(searchResults.queryAlbums)

        }
        
        console.log("Users: ", searchResultsUsers)
        console.log("Albums: ", searchResultsAlbums[0]?.name)
        console.log("Tracks: ", searchResultsTracks)

    }, [searchResults, searchResultsAlbums, searchResultsTracks, searchResultsUsers]);

    useEffect(() => {
        if (langFilter && !filter) {
            const langFilteredTracks = searchResultsTracks.filter((track) => {
                return track.Language.name === langFilter
            }) 
            setFilteredTracks(langFilteredTracks)

            const langFilteredAlbums = searchResultsAlbums.filter((album) => {
                return album.Language.name === langFilter
            })
            setFilteredAlbums(langFilteredAlbums)
        } 
        
        if (!langFilter) {
            setFilteredTracks([])
            setFilteredAlbums([])
        }
    }, [langFilter])

    const changeFilter = (filterCategory) => {
        if (filter !== filterCategory) {
            setFilter(filterCategory)
        } else {
            setFilter("")
        }
    }

    const changeLanguageFilter = (language) => {
        if (langFilter !== language) {
            setLangFilter(language)
        } else {
            setLangFilter("")
        }
    }

    return (
        <div className="search-results-container">
            
            <div className="search-filter-container">
                <button className={`search-filter-button ${filter === "tracks" && "active-filter"}`} onClick={() => changeFilter("tracks")}>Filter by Tracks</button>
                <button className={`search-filter-button ${filter === "users" && "active-filter"}`} onClick={() => changeFilter("users")}>Filter by Users</button>
                <button className={`search-filter-button ${filter === "albums" && "active-filter"}`} onClick={() => changeFilter("albums")}>Filter by Albums</button>
                <button 
                    className="search-filter-button" 
                    onClick={() => {
                        setLangDropDownArrow(!langDropDownArrow)
                    }}
                    >{`Filter by Language ${langDropDownArrow === false ? "▼" : "▲"}`}</button>
                    {langDropDownArrow === true && <ul className="lang-dropdown-list">
                        {languages && languages.map((language, index) => <li className={`lang-dropdown-li ${langFilter === language.name && "active-lang-filter"}`} key={index} onClick={() => changeLanguageFilter(language.name)}>{language.name} </li>)}
                    </ul>}
                <button className="search-filter-button cancel-filter-button" 
                    onClick={() => {
                        setFilter("");
                        setLangFilter("");
                    }}
                    >Clear Filters</button>
            </div>
            <div className="search-content-container">
                <h1>Search Results for {searchItems}</h1>
                {searchResultsUsers.length === 0 && searchResultsTracks.length === 0 && searchResultsAlbums.length === 0 ? <h2>No Results Found</h2> : <h2 className="search-results-message">Found {searchResultsUsers.length} Users, {searchResultsAlbums.length} Albums, and {searchResultsTracks.length} Tracks</h2>}
                {filter === "" && langFilter === "" && searchResultsUsers?.map((user, index) => <h2 key={index}>user - {user?.userName}</h2>)}
                {filter === "" && langFilter === "" && searchResultsAlbums?.map((album, index) => <h2 key={index}>album - {album?.name}</h2>)}
                {filter === "" && langFilter === "" && searchResultsTracks?.map((track, index) => <h2 key={index}>track - {track?.name}</h2>)}
                {langFilter ==="" && filter === "albums" && searchResultsAlbums?.map((album, index) => <h2 key={index}>{album.name}</h2>)}
                {langFilter ==="" && filter === "tracks" && searchResultsTracks?.map((track, index) => <h2 key={index}>{track.name}</h2>)}
                {langFilter ==="" && filter === "users" && searchResultsUsers?.map((user, index) => <h2 key={index}>{user.userName}</h2>)}
                {langFilter !=="" && filter === "" && filteredTracks?.map((track, index) => <h2 key={index}>{track.name}</h2>)}
                {langFilter !=="" && filter === "" && filteredAlbums?.map((album, index) => <h2 key={index}>{album.name}</h2>)}
                {langFilter !=="" && filter === "" && filteredAlbums.length === 0 && filteredTracks.length === 0 && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "users" && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "tracks" && filteredTracks.length > 0 && filteredTracks?.map((track, index) => <h2 key={index}>{track.name}</h2>)}
                {langFilter !=="" && filter === "albums" && filteredAlbums.length > 0 && filteredAlbums?.map((album, index) => <h2 key={index}>{album.name}</h2>)}
                {langFilter !=="" && filter === "tracks" && filteredTracks.length === 0 && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "albums" && filteredAlbums.length === 0 && <h2>No Results Found</h2>}
            </div>
        </div>
    )
}


export default Search;