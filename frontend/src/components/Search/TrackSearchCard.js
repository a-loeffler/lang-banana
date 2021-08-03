import { useState } from "react";
import { useDispatch } from "react-redux";

import { playSelectedTrack } from '../../store/tracks';


const TrackSearchCard = ({ imageUrl, title, artist, likes, trackFileUrl }) => {

    const dispatch = useDispatch()

    const [hoverState, setHoverState] = useState("hidden");

    const hoverOn = (e) => {
        setHoverState("");
    }

    const hoverOff = (e) => {
        setHoverState("hidden");
    }

    const mediaPlayerActions = () => {
        const playTrackData = {trackFileUrl, imageUrl, title, artist};
        dispatch(playSelectedTrack(playTrackData));
    }

    return (
        <div className="user-search-card-container">
            <div className="user-search-card-image-container hover-container" onMouseEnter={e => hoverOn(e)} onMouseLeave={e => hoverOff(e)}>
                <img className="albumArt" src={imageUrl} alt="Album Art"></img>
                <img className={`hover-play-img ${hoverState}`} src="/images/hoverplay.svg" onClick={() => {mediaPlayerActions()}}></img>
            </div>
            <div className="user-search-card-info-container">
                <h1 className="user-search-card-info-title">{title}</h1>
                <h2 className="user-search-card-info-artist">{artist}</h2>
                <button className="user-search-card-info-likes">
                    <img className="likes-heart" alt="" src="/images/likes-heart.svg"></img>
                    <h3 className="user-search-card-likes-text">{likes}</h3>
                </button>
            </div>
        </div>
    )


}

export default TrackSearchCard;