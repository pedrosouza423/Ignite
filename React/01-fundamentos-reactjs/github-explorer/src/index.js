import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './components/Counter';
// import App from './App';
import { RepositoryList } from './components/RepositoryList';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RepositoryList/>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);

