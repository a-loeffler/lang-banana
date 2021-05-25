import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import { fetchTracks } from '../../store/tracks';

import Carousel from './Carousel';




import './Content.css';




const Content = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks());
    }, [])

    const tracks = useSelector(state => state.tracksList.tracks);

    console.log(tracks)



    return (
        <div className="content-container">
            <div className="content-main-display">
                {tracks && <Carousel carouselTitle={"Lessons: Top 10"} list={tracks.topTen}/>}
                {tracks && <Carousel carouselTitle={"Spanish"} list={tracks.spanish}/>}
                {tracks && <Carousel carouselTitle={"Mandarin"} list={tracks.mandarin}/>}
                {tracks && <Carousel carouselTitle={"German"} list={tracks.german}/>}
                {tracks && <Carousel carouselTitle={"English"} list={tracks.english}/>}
                {tracks && <Carousel carouselTitle={"Korean"} list={tracks.korean}/>}
                {tracks && <Carousel carouselTitle={"Conversation"} list={tracks.conversation}/>}
            </div>
        </div>
    )
}

export default Content;
