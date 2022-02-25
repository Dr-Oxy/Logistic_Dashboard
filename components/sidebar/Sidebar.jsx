import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white w-66 h-full fixed top-0 left-0  pt-10  overflow-y-auto flex flex-col">
      <div className="sidebar__logo uppercase font-bold text-2xl text-black px-8 mb-12">
        ipi.
      </div>

      <div className="sidebar__main-content px-6 mb-16">
        <h6 className="uppercase text-sm text-gray-500 mb-5">main menu</h6>

        <nav>
          <ul className="sidebar__ul">
            <li>
              <a className="active" href="#home">
                <span className="icon mr-4"></span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#vehicles">
                <span className="icon mr-4"></span>
                <span>Vehicles</span>
              </a>
            </li>
            <li>
              <a href="#transporters">
                <span className="icon mr-4"></span>
                <span>Transporters</span>
              </a>
            </li>
            <li>
              <a href="#customers">
                <span className="icon mr-4"></span>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#shippers">
                <span className="icon mr-4"></span>
                <span>Shippers</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__internal-tools px-6 mb-10">
        <h6 className="uppercase text-sm text-gray-500 mb-5">Internal Tools</h6>

        <nav>
          <ul className="sidebar__ul">
            <li>
              <a href="#tickets">
                <span className="icon mr-4"></span>
                <span>Support Tickets</span>
              </a>
            </li>
            <li>
              <a href="#invoices">
                <span className="icon mr-4"></span>
                <span>Invoices</span>
              </a>
            </li>
            <li>
              <a href="#analytics">
                <span className="icon mr-4"></span>
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="#payments">
                <span className="icon mr-4"></span>
                <span>Payments</span>
              </a>
            </li>
            <li>
              <a href="#settings">
                <span className="icon mr-4"></span>
                <span>Settings</span>
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
