import React from 'react';
import style from '../styles/Home.module.css';

const Card = ({ small, heading, joined, bg, icon, hover }) => {
  return (
    <div
      className={`${style.card} pl-8 bg-white rounded-md text-gray-400 flex items-center relative ${hover}`}
    >
      <div>
        <p className="uppercase">{small ?? 'registered customers'}</p>
        <h2 className="font-bold text-3xl my-3 text-gray-700 uppercase">
          {heading ?? '380.2k'}
        </h2>
        <p className="capitalize">{joined ?? '3467 joined today'}</p>
      </div>

      <div
        className={`${style.semi} ${bg} h-20 w-24  absolute bottom-0 right-0`}
      ></div>
    </div>
  );
};

export default Card;
