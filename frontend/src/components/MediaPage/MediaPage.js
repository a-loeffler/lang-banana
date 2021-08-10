import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import TitleEdit from "./TitleEdit";
import MediaIcon from "./MediaIcon";

import { getTrackPageData } from "../../store/tracks";
import { getAlbumPageData } from "../../store/album";

const MediaPage = (pageType) => {
    const dispatch = useDispatch();

    const id = Number(useParams().id);
    console.log(id)


    const [title, setTitle] = useState("Title")
    const [editOpen, setEditOpen] = useState(false);


    //To do:  if media belongs to logged-in user, allow
    //options to edit the media...
    //track: edit name, delete
    //album: edit name, delete 


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
                    {editOpen === true && <TitleEdit pageType={pageType} previousTitle={title} setEditOpen={setEditOpen} setTitle={setTitle}/>}
                </div>
            </section>
            <section className="media-page-bottom">
                <div className="media-page-box">
                    <div className="media-icons-grid">
                        <MediaIcon source="https://i.ibb.co/XSSZnYp/albumimggeneric.png" title="Icon Title" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MediaPage;