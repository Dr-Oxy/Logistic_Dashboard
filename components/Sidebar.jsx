import React from 'react';
import { GoHome, GoPerson, GoCreditCard } from 'react-icons/go';
import { ImTruck, ImStatsBars } from 'react-icons/im';
import { MdPeople, MdSupport } from 'react-icons/md';
import { RiSailboatFill, RiBarChart2Fill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { FaReceipt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white w-72 h-full fixed top-0 left-0  pt-10  overflow-y-auto flex flex-col">
      <div className="sidebar__logo uppercase font-bold text-2xl text-black px-8 mb-12">
        ipi.
      </div>

      <div className="sidebar__main-content px-6 mb-16">
        <h6 className="uppercase text-sm text-gray-500 mb-5 ml-1">main menu</h6>

        <nav>
          <ul className="sidebar__ul">
            <li>
              <a className="active flex" href="#home">
                <span className="flex items-center">
                  <GoHome className="text-3xl mr-4" />
                  <span>Home</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#vehicles">
                <span className="flex items-center">
                  <ImTruck className="text-3xl mr-4" />
                  <span>Vehicles</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#transporters">
                <span className="flex items-center">
                  <MdPeople className="text-3xl mr-4" />
                  <span>Transporters</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#customers">
                <span className="flex items-center">
                  <GoPerson className="text-3xl mr-4" />
                  <span>Customers</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#shippers">
                <span className="flex items-center">
                  <RiSailboatFill className="text-3xl mr-4" />
                  <span>Shippers</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__internal-tools px-6 mb-10">
        <h6 className="uppercase text-sm text-gray-500 mb-5 ml-1">
          Internal Tools
        </h6>

        <nav>
          <ul className="sidebar__ul">
            <li>
              <a href="#tickets">
                <span className="flex items-center">
                  <MdSupport className="mr-4 text-3xl" />
                  <span>Support Tickets</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#invoices">
                <span className="flex items-center">
                  <FaReceipt className="text-3xl mr-4" />
                  <span>Invoices</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#analytics">
                <span className="flex items-center">
                  <RiBarChart2Fill className="text-3xl mr-4" />
                  <span>Analytics</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#payments">
                <span className="flex items-center">
                  <GoCreditCard className="text-2xl mr-4" />
                  <span>Payments</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#settings">
                <span className="flex items-center">
                  <IoIosSettings className="text-3xl mr-4" />
                  <span>Settings</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__logout text-center bg-gray-200 justify-self-end p-5 cursor-pointer">
        <a href="#logOut">Log out</a>
      </div>
    </aside>
  );
};

export default Sidebar;
