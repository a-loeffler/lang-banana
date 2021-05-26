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


export const postNewTrack = (trackData) => async (dispatch) => {

    const response = await fetch("/api/tracks", {

    })
}



const initialState = {};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS: {
            let newState = {...state};
            newState["tracks"] = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default tracksReducer;
