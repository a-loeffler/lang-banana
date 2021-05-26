

const GET_USER_ALBUMS = "user/getAlbums";

const getAlbumsForOneUser = (albums) => {
    return {
        type: GET_USER_ALBUMS,
        payload: albums
    }
}

export const fetchAlbumsForOneUser = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}/albums`)

    const data = await response.json();

    dispatch(getAlbumsForOneUser(data));
}


const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ALBUMS: {
            let newState = {...state};
            newState["userAlbums"] = action.payload.userAlbums;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default userReducer;
