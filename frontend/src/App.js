import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from './store/session';
import { fetchMeta } from './store/meta'

import './index.css';

import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import MediaPlayer from './components/MediaPlayer';

import Content from './components/Content';
import TrackUploadFormPage from './components/TrackUploadFormPage';
import Search from './components/Search';
import SplashPage from './components/SplashPage';
import UserPage from './components/UserPage';

function App() {
  const dispatch = useDispatch();

  const nowPlaying = useSelector(state => state.tracksList.nowPlaying);


  // const playTrackData = useSelector(state => state.trackList.nowPlaying)

  const [isLoaded, setIsLoaded] = useState(false);
  const [playingMedia, setPlayingMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    dispatch(fetchMeta())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

    if (nowPlaying.trackFileUrl) {
      setPlayingMedia(nowPlaying);
      console.log(playingMedia);
      setIsPlaying(true);
    } else {
      setPlayingMedia(null);
      setIsPlaying(false);
    }
  }, [dispatch, nowPlaying, playingMedia])

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <div className="display-container">
        <div className="display-side-space" />
        <div className="display-main">
          <Switch>
            <Route exact path="/">
              <SplashPage />
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
            <Route path="/search/:searchItems">
              <Search />
            </Route>
            <Route exact path="/users/:userPageId">
              <UserPage />
            </Route>
          </Switch>
        </div>
        <div className="display-side-space" />
        {playingMedia && <MediaPlayer playTrackData={playingMedia}/>}
      </div>
    </>
  );
}

export default App;
