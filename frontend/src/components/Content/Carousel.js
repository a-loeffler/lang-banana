import {useEffect, useState} from 'react';

import MediaCard from './MediaCard';

import './Content.css';

const Carousel = ({carouselTitle, list}) => {

    // const mockData = {title: "Annyeonghaseyo", artist: ""};



    console.log("List for carousel:  ", list)

    const [slidePosition, setSlidePosition] = useState(0);

    const [slidesToDisplay, setSlidesToDisplay] = useState([]);

    // let slidesToDisplay = [];

    useEffect(() => {

        // console.log("slidePosition: ", slidePosition)
        let displaySlides = list.slice(slidePosition, slidePosition + 4);

        // console.log("display slides:  ", displaySlides);

        setSlidesToDisplay(displaySlides);

    }, [slidePosition, list])

    const backButtonActions = () => {
        if (slidePosition > 0) {
            setSlidePosition(slidePosition - 1);
        }
    }

    const forwardButtonActions = () => {
        if (slidePosition < list.length - 3) {
            setSlidePosition(slidePosition + 1);
        }

        //To Do: if the user reaches the last track, direct them to more search results
        // else {}
    }



    return (
        <div>
            <h2 className="content-carousel-title">{carouselTitle || "Content Title"}</h2>
            <div className="content-carousel">
                {slidesToDisplay.map((track, index) => <MediaCard key={index} title={track.name} groupNo={1} artist={track.User.userName} albumArtUrl={track.Album.coverArtUrl} />)}
            </div>
            {slidePosition > 0 && <button id="backscroll" className="back direction-button" onClick={() => backButtonActions()}>◄</button>}
            <button id="frontscroll" className="forward direction-button" onClick={() => forwardButtonActions()}>►</button>
        </div>
    )
}

export default Carousel;
