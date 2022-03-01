import styles from '../styles/styles.module.css';
import { ImTruck } from 'react-icons/im';
import { MdMoreVert } from 'react-icons/md';

const TableRow = () => {
  return (
    <tr className={`${styles.table__row} bg-white`}>
      <td>
        <div className="flex  items-start ">
          <ImTruck className="text-3xl text-black" />
          <div className="ml-3">
            <h3 className="font-bold text-black uppercase">Et-272-kj</h3>
            <p className="text-gray-400 text-sm">Toyolta highlander 2004</p>
          </div>
        </div>
      </td>

      <td className="capitalize">
        <p className="font-bold text-black">Lagos</p>
        <p className="text-gray-400 text-sm">start location</p>
      </td>

      <td className="capitalize">
        <p className="font-bold text-black">Ikeja</p>
        <p className="text-gray-400 text-sm">destination</p>
      </td>

      <td className="capitalize ">
        <p className="font-bold text-black">in transit</p>
        <p className="text-gray-400 text-sm">status</p>
      </td>

      <td>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-400"></div>
          <div className="ml-3 capitalize">
            <p className="font-bold text-black mb-1">Johnson c</p>
            <p className="text-gray-400 text-sm">transporter</p>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-start ">
          <div className="flex-1">
            <div className="flex items-center border-2 border-gray-300 rounded-full p-2">
              <div className="h-3 w-3 rounded-full bg-green-600"></div>
              <div className="ml-2 capitalize font-bold text-black">
                In transit
              </div>
            </div>

            <a
              className="text-gray-400 text-sm block mt-2 text underline capitalize"
              href="#"
            >
              Track shipment
            </a>
          </div>

          <MdMoreVert className="ml-3 text-3xl" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
