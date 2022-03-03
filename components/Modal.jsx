/* eslint-disable @next/next/no-img-element */
//import styles
import modalStyles from '../styles/styles.module.css';

import { FaRegWindowClose } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';

const Modal = (id, handleOpen, handleClose, children) => {
  return (
    <div className="bg-white mx-auto w-3/4 py-8 pl-8 pr-16 h-auto rounded-md relative">
      {/* modal header */}
      <div className="text-center mb-6">
        <FaRegWindowClose className="text-2xl cursor-pointer absolute top-8 right-8" />
        <h1 className="text-3xl font-semibold text-black">Tracking Vehicle</h1>
        <p>Please hold on. Locating vehicle on IPI network</p>
      </div>

      {/* modal body */}
      <div className="flex justify-between items-center">
        {/* body left */}
        <div className="w-1/3 bg-gray-200">
          <div className=" border-b-2 bordr-gray-200 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 object-cover rounded-full"
                  src="./trucker-1.jpg"
                  alt="driver"
                />

                <div className="ml-4">
                  <p className="font-semibold">Johnson C</p>
                  <p className="text-sm">Transporter</p>
                </div>
              </div>

              <button className="border-0 outline outline-1 outline-black rounded-full px-10 py-1">
                view
              </button>
            </div>
          </div>

          <div className=" border-b-2 bordr-gray-200 py-4">
            <p className="font-semibold mb-1">Maryland, Lagos NG</p>
            <p>Current location</p>
          </div>

          <div className=" border-b-2 bordr-gray-200 py-4">
            <p className="font-semibold mb-1">36mins</p>
            <p>Time spent so far</p>
          </div>
        </div>

        {/* body right */}
        <div className="bg-gray-400 flex-1 h-72 ml-8">Map/ beamer</div>
      </div>

      {/* modal foooter */}
      <div className="bg-gray-100 mt-8">
        <ul className="flex items-center justify-between">
          <li className="capitalize">
            <div className="flex  items-start ">
              <ImTruck className="text-3xl text-black" />
              <div className="ml-3">
                <h3 className="font-bold text-black uppercase">reg no.</h3>
                <p className="text-gray-400 text-sm">Toyolta highlander 2004</p>
              </div>
            </div>
          </li>

          <li className="capitalize">
            <p className="font-bold text-black">Airport</p>
            <p className="text-gray-400 text-sm">start location</p>
          </li>

          <li className="capitalize">
            <p className="font-bold text-black">Eleme</p>
            <p className="text-gray-400 text-sm">destination</p>
          </li>

          <li className="capitalize">
            <p className="font-bold text-black">In transit</p>
            <p className="text-gray-400 text-sm">status</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
