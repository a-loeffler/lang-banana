import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import NavBarButton from './NavBarButton';

import './Navigation.css';



const Navigation = ({ isLoaded }) => {



    const currentUser = useSelector(state => state.session.user);


    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        
    }, [activeLink])

    let navBarLinks;
    if (!currentUser) {
        navBarLinks = (
            <>
                <NavLink to="/login"><NavBarButton color={"gray"} text={"Sign in"} setActiveLink={setActiveLink} activeLink={activeLink}/></NavLink>
                <NavLink to="/signup"><NavBarButton color={"yellow"} text={"Create account"} setActiveLink={setActiveLink} activeLink={activeLink}/></NavLink>
            </>
        )
    } else {
        navBarLinks = (
            <ProfileButton user={currentUser}/>
        )
    }

    return (
        <nav className="header-nav">
            <div className="side-space side-space-l" />
            <div className="logo-container">
                <NavLink exact to="/" onClick={() => setActiveLink("")}>
                    <img id="logo-img" alt="site logo" src="/images/langbanana-logo1.svg"></img>
                </NavLink>
            </div>
            <div className="buttons-container site-buttons">
                <NavLink to="/media"><NavBarButton text={"Home"} color={"blue"} setActiveLink={setActiveLink} activeLink={activeLink}/></NavLink>
                <NavLink to="/stream" ><NavBarButton text={"Stream"} color={"gray"} setActiveLink={setActiveLink} activeLink={activeLink}/></NavLink>
                <NavLink to="/library" ><NavBarButton text={"Library"} color={"gray"} setActiveLink={setActiveLink} activeLink={activeLink}/></NavLink>
            </div>
            <div className="searchbar-container">
                <SearchBar />
            </div>
            <div className="buttons-container user-buttons">
                {isLoaded && navBarLinks}
            </div>
            <div className="side-space side-space-r" />
        </nav>
    )
}


export default Navigation;
