import { MdWbSunny } from 'react-icons/md';

import { BsMoonStarsFill } from 'react-icons/bs';

const Theme = () => {
  return (
    <div className="bg-white flex flex-col items-center w-fit px-2 py-4 shadow-sm rounded-2xl absolute bottom-40 right-0">
      <button>
        <BsMoonStarsFill className=" text-2xl fill-yellow-400" />
      </button>

      <button className={`{theme__active} mt-6 p-2 rounded-lg`}>
        <MdWbSunny className="text-2xl fill-yellow-400" />
      </button>
    </div>
  );
};

export default Theme;
