import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../@images/sign.jpg';
const Par = () => (
  <div>
    <Parallax bgImage={image1} strength={300}>
      Put some text content here - even an empty div with fixed dimensions to have a height for the
      parallax.
      <div style={{ height: '500px' }} />
    </Parallax>
  </div>
);
export default Par;
