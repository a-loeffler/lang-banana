import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from './store/session';
import { fetchMeta } from './store/meta'

import './index.css';

import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import MediaPlayer from './components/MediaPlayer';

import Content from './components/Content';
import TrackUploadFormPage from './components/TrackUploadFormPage';

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false);
  const [playingMedia, setPlayingMedia] = useState(false);

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
            <Route path="/tracks/upload">
              <TrackUploadFormPage />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
            <Route path="/library">
              <h3>Sorry, nothing here yet.  Check back soon!</h3>
            </Route>
            <Route path="/stream">
              <h3>Sorry, nothing here yet.  Check back soon!</h3>
            </Route>
          </Switch>
          {playingMedia && <MediaPlayer />}
        </div>
        <div className="display-side-space" />
      </div>
    </>
  );
}

export default App;
