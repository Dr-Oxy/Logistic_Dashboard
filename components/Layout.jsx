import { useContext } from 'react';

import Head from 'next/head';

//import utility
import { DataContext } from '../Utils/DataContext';

//import components
import Theme from './Theme';
import Sidebar from '../components/Sidebar';
import TopNav from './TopNav';
import Modal from './Modal';

export const Layout = ({ children }) => {
  const { isOpen } = useContext(DataContext);

  return (
    <div className="layout__container relative">
      <Head>
        <title>Logistics Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="bg-gray-50 dark:bg-black text-gray-500 dark:text-white px-4 md:px-8 py-8 min-h-screen xl:ml-72 relative">
        <TopNav />

        {children}
      </main>

      <Theme />

      {isOpen ? <Modal /> : ''}
    </div>
  );
};
