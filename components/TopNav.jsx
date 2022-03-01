/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';

//import utilities
import { DataContext } from '../Utils/DataContext';

//import icons
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const TopNav = () => {
  const { handleSideBar } = useContext(DataContext);

  return (
    <div className="vertical__nav flex items-center">
      <div className="lg:hidden cursor-pointer" onClick={handleSideBar}>
        <IoMenu className="text-3xl text-gray-500" />
      </div>

      <div className=" ml-auto flex items-center">
        <div className="w-14 h-14 bg-gray-100 rounded-full flex justify-center items-center">
          <IoIosNotificationsOutline className="text-3xl" />
        </div>

        <div className="line w-1 h-14 bg-gray-300 mx-4"></div>

        <div className="bg-avatar bg-cover bg-no-repeat bg-center h-14 w-14 rounded-full "></div>
      </div>
    </div>
  );
};

export default TopNav;
