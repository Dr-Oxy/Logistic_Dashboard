import '../styles/globals.css';
import { Layout } from '../components/Layout';

import { DataContextProvider } from '../Utils/DataContext';

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}

export default MyApp;
