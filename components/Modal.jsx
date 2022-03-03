/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
//import styles
import modalStyles from '../styles/styles.module.css';

import { FaRegWindowClose } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';

import { DataContext } from '../Utils/DataContext';

const Modal = (id, children) => {
  const { handleClose, currentItem } = useContext(DataContext);

  return (
    <div className="bg-overlay-black h-full w-full overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30 lg:flex justify-center items-center">
      <div className=" bg-white h-auto mx-auto lg:mx-0 my-10 lg:my-0  w-4/5 lg:w-2/3 py-8 rounded-md px-6 lg:px-8  relative">
        {/* modal header */}
        <div className="text-center mb-6">
          <FaRegWindowClose
            onClick={handleClose}
            className="text-2xl cursor-pointer absolute top-8 right-8"
          />
          <h1 className="text-3xl font-semibold text-black mb-2 mt-10 lg:mt-0">
            Tracking Vehicle
          </h1>
          <p>Please hold on. Locating vehicle on IPI network</p>
        </div>

        {/* modal body */}
        <div className="lg:flex justify-between items-center">
          {/* body left */}
          <div className=" lg:w-1/3">
            <div className=" border-b-2 bordr-gray-200 py-4">
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
                <button className="mt-3 lg:mt-0 border-0 outline outline-1 outline-black rounded-full px-8 py-1 ml-2 hover:bg-black hover:text-white capitalize">
                  view
                </button>
              </div>
            </div>

            <div className=" border-b-2 bordr-gray-200 py-4">
              <p className="font-semibold mb-1">MaryLand, Lagos NG</p>
              <p>Current location</p>
            </div>

            <div className=" border-b-2 bordr-gray-200 py-4">
              <p className="font-semibold mb-1">36mins</p>
              <p>Time spent so far</p>
            </div>
          </div>
          {/* body right */}
          <div className="bg-gray-400 lg:flex-1 h-72 lg:ml-16 mt-4 lg:mt-0">
            Map/ beamer
          </div>
        </div>

        {/* modal foooter */}
        <div className="mt-8 overflow-x-auto whitespace-nowrap">
          <ul className="flex items-center justify-between">
            <li className="capitalize">
              <div className="flex  items-start ">
                <ImTruck className="text-3xl text-black" />
                <div className="ml-3">
                  <h3 className="font-bold text-black uppercase">
                    {currentItem.reg}
                  </h3>
                  <p className="text-gray-400 text-sm">{currentItem.vehicle}</p>
                </div>
              </div>
            </li>
            <li className="capitalize mx-8 lg:mx-0">
              <p className="font-bold text-black"> {currentItem.start}</p>
              <p className="text-gray-400 text-sm">start location</p>
            </li>
            <li className="capitalize">
              <p className="font-bold text-black">{currentItem.end}</p>
              <p className="text-gray-400 text-sm">destination</p>
            </li>
            <li className="capitalize ml-8 lg:ml-0">
              <p className="font-bold text-black">
                {currentItem.deliveryStatus}
              </p>
              <p className="text-gray-400 text-sm">status</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
