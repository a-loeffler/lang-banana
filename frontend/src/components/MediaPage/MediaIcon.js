import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { playSelectedTrack } from "../../store/tracks";


const MediaIcon = ({imgSource, title, trackFileUrl, albumArtUrl, artist, setActiveTrack, active, loggedIn, owner, index, albumId, trackId}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    

    const mediaPlayerActions = () => {
        const playTrackData = {trackFileUrl, albumArtUrl, title, artist};
        dispatch(playSelectedTrack(playTrackData));
        setActiveTrack(index)
    }

    const viewPageActions = () => {
        history.push(`/albums/${albumId}/tracks/${trackId}`)
    }


    return (
        <div className="media-icon-container">
            <div className="media-icon-image-container">
                <img src={imgSource} alt={title} className={`media-icon-image ${active === true ? "active-media" : ""}`} onClick={() => mediaPlayerActions()}></img>
                <button className="media-icon-button visit-button" onClick={viewPageActions}>View Page</button>
                {owner && <button className="media-icon-button remove-button">Remove</button>}
                {loggedIn && <button className="media-download-button">
                    <img className="media-download-icon" alt="" src="/images/download-icon.svg"></img>
                </button>}
            </div>
            <div className="media-icon-title-container">
                <h1 className="media-icon-title">{title}</h1>
            </div>
        </div>
    )
}

export default MediaIcon;