/* eslint-disable @next/next/no-img-element */

import { GoSearch } from 'react-icons/go';

const Tracking = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-72 mt-4  flex items-center">
        <div className=" mx-auto lg:mx-0 h-28 w-28 rounded-full flex items-center justify-center bg-blue-pulse animate-beat">
          <GoSearch className="text-2xl text-dark-blue" />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
