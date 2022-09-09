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

(async () => {
  await waitFor(() => document.querySelector('#login_wrap_section'));
  const $root = document.createElement('div');
  document.querySelector('#login_wrap_section').appendChild($root);
  const Comp = require('./components/PasswordManager').default;
  const root = ReactDOM.createRoot($root);
  root.render(<Comp />);
})();

(async () => {
  const isChrome = () => /Chrome/.test(navigator.userAgent);
  if (isChrome()) {
    await waitFor(() => document.querySelector('#line_login_email'));
    document.querySelector('#line_login_email').focus();
  }
})();

(async () => {
  localStorage.removeItem('email');
  await waitFor(() => document.querySelector('#login_btn'));
  document.querySelector('#login_btn').removeAttribute('disabled');
  document.querySelector('#line_login_email').setAttribute('autocapitalize', 'off');
})();
