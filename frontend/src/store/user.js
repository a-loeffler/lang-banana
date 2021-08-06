

const GET_USER_ALBUMS = "user/getAlbums";

const GET_USER_DATA = "user/getData"

const getAlbumsForOneUser = (albums) => {
    return {
        type: GET_USER_ALBUMS,
        payload: albums
    }
}

const getDataForOneUser = (userData, userId) => {
    return {
        type: GET_USER_DATA,
        payload: {userData, userId}
    }
}

export const fetchAlbumsForOneUser = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}/albums`)

    const data = await response.json();

    dispatch(getAlbumsForOneUser(data));
}


export const fetchDataForOneUser = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}`)

    const data = await response.json();
    
    dispatch(getDataForOneUser(data, userId));

}

const initialState = {userPageData: {}};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ALBUMS: {
            let newState = {...state};
            newState["userAlbums"] = action.payload.userAlbums;
            return newState;
        }
        case GET_USER_DATA: {
            let newState = {...state};
            let userId = action.payload.userId;
            newState.userPageData[userId] = action.payload.userData;

            return newState;
        }
        default: {
            return state;
        }
    }
}

export default userReducer;
