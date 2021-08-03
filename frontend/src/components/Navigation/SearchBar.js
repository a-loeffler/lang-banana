import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Navigation.css';


const SearchBar = () => {

    const history = useHistory();
    const [searchText, setSearchText] = useState("");

    const searchAction = (e) => {
        e.preventDefault();

        if (searchText) {
            let processed1 = searchText.split(" ");
            let processed2 = processed1.join("+");

            history.push(`/search/${processed2}`)
        }
        
        
        //TO DO:  get fetch to the backend and redirect to results
    }

    return (
        <form className="searchbar-form" onSubmit={e => searchAction(e)}>
                <input type="text" 
                    className="searchbar-field" 
                    placeholder="Search for a track, user or language..."
                    value={searchText} 
                    onChange={e => setSearchText(e.target.value)} 
                    ></input>
        </form>
    )
}

export default SearchBar;
