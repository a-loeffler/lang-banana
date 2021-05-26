//will need this later for posting a track
import { csrfFetch } from './csrf';


const GET_TRACKS = "tracks/getTracks";
const POST_TRACK = "tracks/postTrack";



const getTracks = (trackData) => {
    return {
        type: GET_TRACKS,
        payload: trackData
    }
}

const postTrack = (trackData) => {
    return {
        type: POST_TRACK,
        payload: trackData
    }
}


export const fetchTracks = () => async (dispatch) => {

    // fetch('/api/tracks').then(res => res.json()).then(data => console.log(data))
    const response = await fetch("/api/tracks")

    const data = await response.json();

    dispatch(getTracks(data));


}


export const postNewTrack = (newTrackData) => async (dispatch) => {

    const {name, languageId, topicId, albumId, userId, file} = newTrackData;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("languageId", languageId);
    formData.append("topicId", topicId);
    formData.append("albumId", albumId);
    formData.append("userId", userId);

    formData.append("file", file);

    const response = await csrfFetch("/api/tracks", {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData,
    })

    const data = await response.json();

    dispatch(postTrack(data));

}



const initialState = {};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS: {
            let newState = {...state};
            newState["tracks"] = action.payload;
            return newState;
        }
        case POST_TRACK: {
            let newState = {...state};
            newState.tracks[action.payload.id] = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default tracksReducer;
