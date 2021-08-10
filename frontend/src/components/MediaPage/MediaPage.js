import { useParams } from "react-router-dom";



const MediaPage = (pageType) => {


    const id = Number(useParams().id);
    console.log(id)


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
                    <h1 className="media-page-title">Title</h1>
                </div>
            </section>
            <section className="media-page-bottom">

            </section>
        </div>
    )
}

export default MediaPage;