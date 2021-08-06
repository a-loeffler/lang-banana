
import { Link, useHistory } from "react-router-dom";

import MiniAlbumCard from "./MiniAlbumCard";

const UserSearchCard = ({userName, userId, albums, userAvatar, likes}) => {
    const history = useHistory()

    const firstAlbums = [albums[0], albums[1], albums[2]];

    const viewMoreButtonActions = () => {
        history.push(`/users/${userId}/albums`)
    }


    return (
        <div className="user-search-card-container">
            <div className="user-search-card-image-container">
                <Link to={`/users/${userId}`}>
                    <img className="user-search-card-image" alt={userName} src={`${userAvatar ? userAvatar : 'https://i.ibb.co/XSSZnYp/albumimggeneric.png'}`}></img>
                </Link>
            </div>
            <div className="user-search-card-info-container">
                <section className="user-search-card-name-section">
                    <Link to={`/users/${userId}`} className="search-card-link">
                        <h1 className="user-search-card-info-title">{userName}</h1>
                    </Link>
                    <button className="track-search-card-info-likes">
                            <img className="likes-heart" alt="" src="/images/likes-heart.svg"></img>
                            {likes}
                    </button>
                    <button className="sm-view-more-albums">View Albums ►</button>
                </section>
                <section className="user-search-card-album-section">
                    <h2 className="user-search-card-info-subtitle">Albums:</h2>
                    <div className="user-search-card-album-container">
                        {firstAlbums.map((album, index) => album ? <MiniAlbumCard key={index} albumArtUrl={album.coverArtUrl} albumTitle={album.name} albumId={album.id}/> : null)}
                        {<button className="view-more-albums">View More <br /> ▼</button>}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserSearchCard;