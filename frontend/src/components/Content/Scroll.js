import {useEffect} from 'react';

import MediaCard from './MediaCard';

import './Content.css';

const Scroll = ({scrollerTitle, groupNumber}) => {

    const mockData = {title: "Annyeonghaseyo", artist: "Shin Nari"};


    const scrollTracks = [mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData, mockData];

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {

            let slidePosition = 1;

            const slides = document.querySelectorAll(".media-card-container");
            console.log(slides);

            slideShow();

            function slideShow(n) {
              if (n > slides.length) {
                slidePosition = 1;
              };

              if (n < 1) {
                slidePosition = slides.length;
              };

              for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              };


              slides[slidePosition - 1].style.display = "block";
              if (slides[slidePosition]) slides[slidePosition].style.display = "block";
              if (slides[slidePosition + 1]) slides[slidePosition + 1].style.display = "block";
              if (slides[slidePosition + 2]) slides[slidePosition + 2].style.display = "block";


            }

            const backButton = document.querySelector("#backscroll");

            backButton.addEventListener("click", () => {
              if(slidePosition > 1) {
                slidePosition -= 1;
                slideShow(slidePosition)
              }
            })

            const forwardButton = document.querySelector("#frontscroll");

            forwardButton.addEventListener("click", () => {
              if(slidePosition < slides.length) {
                slidePosition += 1;
                slideShow(slidePosition)
              }
            })

        }, [])
    })


    return (
        <div>
            <h2 className="content-scroller-title">{scrollerTitle || "Content Title"}</h2>
            <div className="content-scroller">
                {scrollTracks.map((track, index) => <MediaCard key={index} title={track.title} groupNo={groupNumber || 1} artist={index}/>)}
            </div>
            <button id="backscroll" className="back">◄</button>
            <button id="frontscroll" className="forward">►</button>
        </div>
    )
}

export default Scroll;
