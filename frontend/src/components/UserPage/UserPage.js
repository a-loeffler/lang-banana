import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchDataForOneUser } from "../../store/user";
import Icon from "./Icon";


const UserPage = () => {
    const dispatch = useDispatch();

    const userPageId = Number(useParams().userPageId);

    

    const currentUser = useSelector(state => state.session.user)

    const userPageDataFromStore = useSelector(state => state.user.userPageData)

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const [pageData, setPageData] = useState({});

    // const getPageData = async (userPageId) => {
    //     const res = await fetch(`/api/users/${userPageId}`);
    //     const json = await res.json();
    //     setPageData(json.userData);
    // }





    useEffect(() => {
        if (currentUser) {
            // console.log(currentUser.id)
            // console.log(userPageId)
            if (currentUser.id === userPageId) {
                setIsCurrentUser(true);
                // console.log(isCurrentUser);
            } else {
                setIsCurrentUser(false)
                // console.log(isCurrentUser)
            }
        } else {
            // console.log("Nope")
        }

        
    }, [userPageId])

    useEffect(() => {
        // getPageData(userPageId);
    }, [currentUser, userPageId])

    useEffect(() => {

        // console.log(userPageDataFromStore)
        if (userPageDataFromStore[userPageId] === undefined) {
            // console.log("here 53")
            dispatch(fetchDataForOneUser(userPageId))
            .then(() => {
                if (userPageDataFromStore[userPageId].length === 0) {
                    // console.log("here 58")
                    setPageData("no user in database")
                } else {
                    setPageData(userPageDataFromStore[userPageId])
                }
            })
        } else {
            setPageData(userPageDataFromStore[userPageId]);
            // console.log(pageData);
        }

        
        // console.log(pageData)
        
        
    }, )

    return (
        <div className="user-page-container">
            
            <div className="user-page-top">
                <img className="user-page-splash-img" alt="" src="/images/userpage-splash-pattern.png"></img>
                <div className="user-page-name-container">
                    <h1 className="user-page-name">{pageData.userName}</h1>
                </div>
                <div className="user-avatar-container">
                    {isCurrentUser &&
                     <>
                        <img className="user-page-img" src={`${currentUser.avatarUrl ? currentUser.avatarUrl : "https://i.ibb.co/XSSZnYp/albumimggeneric.png"}`}></img>
                    </>
                    }
                    {!isCurrentUser &&
                     <>
                        <img className="user-page-img" src={`${pageData.avatarUrl ? pageData.avatarUrl : "https://i.ibb.co/XSSZnYp/albumimggeneric.png"}`}></img>
                    </>
                    }
                </div>
                {isCurrentUser && <div className="user-edit-container">
                    <button className="user-edit-button tl">Edit Settings</button>
                    <button className="user-edit-button tr">Change Avatar</button>
                </div>}
            </div>
            <div className="user-page-bottom">
                <section className="space-bottom-50">
                    <h1 className="user-page-box-title">{isCurrentUser ? "My Albums" : "Albums"}</h1>
                    <div className="user-page-box" id="my-albums">
                        <div className="user-page-icons-container">
                            {pageData.Albums?.map((album, index) => <Icon key={index} name={album.name} imageUrl={album.coverArtUrl} linkUrl={`/albums/${album.id}`}/>)}
                        </div>
                    </div>
                    {isCurrentUser && 
                    <div className="user-buttons-container">
                        <button className="user-page-button">Edit Albums</button>
                    </div>}
                </section>
                <section className="space-bottom-50">
                    <h1 className="user-page-box-title">{isCurrentUser ? "My Tracks" : "Tracks"}</h1>
                    <div className="user-page-box" id="my-tracks">
                        <div className="user-page-icons-container">
                            {pageData.Tracks?.map((track, index) => <Icon key={index} name={track.name} imageUrl={track.Album.coverArtUrl} linkUrl={`/albums/${track.Album.id}/tracks/${track.id}`}/>)}
                        </div>
                    </div>
                    {isCurrentUser && 
                    <div className="user-buttons-container">
                        <button className="user-page-button">Edit Tracks</button>
                    </div>}
                </section>
            </div>
        </div>
    )
}

export default UserPage;