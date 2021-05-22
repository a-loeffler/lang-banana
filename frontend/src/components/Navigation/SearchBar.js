import {useState} from 'react';
import './Navigation.css';


const SearchBar = () => {

    const [searchText, setSearchText] = useState("");

    const searchAction = (e) => {
        e.preventDefault();

        //TO DO:  get fetch to the backend and redirect to results
    }

    return (
        <form className="seachbar-form" onSubmit={e => searchAction(e)}>
                <input type="text" className="searchbar-field" value={searchText} onChange={e => setSearchText(e.target.value)} defaultValue="search"></input>
        </form>
    )
}

export default SearchBar;
