import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as sessionActions from '../../store/session';


const SplashPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    const exploreButtonActions = () => {

        history.push("/media")
    }

    const aboutUsButtonActions = () => {

        history.push("/about")
    }

    const signUpButtonActions = () => {

        history.push("/signup")
    }

    const demoButtonActions = async () => {
        if (user) {
            await dispatch(sessionActions.logout());
        }

        await dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
        history.push("/media")
    }

    return (
        <div className="splash-page-container">
            <section className="splash-top-container">
                <div className="splash-title-container">
                    <img id="splash-title-top" alt="Welcome to Lang Banana" src="/images/lang-title.svg"></img>
                    <img id="splash-title-middle" alt="" src="/images/banana-icon-title.svg"></img>
                    <img id="splash-title-bottom" alt="Welcome to Lang Banana" src="/images/banana-title.svg"></img>
                </div>
            </section>
            <section className="splash-bottom-container">
                <img alt="" id="splash-bottom-background" src="/images/splash-pattern.png"></img>
                <div className="splash-bottom-info-container">
                    <section className="splash-bottom-info-left">
                        <h1 className="splash-info-header">
                            Ready to learn a new language?
                        </h1>
                        <h1 className="splash-info-text">
                            Find lessons created by real people
                        </h1>
                        <h1 className="splash-info-text centered-text">
                            <span className="white-text">—</span> just like you <span className="white-text">—</span>
                        </h1>
                        <h1 className="splash-info-text right-aligned-text">
                            to help you learn the natural way.
                        </h1>
                    </section>
                    <section className="splash-bottom-info-right">
                        <div className="splash-image-container">
                            <img alt="Lang Banana User" className="splash-image" src="/images/splash-user.jpg"></img>
                        </div>
                        <div className="splash-buttons-container">
                            <button className="splash-button " onClick={() => exploreButtonActions()}>Explore</button>
                            <button className="splash-button " onClick={() => demoButtonActions()}>Demo User</button>
                            {!user && <button className="splash-button " onClick={() => signUpButtonActions()}>Sign Up</button>}
                            <button className="splash-button " onClick={() => aboutUsButtonActions()}>About Us</button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default SplashPage;