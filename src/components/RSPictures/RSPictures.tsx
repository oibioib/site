import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../assets/photo-1.png';
import photo2 from '../../assets/photo-2.png';
import photo3 from '../../assets/photo-3.png';
import photo4 from '../../assets/photo-4.png';
import photo5 from '../../assets/photo-5.png';
import photo6 from '../../assets/photo-6.png';
import photo7 from '../../assets/photo-7.png';
import photo8 from '../../assets/photo-8.png';
import photo9 from '../../assets/photo-9.png';

import './RSPictures.css';

export const RSPictures: React.FC = () => {
  const onChange = () => console.log('onChange');
  const onClickItem = () => console.log('onClickItem');
  const onClickThumb = () => console.log('onClickThumb');
  return (
    <div className="pictures">
      <div className="title">The Rolling Scopes in pictures</div>
      <div className="subtitle">
        Each time our events take place in a different city, so that makes it hard to say where the
        next one will take place.
      </div>
      <Carousel
        className="carousel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}>
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
        <img src={photo5} />
        <img src={photo6} />
        <img src={photo7} />
        <img src={photo8} />
        <img src={photo9} />
      </Carousel>
    </div>
  );
};
