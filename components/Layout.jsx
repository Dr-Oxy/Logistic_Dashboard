import { useContext, useEffect } from 'react';

import Head from 'next/head';

//import utility
import { DataContext } from '../Utils/DataContext';

//import components
import Theme from './Theme';
import Sidebar from '../components/Sidebar';
import TopNav from './TopNav';
import Modal from './Modal';

export const Layout = ({ children }) => {
  const { isOpen, isShown, handleSideClose } = useContext(DataContext);

  //overflow is hidden when modal is opened.
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen === true) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="layout__container relative">
      <Head>
        <title>Logistics Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="bg-lay-white dark:bg-lay-black text-gray-500 dark:text-white px-4 md:px-8 py-8 min-h-screen xl:ml-72 relative">
        <TopNav />

        {children}

        {isShown ? (
          <div
            onClick={handleSideClose}
            className="lg:hidden bg-white/60 dark:bg-night-black/80 h-full w-full absolute top-0 left-0 z-40"
          ></div>
        ) : null}
      </main>

      <Theme />

      {isOpen ? <Modal /> : ''}
    </div>
  );
};
