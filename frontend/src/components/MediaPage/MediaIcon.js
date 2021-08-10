



const MediaIcon = ({source, title}) => {



    return (
        <div className="media-icon-container">
            <div className="media-icon-image-container">
                <img src={source} alt={title} className="media-icon-image"></img>
                <button className="media-icon-remove-button">Remove</button>
            </div>
            <div className="media-icon-title-container">
                <h1 className="media-icon-title">{title}</h1>
            </div>
        </div>
    )
}

export default MediaIcon;