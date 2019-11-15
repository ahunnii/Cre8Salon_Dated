import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import stock1 from '@images/makeup.jpg';

const PHOTO_SET = [
  {
    src: stock1,
    width: 4,
    height: 3,
  },
  {
    src: stock1,
    width: 1,
    height: 1,
  },
];

class PhotoGallery extends Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}

export default PhotoGallery;
