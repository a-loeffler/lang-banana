


import './Content.css';


const MediaCard = ({title, artist, groupNo}) => {


    return (
        <div className={`media-card-container media-group-${groupNo}`}>
            <div className="media-card-image"></div>
            <div className="media-card-description">
                <h3 className="media-card-title">{title}</h3>
                <p className="media-card-artist">{artist}</p>
            </div>
        </div>
    )
}


export default MediaCard;
