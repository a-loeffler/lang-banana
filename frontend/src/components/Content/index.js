import Carousel from './Carousel';




const Content = () => {

    // const mockData = {title: "", artist: ""};

    // const scrollTracks = [{...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}, {...mockData}];

    let mockData = {};
    let mockTrack = {title: "", artist: ""};

    for (let i = 0; i < 10; i++) {

        let scrollTracks = []

        for (let j = 0; j < scrollTracks.length; j++) {

            // scrollTracks[j] = {...mockTrack}
            // let track = scrollTracks[j];
            let track = {...mockTrack}

            track.title = `Group ${i} - ${j}`
            track.artist = j;

            scrollTracks.push(track);




        }

        mockData[i] = scrollTracks;
    }

    console.log(mockData);

    const mockFetch = Object.keys(mockData);


    return (
        <div>
            <div className="content-side-space"></div>
            <div className="content-display-space">
                {mockFetch.map(fetchIndex => <Carousel key={fetchIndex} carouselTitle={fetchIndex} mockData={mockData[fetchIndex]}/>)}
            </div>
            <div className="content-side-space"></div>
        </div>

    )
}

export default Content;
