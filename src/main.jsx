import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import client from './lib/apollo-client';
import router from './Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter basename='/rgp'>
        <App />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </ApolloProvider>
  </React.StrictMode>,
)
