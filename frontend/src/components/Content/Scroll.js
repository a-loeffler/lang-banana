import MediaCard from './MediaCard';

import './Content.css';

const Scroll = () => {

    const mockData = {title: "Annyeonghaseyo", artist: "Shin Nari"};


    const scrollTracks = [mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData];

    return (
        <div className="content-scroller">
            {scrollTracks.map(track => <MediaCard title={track.title} artist={track.artist}/>)}
        </div>
    )
}

export default Scroll;
