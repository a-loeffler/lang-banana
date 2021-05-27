import {useState} from 'react';


import './Content.css';


const MediaCard = ({ title, artist, groupNo, albumArtUrl }) => {

    const [hoverState, setHoverState] = useState("hidden")

    const hoverOn = (e) => {
        setHoverState("");
    }

    const hoverOff = (e) => {
        setHoverState("hidden");
    }

    return (
        <div className={`media-card-container media-group-${groupNo}`}>
            <div className="media-card-image">
                <div className="hover-container" onMouseEnter={e => hoverOn(e)} onMouseLeave={e => hoverOff(e)}>
                    <img className="albumArt" src={albumArtUrl} alt="album cover art"/>
                    <img className={`hover-play-img ${hoverState}`} src="/images/hoverplay.svg"></img>
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
