/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';

import { GoSearch } from 'react-icons/go';
import { DataContext } from '../Utils/DataContext';

const Tracking = () => {
  const { currentItem } = useContext(DataContext);
  return (
    <div className="lg:flex justify-between items-center">
      {/* body left */}
      <div className=" lg:w-1/3">
        <div className=" py-4">
          <div className="flex justify-between items-start ">
            <div className="flex items-center ">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src={currentItem.img}
                alt={currentItem.driver}
              />
              <div className="ml-2">
                <p className="font-semibold">{currentItem.driver}</p>
                <p className="text-sm">Transporter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* body right */}
      <div className="lg:flex-1 h-72 lg:ml-16 mt-4 lg:mt-0 flex items-center">
        <div className=" mx-auto lg:mx-0 h-28 w-28 rounded-full flex items-center justify-center bg-blue-pulse animate-beat">
          <GoSearch className="text-2xl text-dark-blue" />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
