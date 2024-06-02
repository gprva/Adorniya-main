import React from "react";
import Button from "../components/Button/Button";
import right from '../assets/bluejew.jpg'
import Slider from "../components/Slider/Slider";


export default function Home() {
  const slides = [
    'https://a-static.besthdwallpaper.com/diamond-jewels-tapet-2304x768-11133_103.jpg',
    'https://wallpapers.com/images/hd/jewelry-necklace-with-blue-diamonds-aurtannkux9ky5nu.jpg',
    'https://i.pinimg.com/originals/68/9c/33/689c33d888e1182e62a288bc8a83cf67.jpg',
  ];

  return (
    <>
      <div className="Home">
        <Slider slides={slides} />
      </div>
    </>
  );
}
