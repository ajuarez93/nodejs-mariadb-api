import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { App } from './App';

import './styles.less';


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
  }
