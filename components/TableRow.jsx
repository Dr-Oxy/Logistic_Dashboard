import { useContext } from 'react';

/* eslint-disable @next/next/no-img-element */
import styles from '../styles/styles.module.css';
import { ImTruck } from 'react-icons/im';
import { MdMoreVert } from 'react-icons/md';

import { DataContext } from '../Utils/DataContext';

const TableRow = ({ item }) => {
  const color = item.colorStats;

  const { handleOpen, ModalItem } = useContext(DataContext);

  return (
    <tr className={`${styles.table__row} bg-white`}>
      <td>
        <div className="flex  items-start ">
          <ImTruck className="text-3xl text-black" />
          <div className="ml-3">
            <h3 className="font-bold text-black uppercase">{item.reg}</h3>
            <p className="text-gray-400 text-sm">{item.vehicle}</p>
          </div>
        </div>
      </td>

      <td className="capitalize">
        <p className="font-semibold text-black">{item.start}</p>
        <p className="text-gray-400 text-sm">start location</p>
      </td>

      <td className="capitalize">
        <p className="font-semibold text-black">{item.end}</p>
        <p className="text-gray-400 text-sm">destination</p>
      </td>

      <td className="capitalize ">
        <p className="font-semibold text-black">{item.deliveryStatus}</p>
        <p className="text-gray-400 text-sm">status</p>
      </td>

      <td>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src={item.img}
              alt={item.driver}
            />
          </div>
          <div className="ml-3 capitalize">
            <p className="font-semibold text-black mb-1">{item.driver}</p>
            <p className="text-gray-400 text-sm">transporter</p>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-start ">
          <div className="flex-1">
            <div className="flex items-center border-2 border-gray-300 rounded-full p-2">
              <div className={`${color} h-3 w-3 rounded-full`}></div>

              <div className="ml-2 capitalize font-semibold text-black">
                {item.deliveryStatus}
              </div>
            </div>

            <a
              onClick={() => handleOpen(item)}
              className="text-gray-400 text-sm block mt-2 text underline capitalize"
              href="#"
            >
              {item.deliveryStatus === 'in transit'
                ? 'track shipment'
                : 'view details'}
            </a>
          </div>

          <MdMoreVert className="ml-3 text-3xl cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
