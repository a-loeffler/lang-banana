import { useEffect } from 'react';
import './Navigation.css';


const NavBarButton = ({text, toLink, color, setActiveLink, activeLink }) => {

    
    useEffect(() => {
        
    }, [])

    useEffect(() => {
        console.log(setActiveLink)
    }, [setActiveLink])


    return (
        <button className={`navbar-button ${color} ${activeLink === text ? "button-highlight" : ""}`} onClick={() => setActiveLink(text)}>{text}</button>
    )
}

export default NavBarButton;
