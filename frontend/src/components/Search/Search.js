import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import TrackSearchCard from "./TrackSearchCard";
import AlbumSearchCard from "./AlbumSearchCard";
import UserSearchCard from "./UserSearchCard";


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
    const [showSmallFilters, setShowSmallFilters] = useState(false)


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
        
        // console.log("search results", searchResults)

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

        if (langFilter && filter) {
            if (filter === "tracks") {
                const langFilteredTracks = searchResultsTracks.filter((track) => {
                    return track.Language.name === langFilter
                })
                setFilteredTracks(langFilteredTracks)
            }

            if (filter === "albums") {
                const langFilteredAlbums = searchResultsAlbums.filter((album) => {
                    return album.Language.name === langFilter
                })
                setFilteredAlbums(langFilteredAlbums)
            }
        }
        
        if (!langFilter) {
            setFilteredTracks([])
            setFilteredAlbums([])
        }
    }, [langFilter])

    useEffect(() => {

    }, [filter])

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
                <div className="search-filter-container-sm">
                    <button className="search-filter-button-sm cancel-filter-button" onClick={() => setShowSmallFilters(!showSmallFilters)}>Filters</button>
                    {showSmallFilters && <div className="search-filter-button-sm-container">
                        <button className={`search-filter-button-sm ${filter === "tracks" && "active-filter"}`} onClick={() => changeFilter("tracks")}>Filter by Tracks</button>
                        <button className={`search-filter-button-sm ${filter === "users" && "active-filter"}`} onClick={() => changeFilter("users")}>Filter by Users</button>
                        <button className={`search-filter-button-sm ${filter === "albums" && "active-filter"}`} onClick={() => changeFilter("albums")}>Filter by Albums</button>
                        <button 
                    className="search-filter-button-sm" 
                    onClick={() => {
                        setLangDropDownArrow(!langDropDownArrow)
                    }}
                    >{`Filter by Language ${langDropDownArrow === false ? "▼" : "▲"}`}</button>
                    {langDropDownArrow === true && <ul className="lang-dropdown-list-sm">
                        {languages && languages.map((language, index) => <li className={`lang-dropdown-li-sm ${langFilter === language.name && "active-lang-filter"}`} key={index} onClick={() => changeLanguageFilter(language.name)}>{language.name} </li>)}
                    </ul>}
                <button className="search-filter-button-sm cancel-filter-button" 
                    onClick={() => {
                        setFilter("");
                        setLangFilter("");
                    }}
                    >Clear Filters</button>
                    </div>}
                </div>
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
                <h1 className="search-query-message">Search Results for {searchItems}</h1>
                {searchResultsUsers.length === 0 && searchResultsTracks.length === 0 && searchResultsAlbums.length === 0 ? <h2>No Results Found</h2> : <h2 className="search-results-message">Found {searchResultsUsers.length} Users, {searchResultsAlbums.length} Albums, and {searchResultsTracks.length} Tracks</h2>}
                {filter === "" && langFilter === "" && searchResultsUsers?.map((user, index) => <UserSearchCard key={index} userName={user.userName} userId={user.id} albums={user.Albums} userAvatar={user.avatarUrl} likes={14}/>)}
                {filter === "" && langFilter === "" && searchResultsAlbums?.map((album, index) => <AlbumSearchCard key={index} albumArtUrl={album.coverArtUrl} albumTitle={album.name} albumArtist={album.User.userName} creatorId={album.creatorId} albumId={album.id} tracks={album.Tracks} likes={5}/>)}
                {filter === "" && langFilter === "" && searchResultsTracks?.map((track, index) => <TrackSearchCard key={index} imageUrl={track.Album.coverArtUrl} title={track.name} artist={track.User.userName} likes={4} trackId={track.id} trackFileUrl={track.trackFileUrl} creatorId={track.creatorId} />)}
                {langFilter ==="" && filter === "albums" && searchResultsAlbums?.map((album, index) => <AlbumSearchCard key={index} albumArtUrl={album.coverArtUrl} albumTitle={album.name} albumArtist={album.User.userName} creatorId={album.creatorId} albumId={album.id} tracks={album.Tracks} likes={5}/>)}
                {langFilter ==="" && filter === "tracks" && searchResultsTracks?.map((track, index) => <TrackSearchCard key={index} imageUrl={track.Album.coverArtUrl} title={track.name} artist={track.User.userName} likes={4} trackId={track.id} trackFileUrl={track.trackFileUrl} creatorId={track.creatorId} />)}
                {langFilter ==="" && filter === "users" && searchResultsUsers?.map((user, index) => <h2 key={index}>{user.userName}</h2>)}
                {langFilter !=="" && filter === "" && filteredTracks?.map((track, index) => <TrackSearchCard key={index} imageUrl={track.Album.coverArtUrl} title={track.name} artist={track.User.userName} likes={4} trackId={track.id} trackFileUrl={track.trackFileUrl} creatorId={track.creatorId} />)}
                {langFilter !=="" && filter === "" && filteredAlbums?.map((album, index) => <AlbumSearchCard key={index} albumArtUrl={album.coverArtUrl} albumTitle={album.name} albumArtist={album.User.userName} creatorId={album.creatorId} albumId={album.id} tracks={album.Tracks} likes={5}/>)}
                {langFilter !=="" && filter === "" && filteredAlbums.length === 0 && filteredTracks.length === 0 && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "users" && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "tracks" && filteredTracks.length > 0 && filteredTracks?.map((track, index) => <TrackSearchCard key={index} imageUrl={track.Album.coverArtUrl} title={track.name} artist={track.User.userName} likes={4} trackId={track.id} trackFileUrl={track.trackFileUrl} creatorId={track.creatorId} />)}
                {langFilter !=="" && filter === "albums" && filteredAlbums.length > 0 && filteredAlbums?.map((album, index) => <AlbumSearchCard key={index} albumArtUrl={album.coverArtUrl} albumTitle={album.name} albumArtist={album.User.userName} creatorId={album.creatorId} albumId={album.id} tracks={album.Tracks} likes={5}/>)}
                {langFilter !=="" && filter === "tracks" && filteredTracks.length === 0 && <h2>No Results Found</h2>}
                {langFilter !=="" && filter === "albums" && filteredAlbums.length === 0 && <h2>No Results Found</h2>}
            </div>
        </div>
    )
}


export default Search;