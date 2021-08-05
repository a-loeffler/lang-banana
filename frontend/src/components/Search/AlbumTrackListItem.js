import { useDispatch } from "react-redux";

import { playSelectedTrack } from '../../store/tracks';


const AlbumTrackListItem = ({trackTitle, albumArtUrl, artist, number, trackFileUrl}) => {

    const dispatch = useDispatch()

    const mediaPlayerActions = () => {
        const playTrackData = {trackFileUrl, albumArtUrl, title: trackTitle, artist};
        dispatch(playSelectedTrack(playTrackData));
    }


    return (
        <div className="album-track-list-item-container" onClick={() => mediaPlayerActions()}>
            <img className="album-track-list-item-img" src={albumArtUrl}></img>
            <h1 className="album-track-list-item-title">{number + 1}. {trackTitle}</h1>
            <img className="album-track-list-item-play-arrow" alt="" src="/images/hoverplay.svg"></img>
        </div>
    )
}

export default AlbumTrackListItem;