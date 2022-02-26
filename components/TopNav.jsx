/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';

const TopNav = () => {
  return (
    <div className="vertical__nav flex items-center">
      <div className={`home.mobile__sidebar__open lg:hidden`}>
        <svg
          width="31"
          height="24"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2C0 0.895429 0.89543 0 2 0H29C30.1046 0 31 0.89543 31 2V3.39131C31 4.49588 30.1046 5.3913 29 5.3913H2C0.89543 5.3913 0 4.49587 0 3.3913V2ZM0 12.3044C0 10.8156 1.20689 9.60872 2.69565 9.60872H28.3043C29.7931 9.60872 31 10.8156 31 12.3044C31 13.7931 29.7931 15 28.3043 15H2.69565C1.20689 15 0 13.7931 0 12.3044ZM2.69565 18C1.20689 18 0 19.2069 0 20.6957C0 22.1845 1.20689 23.3913 2.69565 23.3913H28.3043C29.7931 23.3913 31 22.1845 31 20.6957C31 19.2069 29.7931 18 28.3043 18H2.69565Z"
            fill="#C5CCCC"
          />
        </svg>
      </div>

      <div className=" ml-auto flex items-center">
        <div className="w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center">
          <IoIosNotificationsOutline className="text-3xl" />
        </div>

        <div className="line w-1 h-14 bg-gray-300 mx-4"></div>

        <div className="bg-avatar bg-cover bg-no-repeat bg-center h-14 w-14 rounded-full "></div>
      </div>
    </div>
  );
};

export default TopNav;
