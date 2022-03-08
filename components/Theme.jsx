import { MdWbSunny } from 'react-icons/md';

import { BsMoonStarsFill } from 'react-icons/bs';

const Theme = ({ setTheme }) => {
  return (
    <div className="bg-white dark:bg-night-blue flex flex-col items-center w-fit px-2 py-4 shadow-sm rounded-2xl fixed bottom-40 right-0">
      <button onClick={() => setTheme('dark')}>
        <BsMoonStarsFill className=" text-2xl fill-yellow-400" />
      </button>

      <button
        onClick={() => setTheme('light')}
        className={`{theme__active} mt-6 p-2 rounded-lg`}
      >
        <MdWbSunny className="text-2xl fill-yellow-400" />
      </button>
    </div>
  );
};

export default Theme;
