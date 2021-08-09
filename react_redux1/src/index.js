import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  //con este paquete englobo todo el proytecto
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeFunction from './redux/store';



const store = storeFunction();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
    ,document.getElementById('root')
);



reportWebVitals();
