import {useState, useEffect, useRef} from 'react';

const MediaPlayer = ({tracks}) => {


    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);


    const audioRef = useRef(new Audio('https://lang-banana.s3.amazonaws.com/1622136086685.mp3'));

    const intervalRef = useRef();
    const isReady = useRef(false);


    const { duration } = audioRef.current;


    const audioElement = new Audio('https://lang-banana.s3.amazonaws.com/1622136086685.mp3');




    return (
        <div className="media-player-container">
            <div className="side-space"></div>
            <div className="main-space">
                <div className="media-player-controls">
                    <button id="play" className="media-player-control-button">
                        <img className="media-player-controls-img" src="/images/play.svg"></img>
                    </button>
                    <button id="pause" className="media-player-control-button">
                        <img className="media-player-controls-img" src="/images/pause.svg"></img>
                    </button>
                </div>
                <audio
                className="media-player"
                type="audio/mpeg"
                src="https://lang-banana.s3.amazonaws.com/1622136086685.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <img className="media-player-album-art"></img>
                <h2 className="media-player-track-name"></h2>
                <h2 className="media-player-creator-name"></h2>
            </div>
            <div className="side-space"></div>
        </div>
    )
}

export default MediaPlayer;
