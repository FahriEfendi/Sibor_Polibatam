import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


import axios from "axios";
import { HelmetProvider } from "react-helmet-async";

axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
  <Provider store={store}>
 <BrowserRouter>
 <HelmetProvider>
     <App />
     </HelmetProvider>
 </BrowserRouter>
 </Provider>
</StrictMode>
);

