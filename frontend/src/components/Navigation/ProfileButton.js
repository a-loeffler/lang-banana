import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const grayIcon = "/images/user-icon-gray.svg";
    const yellowIcon = "/images/user-icon.svg";

    const [showMenu, setShowMenu] = useState(false);
    const [imgSrc, setImgSrc] = useState(grayIcon);


    const dropDownAction = (e) => {
        if (showMenu === false) setShowMenu(true);
        if (imgSrc === grayIcon) {
            setImgSrc(yellowIcon)
        }
        return;
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        setImgSrc(yellowIcon)

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const goToUpload = (e) => {
        e.preventDefault();
        history.push('/tracks/upload')
    }

    const goToProfile = () => {
        history.push(`/users/${user.id}`)
    }



    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="user-button-container">
            <h2 className="user-welcome">Welcome, {user.userName}</h2>
            <button className="user-button" onClick={e => dropDownAction(e)} onMouseEnter={() => setImgSrc(yellowIcon)} onMouseLeave={() => setImgSrc(grayIcon)} >
                <img className="user-icon" src={imgSrc}/>
            </button>
            {showMenu && (
                <div className="profile-dropdown-menu">
                    <ul className="profile-dropdown-choices">
                        <li>
                            <button className="user-menu-button" onClick={goToUpload}>Upload New Track</button>
                        </li>
                        <li>
                            <button className="user-menu-button" onClick={goToProfile}>Your Profile</button>
                        </li>
                        <li>
                            <button className="user-menu-button" onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileButton;
