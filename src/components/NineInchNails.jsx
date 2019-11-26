import React from 'react';
import ninprettyhatemachine from '../images/ninprettyhatemachine.jpg'
import NINband from '../images/NINband.jpeg'
import ninalbumcover from '../images/ninalbumcover.jpg'

const NineInchNails = () => {
  return (
    <>
      <div className="wrapper">
        <p>Nine Inch Nails</p>
        <img className="NINBand" src={NINband} />
        <p>Pretty Hate Machine, pictured here below, was released in 1988. It's probably my favorite in a long line of successful albums.</p>
        <img className="ninPrettyHateMachine" src={ninprettyhatemachine} />
        <p>In May 2018, the band revealed its ninth studio album, entitled Bad Witch, which was released on June 22, 2018. I have always been very fond of Trent Reznor for his many different kinds of endeavors musically.</p>
        <img className="ninAlbumcover" src={ninalbumcover} />
      </div>

    </>
  );
}

export default NineInchNails;
