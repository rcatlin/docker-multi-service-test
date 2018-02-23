import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';

const apiEndpoint = process.env.API
  ? process.env.api
  : 'http://localhost:8000/graphql'
  ;

ReactDOM.render(
  <App api={apiEndpoint} />,
  document.getElementById('app')
);
