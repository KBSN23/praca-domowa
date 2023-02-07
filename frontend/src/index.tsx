import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as Element);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
