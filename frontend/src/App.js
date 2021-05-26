import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from './store/session';
import { fetchMeta } from './store/meta'

import './index.css';

import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';

import Content from './components/Content';
import Carousel from './components/Content/Carousel';

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchMeta())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <div className="display-container">
        <div className="display-side-space" />
        <div className="display-main">
          <Switch>
            <Route exact path="/">
              <h1>Hello from App</h1>
            </Route>
            <Route path="/media">
              <Content />
            </Route>
            <Route path="/carousel">
              <Carousel />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
          </Switch>
        </div>
        <div className="display-side-space" />
      </div>
    </>
  );
}

export default App;
