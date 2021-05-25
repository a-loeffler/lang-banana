import Carousel from './Carousel';

import './Content.css';




const Content = () => {


    // const bigFetch = await fetch('/api/tracks')

    // const mockData = {title: "", artist: ""};

    // const scrollTracks = [{...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}];

    // let mockData = {};
    // let mockTrack = {title: "", artist: ""};

    // for (let i = 0; i < 10; i++) {

    //     let scrollTracks = [];

    //     for (let j = 0; j < scrollTracks.length; j++) {

    //         // scrollTracks[j] = {...mockTrack}
    //         // let track = scrollTracks[j];
    //         let track = {...mockTrack}

    //         track.title = `Group ${i} - ${j}`
    //         track.artist = j;

    //         console.log("track", track);

    //         scrollTracks.push(track);

    //         console.log("ScrollTracks from Content", scrollTracks)

    //     }

    //     mockData[i] = scrollTracks;
    // }

    // console.log(mockData);

    // const mockFetch = Object.keys(mockData);


    return (
        <div className="content-container">
            <div className="content-main-display">
                <Carousel />
            </div>
        </div>
    )
}

export default Content;
