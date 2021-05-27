import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import * as sessionActions from '../../store/session';
import './Navigation.css';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);

    const dropDownAction = (e) => {
        if (showMenu === false) setShowMenu(true);

        return;
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="user-button-container">
            <button className="user-button" onClick={e => dropDownAction(e)}>
                <img className="user-icon" src="../../user-icon-gray.svg" />
            </button>
            {showMenu && (
                <div className="profile-dropdown-menu">
                    <ul>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileButton;
