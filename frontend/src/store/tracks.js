//will need this later for posting a track
import { csrfFetch } from './csrf';


const GET_TRACKS = "tracks/getTracks";



const getTracks = (trackData) => {
    return {
        type: GET_TRACKS,
        payload: trackData
    }
}



export const fetchTracks = () => async (dispatch) => {

    // fetch('/api/tracks').then(res => res.json()).then(data => console.log(data))
    const response = await fetch("/api/tracks")

    const data = await response.json();

    console.log(data);

    dispatch(getTracks(data));


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
