import React from 'react';
import HornedBeast from './hornedbeast.jsx';
import Image1 from './src/assets/Unicorn.jpg';
import Image2 from './src/assets/Rhino.jpg'
import Image3 from './src/assets/UniWhal.jpg';


class Gallery extends React.Component {
  render() {
    return (
      <>
      <HornedBeast title ="Unicorn Head" image={Image1} description="Someone wearing a very silly unicorn head mask" />
      <HornedBeast title ="Rhino Family" image={Image2} description="Parent rhino with two babies" />
      <HornedBeast title ="Rhino Family" image={Image3} description="A unicorn and a narwhal nuzzling their horns" />
      </>
    )
  }
}

export default Gallery