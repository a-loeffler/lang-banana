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

    }, [currentUser, userPageId])


    return (
        <div className="user-page-container">
            <h1>{userPageId}</h1>
        </div>
    )
}

export default UserPage;