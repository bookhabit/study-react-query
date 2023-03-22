import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

