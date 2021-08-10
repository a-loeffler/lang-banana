//will need this later for posting a track
import { csrfFetch } from './csrf';


const GET_TRACKS = "tracks/getTracks";
const POST_TRACK = "tracks/postTrack";
const PLAY_TRACK = "track/playTrack";
const GET_ONE_TRACK = "track/getTrack";



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

const playTrack = (playTrackData) => {
    return {
        type: PLAY_TRACK,
        payload: playTrackData
    }
}

const getOneTrack = (trackData) => {
    return {
        type: GET_ONE_TRACK,
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

    console.log(name, languageId, topicId, albumId, userId,)

    const formData = new FormData();

    formData.append("name", name);
    formData.append("languageId", languageId);
    formData.append("topicId", topicId);
    if (albumId) formData.append("albumId", albumId);
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

export const playSelectedTrack = (playTrackData) => async (dispatch) => {
    dispatch(playTrack(playTrackData))
};


export const getTrackPageData = (trackId) => async (dispatch) => {
    const res = await fetch(`/api/tracks/${trackId}`)

    const data = await res.json();

    dispatch(getOneTrack(data))
}


const initialState = {nowPlaying: {}, trackPageData: {}};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS: {
            let newState = {...state};
            newState["tracks"] = action.payload;
            return newState;
        }
        case POST_TRACK: {
            let newState = {...state};
            newState.tracks[action.payload.newTrack.id] = action.payload.newTrack;
            return newState;
        }
        case PLAY_TRACK: {
            let newState = {...state};
            newState["nowPlaying"] = action.payload;
            return newState;
        }
        case GET_ONE_TRACK: {
            let newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default tracksReducer;
