import { Link } from "react-router-dom";



const Icon = ({name, imageUrl, linkUrl}) => {


    return (
        <Link className="icon-link" to={linkUrl}>
            <div className="icon-container">
                <div className="icon-img-container">
                    <img alt={name} src={imageUrl} className="icon-img"></img>
                </div>
                <div className="icon-text-container">
                    <h1 className="icon-text">{name}</h1>
                </div>
            </div>
        </Link>
    )
}

export default Icon;