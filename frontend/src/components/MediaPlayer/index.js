import {useState, useEffect, useRef} from 'react';

import './MediaPlayer.css'

const MediaPlayer = ({playTrackData}) => {

    const audioRef = useRef(null);

    const playIcon = '/images/play.svg'
    const pauseIcon = '/images/pause.svg';

    const [controlIcon, setControlIcon] = useState('/images/play.svg');
    const [playing, setPlaying] = useState(false);
    const [width, setWidth] = useState(0);
    const [currentPlayTime, setCurrentPlayTime] = useState(0);
    const [maxPlayTime, setMaxPlayTime] = useState(0.001);

    // function playAudio() {
    //     audioRef.current.play();
    // }
    // const audioObj = new Audio('https://lang-banana.s3.amazonaws.com/1622155919748.mp3')

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
                    <img src={controlIcon}></img>
                </button>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: `${width}%`}}></div>
                </div>
                <span className="time-display">{`${currentPlayTime.toFixed(2)} / ${maxPlayTime.toFixed(2)}`}</span>
                <div className="track-info-display">
                    <img className="track-info-img" src={playTrackData.albumArtUrl}></img>
                    <span className="track-info-title" >{playTrackData.title}</span>
                    <span className="track-info-creator" >{playTrackData.artist}</span>
                </div>
            </div>
            <div></div>

        </div>
    )
}

export default MediaPlayer;
