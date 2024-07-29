import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Global } from '@emotion/react';
import globalStyles from '@styles/globalStyles';
import { AlertContextProvider } from '@contexts/AlertContext';
import AuthGuard from '@components/auth/AuthGuard';

const client = new QueryClient({
  defaultOptions: {},
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode></React.StrictMode>,
  <>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AlertContextProvider>
          <AuthGuard>
            <App />
          </AuthGuard>
        </AlertContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </>,
);

reportWebVitals();
