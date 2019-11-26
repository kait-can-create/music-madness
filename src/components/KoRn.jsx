import React from 'react';
import kornBand from '../images/kornband.jpeg'
import kornAlbumCover from '../images/kornalbumcover.jpg'

const KoRn = () => {
  return (
    <>
      <div className="wrapper">
        <p>KoЯn</p>
        <img className="kornBand" src={kornBand} />
        <p>On June 25, 2019, the band revealed that their latest album, The Nothing, would be released on September 13, 2019 and unveiled its first single: "You'll Never Find Me". On August 2, the band released a brand new song from The Nothing called "Cold."</p>
        <img className="kornAlbumCover" src={kornAlbumCover} />
      </div>
    </>
  );
}

export default KoRn;
