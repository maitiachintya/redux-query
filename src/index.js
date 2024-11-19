import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';


const queryClient = new QueryClient()
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
