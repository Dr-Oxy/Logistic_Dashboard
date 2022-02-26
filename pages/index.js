import TopNav from '../components/TopNav';
import Card from '../components/Card';

import home from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className="home">
      <TopNav />

      <div className="mt-8 mb-8">
        <h1 className="text-3xl text-black font-bold">Good Evening, Michael</h1>
        <p className="text-gray-500 mt-3">
          Glad to have you back, heres an overview of your operation today
        </p>
      </div>

      <div className={home.card__grid}>
        <Card bg="bg-blue-700" hover="hover:bg-blue-700" />

        <Card
          small="registered transporters"
          heading="15.6m"
          joined="3467 onboard today"
          bg="bg-green-300"
          hover="hover:bg-green-300"
        />

        <Card
          small="total shipments"
          heading="348.9k"
          joined="3467 shipped today"
          bg="bg-pink-500"
          hover="hover:bg-pink-500"
        />
      </div>

      <div className={`${home.bottom} my-10 text-gray-500`}>
        <div className=" md:flex justify-between items-center">
          <div>
            <h5 className="text-black font-bold text-base mb-3">Shipments</h5>
            <p>Shipping is going pretty well today. Heres what we have</p>
          </div>

          <div className="md:w-1/4 mt-4 md:mt-0 bg-white py-1 text-black px-10 flex items-center justify-around rounded-full ">
            <a href="#1d">1D</a>
            <a href="#5d">5D</a>
            <a className={home.active__menu} href="#1m">
              1M
            </a>
            <a href="#1y">1Y</a>
            <a href="#max">Max</a>
          </div>
        </div>

        <div id="1m" className="bg-white h-96 mt-6 rounded-md">
          <div
            className={`${home.chart__heading} flex justify-between items-center p-10`}
          >
            <div className="flex items-center">
              <div className="mr-32">
                <p className="font-bold uppercase text-sm mb-1">shipment</p>
                <h2 className="font-bold text-black text-2xl">60,000</h2>
              </div>

              <div>
                <p className="font-bold uppercase text-sm mb-1">
                  active vehicles
                </p>
                <h2 className="font-bold text-black text-2xl">237,889</h2>
              </div>
            </div>

            <div
              className={`${home.color__tag} flex items-center text-base capitalize`}
            >
              <p className="flex items-center before:content-[''] before:block before:bg-green-500 before:h-2 before:w-8 before:mr-4 mr-10">
                shipments
              </p>

              <p className="flex items-center before:content-[''] before:block before:bg-purple-600 before:h-2 before:w-8 before:mr-4 ">
                vehicles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
