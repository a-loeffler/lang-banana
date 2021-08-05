import { Link, useHistory } from "react-router-dom";

import AlbumTrackListItem from "./AlbumTrackListItem";

const AlbumSearchCard = ({albumArtUrl, albumTitle, albumArtist, creatorId, tracks, albumId, likes} ) => {
    
    const history = useHistory()

    let firstTracks = [tracks[0], tracks[1], tracks[2], tracks[3], tracks[4]]


    const goToAlbum = () => {
        history.push(`/albums/${albumId}`)
    }

    return (
        <div className="album-search-card-container">
            <div className="album-search-card-image-container">
                <img className="albumArt" src={albumArtUrl} alt={`Album Art for ${albumTitle}`}></img>
            </div>
            <div className="album-search-card-info-container">
                <Link to={`/albums/${albumId}`} className="search-card-link"><h1 className="album-search-card-info-title">{albumTitle}</h1></Link>
                <Link to={`/users/${creatorId}`} className="search-card-link"><h2 className="album-search-card-info-artist">{albumArtist}</h2></Link>
                <div className="album-search-card-tracks-container">
                    <div className="album-search-card-tracks-list">
                        {firstTracks?.map((track, index) => track ? <AlbumTrackListItem key={index} number={index} trackTitle={track.name} albumArtUrl={albumArtUrl} artist={albumArtist} trackFileUrl={track.trackFileUrl}/> : null)}
                        <button className="more-tracks-button" onClick={() => goToAlbum()}>View All {tracks.length} Tracks</button>
                    </div>
                </div>
                <div className="album-search-card-button-container">
                    <button className="track-search-card-info-likes">
                            <img className="likes-heart" alt="" src="/images/likes-heart.svg"></img>
                            {likes}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AlbumSearchCard;