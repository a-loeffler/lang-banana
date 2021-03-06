import {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';

import {playSelectedTrack} from '../../store/tracks';

import './MediaPlayer.css'

const MediaPlayer = ({playTrackData}) => {
    const dispatch = useDispatch();

    const audioRef = useRef(null);

    const playIcon = '/images/play.svg'
    const pauseIcon = '/images/pause.svg';

    const [controlIcon, setControlIcon] = useState('/images/pause.svg');
    const [playing, setPlaying] = useState(true);
    const [width, setWidth] = useState(0);
    const [currentPlayTime, setCurrentPlayTime] = useState(0);
    const [maxPlayTime, setMaxPlayTime] = useState(0.001);

    // function playAudio() {
    //     audioRef.current.play();
    // }
    // const audioObj = new Audio('https://lang-banana.s3.amazonaws.com/1622155919748.mp3')

    useEffect(() => {
        if (audioRef) {
            audioRef.current.play();
            setPlaying(true);
            setControlIcon(pauseIcon);
        }
    }, [audioRef, playTrackData])

    const buttonAction = () => {
        if (playing === false) {
            audioRef.current.play();
            setControlIcon(pauseIcon);
            setPlaying(true);
        } else {
            audioRef.current.pause();
            setControlIcon(playIcon);
            setPlaying(false);
        }
    };



    const timeEffects = () => {
        const maxTime = audioRef.current.duration;
        setMaxPlayTime(maxTime);

        const currentTime = audioRef.current.currentTime;

        setCurrentPlayTime(currentTime);

        const timePercent = Math.floor((currentTime / maxTime) * 100);
        setWidth(timePercent);
    }

    const endPlay = () => {
        setPlaying(false);
        setControlIcon(playIcon);

    }

    const closeAction = () => {
        dispatch(playSelectedTrack({}))
    }

    return (
        <div className="media-player-container">
            <div></div>
            <div className="main-space">
                <audio
                    ref={audioRef}
                    src={playTrackData.trackFileUrl}
                    onEnded={() => {endPlay()}}
                    onTimeUpdate={() => timeEffects()}>
                </audio>
                <button className="media-control"  onClick={() => {buttonAction()}}>
                    <img src={controlIcon} alt=""></img>
                </button>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: `${width}%`}}></div>
                </div>
                <span className="time-display">{`${Math.floor(currentPlayTime.toFixed(2))}:${String((currentPlayTime - Math.floor(currentPlayTime)).toFixed(2)).split(".")[1]} / ${Math.floor(maxPlayTime.toFixed(2))}:${String((maxPlayTime - Math.floor(maxPlayTime)).toFixed(2)).split(".")[1]}`}</span>
                <div className="track-info-display">
                    <img alt="Album Art" className="track-info-img" src={playTrackData.albumArtUrl}></img>
                    <span className="track-info-title" >{playTrackData.title}</span>
                    <span className="track-info-creator" >{playTrackData.artist}</span>
                </div>

            </div>
            <div className="media-close-space">
                <button className="media-player-closer" onClick={() => {closeAction()}}>x</button>
            </div>

        </div>
    )
}

export default MediaPlayer;
