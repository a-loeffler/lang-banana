import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { fetchDataForOneUser } from "../../store/user";


const UserPage = () => {
    const dispatch = useDispatch();

    const userPageId = Number(useParams().userPageId);

    const currentUser = useSelector(state => state.session.user)

    const userPageData = useSelector(state => state.user.userPageData)

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const [pageData, setPageData] = useState({});

    // const getPageData = async (userPageId) => {
    //     const res = await fetch(`/api/users/${userPageId}`);
    //     const json = await res.json();
    //     setPageData(json.userData);
    // }





    useEffect(() => {
        if (currentUser) {
            console.log(currentUser.id)
            console.log(userPageId)
            if (currentUser.id === userPageId) {
                setIsCurrentUser(true);
                console.log(isCurrentUser);
            }
        } else {
            console.log("Nope")
        }

    }, )

    useEffect(() => {
        // getPageData(userPageId);
    }, [currentUser, userPageId])

    useEffect(() => {

        console.log(userPageData)
        if (userPageData[userPageId] === undefined) {
            console.log("here 53")
            dispatch(fetchDataForOneUser(userPageId))
            .then(() => {
                if (userPageData[userPageId].length === 0) {
                    console.log("here 58")
                    setPageData("no user in database")
            };
            })
        }

        

        setPageData(userPageData);
        console.log(pageData);
    }, )

    return (
        <div className="user-page-container">
            
            <div className="user-page-top">
                <img className="user-page-splash-img" alt="" src="/images/userpage-splash-pattern.png"></img>
                <div className="user-avatar-container">
                    {isCurrentUser &&
                     <>
                        <img className="user-page-img" src={`${currentUser.avatarUrl ? currentUser.avatarUrl : "https://i.ibb.co/XSSZnYp/albumimggeneric.png"}`}></img>
                    </>
                    }
                </div>
                {isCurrentUser && <div className="user-edit-container">
                    <button className="user-edit-button tl">Edit Settings</button>
                    <button className="user-edit-button tr">Change Avatar</button>
                </div>}
                
            </div>
            <div className="user-page-bottom">
                <div className="user-page-box" id="my-albums">
                    <h1>My Albums</h1>
                </div>
                {isCurrentUser && 
                <div className="user-buttons-container">
                    <button className="user-page-button">My Albums</button>
                </div>}
            </div>
        </div>
    )
}

export default UserPage;