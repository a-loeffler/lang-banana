import { useState } from "react";
import { useParams } from "react-router-dom";

import TitleEdit from "./TitleEdit";

const MediaPage = (pageType) => {


    const id = Number(useParams().id);
    console.log(id)

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
                        <h1 className="media-page-title">Title</h1>
                        <button className="media-page-edit-button" onClick={() => setEditOpen(true)}>Edit</button>
                    </>
                    }
                    {editOpen === true && <TitleEdit pageType={pageType} previousTitle={"Title"} setEditOpen={setEditOpen}/>}
                </div>
            </section>
            <section className="media-page-bottom">

            </section>
        </div>
    )
}

export default MediaPage;