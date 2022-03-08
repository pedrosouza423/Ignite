import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { RepositoryList } from './components/RepositoryList';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RepositoryList/>
  </React.StrictMode>,
  document.getElementById('root')
);

