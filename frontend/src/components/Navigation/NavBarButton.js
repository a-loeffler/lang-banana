import './Navigation.css';


const NavBarButton = ({text, toLink, color }) => {



    return (
        <button className={`navbar-button ${color}`}>{text}</button>
    )
}

export default NavBarButton;
