import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";


const UserPage = () => {

    const userPageId = Number(useParams().userPageId);

    const currentUser = useSelector(state => state.session.user)

    const [isCurrentUser, setIsCurrentUser] = useState(false);


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

    useEffect(() => {}, [currentUser, userPageId])


    return (
        <div className="user-page-container">
            
            <div className="user-page-top">
                <img className="user-page-splash-img" alt="" src="/images/userpage-splash-pattern.png"></img>
                <div className="user-avatar-container">
                    {isCurrentUser && <img className="user-page-img" src={`${currentUser.avatarUrl ? currentUser.avatarUrl : "https://i.ibb.co/XSSZnYp/albumimggeneric.png"}`}></img>}
                </div>
                
            </div>
            <div className="user-page-bottom">

            </div>
        </div>
    )
}

export default UserPage;