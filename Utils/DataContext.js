import { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const handleSideBar = () => {
    setIsShown(!isShown);
  };

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
      'Jan 01',
      'Feb 01',
      'Mar 01',
      'Apr 01',
      'May 01',
      'Jun 01',
      'Jul 01',
      'Aug 01',
      'Sep 01',
      'Oct 01',
      'Nov 01',
      'Dec 31',
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

  return (
    <DataContext.Provider
      value={{
        handleSideBar,
        isMobile,
        isShown,
        monthData,
        yearData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
