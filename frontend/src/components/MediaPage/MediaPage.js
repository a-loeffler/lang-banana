import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TitleEdit from "./TitleEdit";
import MediaIcon from "./MediaIcon";

import { getTrackPageData } from "../../store/tracks";
import { getAlbumPageData } from "../../store/album";


const MediaPage = ({typeOfPage}) => {
    const dispatch = useDispatch();

    const {albumId, trackId} = useParams();
    console.log(albumId, trackId)


    const [title, setTitle] = useState("")
    const [editOpen, setEditOpen] = useState(false);
    const [activeTrack, setActiveTrack] = useState(null);
    const [pageData, setPageData] = useState({});
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const currentUser = useSelector(state => state.session.user);
    const pageDataFromStore = useSelector(state => state.albumsList)
    
    useEffect(() => {
        if (pageDataFromStore[albumId] === undefined) {
            dispatch(getAlbumPageData(albumId))
            .then(() => {
                console.log(pageDataFromStore)
                if (!pageDataFromStore[albumId]) {
                    setPageData("No album in database")
                } else {
                    setPageData(pageDataFromStore[albumId]);
                }
            })
        } else {
            setPageData(pageDataFromStore[albumId]);
        }
    })

    useEffect(() => {

    }, [albumId, trackId, currentUser])

    useEffect(() => {
        if (currentUser) {
            if (currentUser.id === pageData.id) {
                setIsCurrentUser(true);
            } else {
                setIsCurrentUser(false)
            }
        }
    })

    console.log(pageData)
    console.log(isCurrentUser)


    useEffect(() => {

        if (typeOfPage === "album") {
            setTitle(pageData.name)
        } 
        
        if (typeOfPage === "track") {
            console.log(pageData.Tracks)
            let foundTrack = pageData.Tracks?.filter(track => track.id == trackId)
            console.log(foundTrack)
            if (foundTrack?.length > 0) {
                setTitle(foundTrack[0]?.name)
            } else {
                setTitle("Track not found")
            }
        }
    }, )

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
                    <div className="media-page-title-position">
                        <h1 className="media-page-title">{title}</h1>
                        {isCurrentUser && <button className="media-page-edit-button" onClick={() => setEditOpen(true)}>Edit</button>}
                    </div>
                    }
                    {editOpen === true && <TitleEdit typeOfPage={typeOfPage} previousTitle={title} setEditOpen={setEditOpen} setTitle={setTitle}/>}
                    <h1 className="media-page-artist">{pageData.User?.userName}</h1>
                </div>
            </section>
            <section className="media-page-bottom">
                {typeOfPage === "album" && 
                <div className="media-page-box">
                    <div className="media-icons-grid">
                        {pageData.Tracks?.map((track, index) => <MediaIcon imgSource="/images/hoverplay.svg" title={track.name} trackFileUrl={track.trackFileUrl} albumArtUrl={pageData.coverArtUrl} artist={pageData.User.userName} active={activeTrack === index} setActiveTrack={setActiveTrack} loggedIn={!!currentUser} owner={isCurrentUser} index={index} albumId={albumId} trackId={track.id}/>)}
                        {/* <MediaIcon imgSource="/images/hoverplay.svg" title="Icon Title" trackFileUrl={"www.google.com"} albumArtUrl={""} artist={""} active={activeTrack === "Icon Title"} setActiveTrack={setActiveTrack} loggedIn={!!currentUser} owner={isCurrentUser}/>
                        <MediaIcon imgSource="/images/hoverplay.svg" title="Icon Title 2" trackFileUrl={"www.google.com"} albumArtUrl={""} artist={""} active={activeTrack === "Icon Title 2"} setActiveTrack={setActiveTrack}/> */}
                    </div>
                </div>
                }
            </section>
        </div>
    )
}

export default MediaPage;