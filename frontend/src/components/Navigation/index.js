import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';

import './Navigation.css';



const Navigation = ({ isLoaded }) => {



    const currentUser = useSelector(state => state.session.user);

    let navBarLinks;
    if (!currentUser) {
        navBarLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        )
    } else {
        navBarLinks = (
            <ProfileButton user={currentUser}/>
        )
    }

    return (
        <nav className="header-nav">
            <div className="side-space" />
            <div className="logo-container">
                <NavLink exact to="/">
                    <img id="logo-img" src="/images/langbanana-logo1.svg"></img>
                </NavLink>
            </div>
            <div className="seachbar-container">
                <SearchBar />
            </div>
            <div className="buttons-container">
                {isLoaded && navBarLinks}
            </div>
            <div className="side-space" />
        </nav>
    )
}


export default Navigation;
