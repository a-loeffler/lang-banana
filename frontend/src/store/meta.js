//get language and topic metadata

const GET_META = "meta/getMetaData";

const getMeta = (metaData) => {
    return {
        type: GET_META,
        payload: metaData
    }
}

export const fetchMeta = () => async (dispatch) => {
    const response = await fetch("/api/meta");
    const data = await response.json();

    dispatch(getMeta(data));
};

const initialState = {languages: [], topics: []};

const metaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_META: {
            let newState = {...state};
            newState["languages"] = action.payload.languages;
            newState["topics"] = action.payload.topics;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default metaReducer;
