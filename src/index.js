import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import configI18n from './i18n';
import waitFor from './functions/waitFor';

(() => {
  configI18n({ lng: localStorage.getItem('lang') ?? 'en' });
})();

(async () => {
  await waitFor(() => document.querySelector('.MdCMN02ListNew.MdRegionNod'));
  const $root = document.createElement('div');
  document.querySelector('.MdCMN02ListNew.MdRegionNod').appendChild($root);
  const Comp = require('./components/LoginBottomBar').default;
  const root = ReactDOM.createRoot($root);
  root.render(<Comp />);
})();
