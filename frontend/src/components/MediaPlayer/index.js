import {useState, useEffect, useRef} from 'react';

import './MediaPlayer.css'

const MediaPlayer = () => {

    const audioRef = useRef(null);

    const playIcon = '/images/play.svg'
    const pauseIcon = '/images/pause.svg';

    const [controlIcon, setControlIcon] = useState('/images/play.svg');
    const [playing, setPlaying] = useState(false);
    const [width, setWidth] = useState(0);

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
        const currentTime = audioRef.current.currentTime;

        const timePercent = Math.floor(currentTime / maxTime);
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
                    src='https://lang-banana.s3.amazonaws.com/1622155919748.mp3'
                    onEnded={() => {endPlay()}}
                    onTimeUpdate={() => timeEffects()}>
                </audio>
                <button className="media-control"  onClick={() => {buttonAction()}}>
                    <img src={controlIcon}></img>
                </button>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: `${width}%`}}></div>
                </div>
            </div>
            <div></div>

        </div>
    )
}

export default MediaPlayer;
