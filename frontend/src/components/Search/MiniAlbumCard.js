import { Link } from "react-router-dom";



const MiniAlbumCard = ({albumArtUrl, albumTitle, albumId}) => {



    return (
        <div className="mini-album-card-container">
            <Link to={`/albums/${albumId}`} className="mini-album-card-link">
                <img src={albumArtUrl} alt={albumTitle} className="mini-album-card-image"></img>
                <h2 className="mini-album-card-title">{albumTitle}</h2>
            </Link>
        </div>
    )
}

export default MiniAlbumCard;