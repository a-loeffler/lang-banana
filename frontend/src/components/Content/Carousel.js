import {useEffect, useState} from 'react';

import MediaCard from './MediaCard';

import './Content.css';

const Carousel = ({scrollerTitle, groupNumber}) => {

    const mockData = {title: "Annyeonghaseyo", artist: ""};

    const scrollTracks = [{...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}];

    for (let i = 0; i < scrollTracks.length; i++) {
        let track = scrollTracks[i];
        track.artist = i;
    }

    console.log(scrollTracks)

    const [slidePosition, setSlidePosition] = useState(0);

    const [slidesToDisplay, setSlidesToDisplay] = useState([]);

    // let slidesToDisplay = [];

    useEffect(() => {

        console.log("slidePosition: ", slidePosition)
        let displaySlides = scrollTracks.slice(slidePosition, slidePosition + 4);

        console.log("display slides:  ", displaySlides);

        setSlidesToDisplay(displaySlides);

    }, [slidePosition])

    const backButtonActions = () => {
        if (slidePosition > 0) {
            setSlidePosition(slidePosition - 1);
        }
    }

    const forwardButtonActions = () => {
        if (slidePosition < scrollTracks.length - 3) {
            setSlidePosition(slidePosition + 1);
        }

        //To Do: if the user reaches the last track, direct them to more search results
        // else {}
    }



    return (
        <div>
            <h2 className="content-scroller-title">{scrollerTitle || "Content Title"}</h2>
            <div className="content-scroller">
                {slidesToDisplay.map((track, index) => <MediaCard key={index} title={track.title} groupNo={groupNumber || 1} artist={track.artist}/>)}
            </div>
            <button id="backscroll" className="back" onClick={() => backButtonActions()}>◄</button>
            <button id="frontscroll" className="forward" onClick={() => forwardButtonActions()}>►</button>
        </div>
    )
}

export default Carousel;
