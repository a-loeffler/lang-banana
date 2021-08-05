import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { playSelectedTrack } from '../../store/tracks';


const TrackSearchCard = ({ imageUrl, title, artist, likes, trackFileUrl, trackId, creatorId }) => {

    const dispatch = useDispatch()

    const [hoverState, setHoverState] = useState("hidden");

    const hoverOn = (e) => {
        setHoverState("");
    }

    const hoverOff = (e) => {
        setHoverState("hidden");
    }

    const mediaPlayerActions = () => {
        const playTrackData = {trackFileUrl, albumArtUrl: imageUrl, title, artist};
        dispatch(playSelectedTrack(playTrackData));
    }

    return (
        <div className="track-search-card-container">
            <div className="track-search-card-image-container">
                <div className="hover-container" onMouseEnter={e => hoverOn(e)} onMouseLeave={e => hoverOff(e)}>
                    <img className="albumArt" src={imageUrl} alt="Album Art"></img>
                    <img className={`hover-play-img ${hoverState}`} src="/images/hoverplay.svg" onClick={() => {mediaPlayerActions()}}></img>
                </div>
            </div>
            <div className="track-search-card-info-container">
                <Link to={`/tracks/${trackId}`} className="search-card-link"><h1 className="track-search-card-info-title">{title}</h1></Link>
                <Link to={`/users/${creatorId}`} className="search-card-link"><h2 className="track-search-card-info-artist">{artist}</h2></Link>
                <button className="track-search-card-info-likes">
                    <img className="likes-heart" alt="" src="/images/likes-heart.svg"></img>
                    {likes}
                </button>
            </div>
        </div>
    )


}

export default TrackSearchCard;