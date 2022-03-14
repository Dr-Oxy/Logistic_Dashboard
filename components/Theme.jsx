import { MdWbSunny } from 'react-icons/md';

import { BsMoonStarsFill } from 'react-icons/bs';

const Theme = ({ setTheme, theme }) => {
  return (
    <div className="bg-white dark:bg-night-blue flex flex-col items-center w-fit px-2 py-4 shadow-md rounded-lg fixed bottom-40 right-0">
      <button
        className={`${theme === 'dark' ? 'bg-white/[0.2] p-2 rounded-lg' : ''}`}
        onClick={() => {
          setTheme('dark');
        }}
      >
        <BsMoonStarsFill className=" text-2xl fill-yellow-400" />
      </button>

      <button
        onClick={() => setTheme('light')}
        className={`${
          theme === 'light' ? 'bg-gray-200 p-2 rounded-lg' : ''
        }  mt-6 `}
      >
        <MdWbSunny className="text-2xl fill-yellow-400" />
      </button>
    </div>
  );
};

export default Theme;
