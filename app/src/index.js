import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';

const apiEndpoint = `http://localhost:8888/graphql`;

console.log('Api configured to: ' + apiEndpoint);

ReactDOM.render(
  <App apiEndpoint={apiEndpoint} />,
  document.getElementById('app')
);
