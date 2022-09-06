import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';
import pkg from '../../../package.json';

const Comp = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p>{t('This is an unofficial Line client')}</p>
      <p>v{pkg.version}</p>
    </div>
  );
};

export default Comp;
