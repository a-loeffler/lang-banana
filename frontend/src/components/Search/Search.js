import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


const Search = () => {

    const {searchItems} = useParams();

    const [searchResults, setSearchResults] = useState({});
    const [filter, setFilter] = useState("");

    const handleSearch = async (searchItems) => {
        const res = await fetch(`/api/search/${searchItems}`);
        const json = await res.json();
        setSearchResults(json.query);
    };

    useEffect(() => {
        handleSearch(searchItems);
    }, [searchItems]);

    useEffect(() => {

    }, [searchResults]);




    return (
        <div className="search-results-container">
            <h1>{searchItems}</h1>
        </div>
    )
}


export default Search;