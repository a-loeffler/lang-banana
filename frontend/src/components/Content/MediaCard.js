import {useState} from 'react';
import {useDispatch} from 'react-redux';

import { playSelectedTrack } from '../../store/tracks';
import './Content.css';


const MediaCard = ({ title, artist, groupNo, albumArtUrl, trackFileUrl }) => {

    const dispatch = useDispatch();

    const [hoverState, setHoverState] = useState("hidden")

    const hoverOn = (e) => {
        setHoverState("");
    }

    const hoverOff = (e) => {
        setHoverState("hidden");
    }

    const mediaPlayerActions = () => {
        const playTrackData = {trackFileUrl, albumArtUrl, title, artist};
        dispatch(playSelectedTrack(playTrackData));
    }

    return (
        <div className={`media-card-container media-group-${groupNo}`}>
            <div className="media-card-image">
                <div className="hover-container" onMouseEnter={e => hoverOn(e)} onMouseLeave={e => hoverOff(e)}>
                    <img className="albumArt" src={albumArtUrl} alt="album cover art"/>
                    <img className={`hover-play-img ${hoverState}`} alt="" src="/images/hoverplay.svg" onClick={() => {mediaPlayerActions()}}></img>
                </div>
            </div>
            <div className="media-card-description">
                <h3 className="media-card-title">{title}</h3>
                <p className="media-card-artist">{artist}</p>
            </div>
        </div>
    )
}


export default MediaCard;
