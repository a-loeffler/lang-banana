const GET_ONE_ALBUM = "album/getAlbum";

const getOneAlbum = (albumData) => {
    return {
        type: GET_ONE_ALBUM,
        payload: albumData,
    }
}


export const getAlbumPageData = (albumId) => async (dispatch) => {

    const response = await fetch(`/api/albums/:${albumId}}`)

    const data = await response.json();

    dispatch(getOneAlbum(data));


}

const initialState = {albumPageData: {}}

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_ALBUM: {
            let newState = {...state};
            newState[action.payload.id] = action.payload;

            return newState;
        }
        default: {
            return state;
        }
    }

}

export default albumsReducer;