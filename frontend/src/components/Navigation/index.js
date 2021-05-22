import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import NavBarButton from './NavBarButton';

import './Navigation.css';



const Navigation = ({ isLoaded }) => {



    const currentUser = useSelector(state => state.session.user);

    let navBarLinks;
    if (!currentUser) {
        navBarLinks = (
            <>
                <NavLink to="/login"><NavBarButton color={"gray"} text={"Sign in"}/></NavLink>
                <NavLink to="/signup"><NavBarButton color={"yellow"} text={"Create account"}/></NavLink>
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
                    <img id="logo-img" alt="site logo" src="/images/langbanana-logo1.svg"></img>
                </NavLink>
            </div>
            <div className="buttons-container">
                <NavBarButton text={"Home"} color={"blue"}/>
                <NavBarButton text={"Stream"} color={"gray"}/>
                <NavBarButton text={"Library"} color={"gray"}/>
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
