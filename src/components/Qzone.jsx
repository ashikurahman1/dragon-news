import React from 'react';
import SwimmingImg from '../assets/swimming.png';
import ClassImg from '../assets/class.png';
import PlayImg from '../assets/playground.png';
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="flex flex-col items-center gap-8">
        <img src={SwimmingImg} alt="Swimming Img" />
        <img src={ClassImg} alt="Class Img" />
        <img src={PlayImg} alt="Play Img" />
      </div>
    </div>
  );
};

export default Qzone;
