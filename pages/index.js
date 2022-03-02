import { useState, useContext } from 'react';

//components
import Card from '../components/Card';
import Analytics from '../components/Analytics';

//icons
import { GoPerson } from 'react-icons/go';
import { MdPeople, MdWbSunny } from 'react-icons/md';
import { FaShip } from 'react-icons/fa';

//style
import home from '../styles/Home.module.css';

//Utilities
import { DataContext } from '../Utils/DataContext';

export default function Home() {
  //Toggle the tab view
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //Declare chart variables
  const { monthData } = useContext(DataContext);

  const { yearData } = useContext(DataContext);

  return (
    <section className="home">
      <div className="mt-10 mb-8 ">
        <h1 className="text-2xl md:text-3xl text-black font-bold">
          Good Evening, Chioma.
        </h1>
        <p className="text-gray-500 mt-3">
          Glad to have you back, heres an overview of your operation today
        </p>
      </div>

      <div className={home.card__grid}>
        <Card bg="bg-blue-700" hover="hover:bg-blue-700" icon={<GoPerson />} />

        <Card
          small="registered transporters"
          heading="15.6m"
          joined="3467 onboard today"
          bg="bg-green-300"
          hover="hover:bg-green-300"
          icon={<MdPeople />}
        />

        <Card
          small="total shipments"
          heading="348.9k"
          joined="3467 shipped today"
          bg="bg-pink-500"
          hover="hover:bg-pink-500"
          icon={<FaShip />}
        />
      </div>

      <div className="my-10 text-gray-500 relative">
        {/* tab heading */}
        <div className=" md:flex justify-between items-center">
          <div>
            <h5 className="text-black font-bold text-base mb-3">Shipments</h5>
            <p>Shipping is going pretty well today. Heres what we have</p>
          </div>

          <div className="md:w-1/4 mt-4 md:mt-0 bg-white py-1 text-black px-10 flex items-center justify-around rounded-full ">
            <a href="#1d">1D</a>

            <a href="#5d">5D</a>

            <a
              href="#oneMonth"
              className={
                toggleState === 1
                  ? `${home.tabs} ${home.tab__active}`
                  : `${home.tabs}`
              }
              onClick={() => toggleTab(1)}
            >
              1M
            </a>

            <a
              href="#oneYear"
              className={
                toggleState === 2
                  ? `${home.tabs} ${home.tab__active}`
                  : `${home.tabs}`
              }
              onClick={() => toggleTab(2)}
            >
              1Y
            </a>

            <a href="#max">Max</a>
          </div>
        </div>

        {/* Tab contents */}
        <div>
          {/* Chart */}
          <div
            className={
              toggleState === 1
                ? `${home.tab__content} ${home.active__content}`
                : `${home.tab__content}`
            }
          >
            <Analytics
              shipment={60000}
              activeVehicle={237889}
              stats={monthData}
            />
          </div>

          <div
            className={
              toggleState === 2
                ? `${home.tab__content} ${home.active__content}`
                : `${home.tab__content}`
            }
          >
            <Analytics
              shipment={23360000}
              activeVehicle={4237889}
              stats={yearData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
