import React from 'react';
import theCrystalMethodBandOg from '../images/thecrystalmethodbandog.jpg'
import theCrystalMethodBand from '../images/thecrystalmethodband.jpg'
import cmAlbumCover from '../images/cmalbumcover.jpg'

const TheCrystalMethod = () => {
  return (
    <>
      <div className="wrapper">
        <p>The Crystal Method</p>
        <p>Originally Ken Jordan and Scott Kirkland, Ken on the right retired in 2017.</p>
        <img className="theCrystalMethodBandOg" src={theCrystalMethodBandOg} />
        <p>I was at this concert, my third time seeing "them" and it was super fanstastic! We'd had tickets since early August. The logo on the bottom right of the photo mentions the album "The Trip Home" which is Scott's first solo album.</p>
        <img className="theCrystalMethodBand" src={theCrystalMethodBand} />
        <p>Vegas was an extremely popular album and was initially what grabbed my interest.</p>
        <img className="cmAlbumCover" src={cmAlbumCover} />
      </div>

    </>
  );
}

export default TheCrystalMethod;
