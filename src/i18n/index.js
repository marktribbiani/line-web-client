import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLocales = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '中文',
    value: 'zh_TW',
  },
];

export const supportedLocaleMap = supportedLocales.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {});

const resources = supportedLocales.reduce((acc, cur) => {
  try {
    const key1 = cur.value.split('-')[0];
    acc[key1] = {
      translation: require(`./langs/${key1}.json`),
    };
  } catch (e) {}
  try {
    const key2 = cur.value;
    acc[key2] = {
      translation: require(`./langs/${key2}.json`),
    };
  } catch (e) {}
  return acc;
}, {});

const configI18n = (props = {}) => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    nsSeparator: false,
    keySeparator: false,
    ...props,
  });
  return i18n;
};

export default configI18n;
