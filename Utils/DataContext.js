import { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const handleSideBar = () => {
    setIsShown(!isShown);
  };

  // chart data
  const [monthData] = useState({
    labels: [
      'Oct 22',
      'Oct 23',
      'Oct 24',
      'Oct 25',
      'Oct 26',
      'Oct 27',
      'Oct 28',
      'Oct 29',
    ],

    ShipmentStats: [10000, 15000, 30000, 36000, 46000, 36000, 28000, 60000],

    VehicleStats: [2000, 3000, 6000, 8200, 14000, 7200, 4000, 40000],
  });

  const [yearData] = useState({
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],

    ShipmentStats: [
      9000, 18000, 36000, 58000, 34000, 22000, 39000, 43000, 30000, 36000,
      44000, 60000,
    ],

    VehicleStats: [
      2000, 3000, 6000, 8200, 14000, 7200, 4000, 40000, 10000, 2000, 28000,
      60000,
    ],
  });

  //table data
  const [allVehData] = useState([
    {
      vehicle: 'Toyolta Highlander 2004',
      regNo: 'Et-272-KJ',
      start: 'Lagos',
      end: 'Ikeja',
      deliveryStatus: 'In transit',
      driver: 'Johnson C',
      img: '/',
    },
    {
      vehicle: 'Honda Suv 2012',
      regNo: 'Abj-272-KJ',
      start: 'Maitaima',
      end: 'Gra phase II',
      deliveryStatus: 'cancelled',
      driver: 'Ahmed Lasisi',
      img: '/',
    },
    {
      vehicle: 'Toyolta Highlander 2004',
      regNo: 'Ph-272-KJ',
      start: 'Lagos',
      end: 'Ikeja',
      deliveryStatus: 'completed',
      driver: 'Johnson C',
      img: '/',
    },
    {
      vehicle: 'Toyolta Highlander 2004',
      regNo: 'Edo-272-KJ',
      start: 'Lagos',
      end: 'Ikeja',
      deliveryStatus: 'in transit',
      driver: 'Johnson C',
      img: '/',
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        handleSideBar,
        isMobile,
        isShown,
        monthData,
        yearData,
        allVehData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
