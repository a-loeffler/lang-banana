import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';

import './TrackUploadForm.css';

import { fetchAlbumsForOneUser } from '../../store/user';
import { postNewTrack } from '../../store/tracks';


const TrackUploadFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [addToAlbum, setAddToAlbum] = useState("yes");
    const [errors, setErrors] = useState([]);

    const languages = useSelector(state => state.meta.languages);

    const topics = useSelector(state => state.meta.topics);

    const user = useSelector(state => state.session.user);

    const userAlbums = useSelector(state => state.user.userAlbums)

    //form controls
    const [trackName, setTrackName] = useState("");
    const [trackLanguageId, setTrackLanguageId] = useState(24);
    const [trackTopicId, setTrackTopicId] = useState(3);
    const [trackAlbumId, setTrackAlbumId] = useState(1);
    const [trackAudioFile, setTrackAudioFile] = useState(null);


    useEffect(() => {

        if (!userAlbums) {
            dispatch(fetchAlbumsForOneUser(user.id))
        }

    }, [dispatch, user.id, userAlbums])

    if (!user) {
        return (
            <h3>Sorry, you must be logged in to upload media</h3>
        )
    }


    let chooseAlbum;

    if (userAlbums) {
        chooseAlbum = (
            <div>
                <label htmlFor="track-album">Choose an album to add this track to:</label>
                <select name="albumId" id="track-album" value={trackAlbumId} onChange={e => setTrackAlbumId(e.target.value)}>
                    {userAlbums.map(album => <option key={album.id} value={album.id}>{album.name}</option>)}
                </select>
            </div>
        )

    } else {
        chooseAlbum = null;
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        console.log("this is the audio file", file)

        if (file) setTrackAudioFile(file);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = [];

        const newTrackData = {name: trackName, languageId: trackLanguageId, topicId: trackTopicId, albumId: trackAlbumId, userId: user.id, file: trackAudioFile};

        dispatch(postNewTrack(newTrackData))
            .then(() => {
                setTrackName("");
                setTrackLanguageId(1);
                setTrackTopicId(1);
                setTrackAlbumId(1);
                setTrackAudioFile(null);
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    newErrors = data.errors;
                    setErrors(newErrors);
                }
            });

            history.push("/media")
    };

//track requirements: name, album, creator(i.e. user), languageId, topicId,
//should fetch albums, and filter down to those that match the current user
//need an album for "none"
    return (
        <div className="upload-form-container">
            <h2 className="form-title">Upload New Track</h2>
            <div className="form-errors">
                <ul className="form-error-list">
                    {errors.map((error, index) => <li key={index} className="form-error-list-item">{error}</li>)}
                </ul>
            </div>
            <form className="track-upload-form" onSubmit={e => handleSubmit(e)}>
                <div className="form-field">
                    <label htmlFor="track-name">Name of Track</label>
                    <input type="text" name="name" id="track-name" value={trackName} onChange={e => setTrackName(e.target.value)}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="track-language">What language does your track teach?</label>
                    <select name="languageId" id="track-language" value={trackLanguageId} onChange={e => setTrackLanguageId(e.target.value)}>
                        {languages.map(language => <option key={language.id} value={language.id}>{language.name}</option>)}
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="track-language">What topic does this track primarily focus on?</label>
                    <select name="topicId" id="track-topic" value={trackTopicId} onChange={e => setTrackTopicId(e.target.value)}>
                        {topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
                    </select>
                </div>
                <div className="form-field-other">
                    <p>Are you adding this track to a pre-existing album?</p>
                    <div className="radio-button-container">
                        <div>
                            <input type="radio" id="track-album-switch-yes" name="track-album-switch" value={addToAlbum} onChange={() => setAddToAlbum("yes")} checked={addToAlbum === "yes"} ></input>
                            <label htmlFor="track-album-switch-yes">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="track-album-switch-no" name="track-album-switch" value={addToAlbum} onChange={() => setAddToAlbum("no")} checked={addToAlbum === "no"} ></input>
                            <label htmlFor="track-album-switch-no">No</label>
                        </div>
                        {addToAlbum === "yes" && chooseAlbum}
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="track-file">Choose a track to upload</label>
                    <input type="file" id="track-file" accept="audio/*" name="audioFile" onChange={e => updateFile(e)}></input>
                </div>
                <div className="form-button-container">
                    <button className="submit-button" type="submit" >Upload Track</button>
                </div>

            </form>
        </div>
    )
}

export default TrackUploadFormPage;
