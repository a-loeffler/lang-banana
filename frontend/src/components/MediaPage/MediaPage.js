import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TitleEdit from "./TitleEdit";
import MediaIcon from "./MediaIcon";

import { getTrackPageData } from "../../store/tracks";
import { getAlbumPageData } from "../../store/album";

const MediaPage = ({typeOfPage}) => {
    const dispatch = useDispatch();

    const id = Number(useParams().id);
    console.log(id)


    const [title, setTitle] = useState("Title")
    const [editOpen, setEditOpen] = useState(false);
    const [activeTrack, setActiveTrack] = useState(null)

    const currentUser = useSelector(state => state.session.user);

    



    //To do:  if media belongs to logged-in user, allow
    //options to edit the media...
    //track: edit name, delete
    //album: edit name, delete 
    useEffect(() => {
        console.log(typeOfPage)
    }, [typeOfPage])

    return (
        <div className="media-page-container">
            <section className="media-page-top">
                <div className="media-page-splash-container">
                    <img alt="" src="/images/splash-pattern-2.png" className="media-page-splash"></img>
                </div>
                <div className="media-page-image-container">
                    <img className="media-page-img" src="https://i.ibb.co/XSSZnYp/albumimggeneric.png"></img>
                </div>
                <div className="media-page-title-container">
                    {editOpen === false && 
                    <>
                        <h1 className="media-page-title">{title}</h1>
                        <button className="media-page-edit-button" onClick={() => setEditOpen(true)}>Edit</button>
                    </>
                    }
                    {editOpen === true && <TitleEdit typeOfPage={typeOfPage} previousTitle={title} setEditOpen={setEditOpen} setTitle={setTitle}/>}
                </div>
            </section>
            <section className="media-page-bottom">
                {typeOfPage === "album" && 
                <div className="media-page-box">
                    <div className="media-icons-grid">
                        <MediaIcon imgSource="/images/hoverplay.svg" title="Icon Title" trackFileUrl={"www.google.com"} albumArtUrl={""} artist={""} active={activeTrack === "Icon Title"} setActiveTrack={setActiveTrack}/>
                        <MediaIcon imgSource="/images/hoverplay.svg" title="Icon Title 2" trackFileUrl={"www.google.com"} albumArtUrl={""} artist={""} active={activeTrack === "Icon Title 2"} setActiveTrack={setActiveTrack}/>
                    </div>
                </div>
                }
            </section>
        </div>
    )
}

export default MediaPage;