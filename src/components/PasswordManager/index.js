import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { encode as encodeUnit8, decode as decodeUnit8 } from 'uint8-to-base64';
import * as R from 'ramda';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';

import styles from './index.module.scss';

const Comp = () => {
  const { t } = useTranslation();
  const [shoudSavePassword, setShouldSavePassword] = useState(false);
  const [aesKey, setAesKey] = useState();
  const [accounts, setAccounts] = useState({});
  const allAccounts = useMemo(() => R.values(accounts), [accounts]);
  useEffect(() => {
    if (shoudSavePassword) {
      if (!aesKey) {
        getOrCreateKey()
          .then(setAesKey)
          .catch(() => {
            setShouldSavePassword(false);
          });
      }
    }
  }, [shoudSavePassword, aesKey]);
  const unlock = useCallback(() => {
    getOrCreateKey().then(setAesKey);
  }, []);
  useEffect(() => {
    document.querySelector('#login_btn').addEventListener('click', () => {
      const id = document.querySelector('#line_login_email').value;
      const password = document.querySelector('#line_login_pwd').value;
      setAccounts(R.mergeDeepLeft({ [id]: { id, password } }));
    });
  }, []);
  useEffect(() => {
    if (aesKey && !R.isEmpty(accounts)) {
      const cipherText = AES.encrypt(JSON.stringify(accounts), aesKey).toString();
      localStorage.setItem('accounts', cipherText);
    }
  }, [accounts, aesKey]);
  useEffect(() => {
    if (aesKey) {
      const str =
        'accounts' in localStorage
          ? AES.decrypt(localStorage.getItem('accounts'), aesKey).toString(Utf8)
          : '{}';
      setAccounts(JSON.parse(str));
    }
  }, [aesKey]);
  return (
    <div className={styles.container}>
      <div className={styles.formCheck}>
        <input
          id="shoudSavePassword"
          type="checkbox"
          onChange={() => setShouldSavePassword((v) => !v)}
          checked={shoudSavePassword}
        />
        <label htmlFor="shoudSavePassword" className={styles.label}>
          {t('Save password')}
        </label>
      </div>
      <div className="placeholder-20" />
      <div className="d-grid gap-2">
        <Button variant="outline-primary" onClick={unlock}>
          {t('Use saved username and password')}
        </Button>
      </div>
      <div className="placeholder-20" />
      <Container>
        {allAccounts.map((account) => {
          return (
            <Row key={account.id} className={styles.accountItem}>
              <Col
                xs={{ span: 9 }}
                className={classnames(styles.noPaddingRL, 'd-flex align-items-center')}
              >
                {account.id}
              </Col>
              <Col className={styles.noPaddingRL}>
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      document.querySelector('#line_login_email').value = account.id;
                      document.querySelector('#line_login_pwd').value = account.password;
                      document.querySelector('#login_btn').removeAttribute('disabled');
                      document.querySelector('#login_btn').click();
                    }}
                  >
                    {t('Sign In')}
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default Comp;

function getOrCreateKey() {
  if (!('publicKey' in localStorage)) {
    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const userId = new Uint8Array(8);
    window.crypto.getRandomValues(userId);

    const publicKey = {
      challenge,
      rp: {
        id: location.hostname,
        name: location.hostname,
      },
      user: {
        id: userId,
        name: 'Line Web Client Password Manager',
        displayName: 'Line Web Client Password Manager',
      },
      pubKeyCredParams: [
        {
          type: 'public-key',
          alg: -7,
        },
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
      },
    };
    // prettier-ignore
    return navigator.credentials
      .create({ publicKey })
      .then((credential) => {
        localStorage.setItem('publicKey', encodeUnit8(new Uint8Array(credential.rawId)));
        return window.btoa(userId);
      })
  }
  const challenge = new Uint8Array(32);
  window.crypto.getRandomValues(challenge);
  const options = {
    challenge,
    allowCredentials: [
      {
        id: decodeUnit8(localStorage.getItem('publicKey')),
        type: 'public-key',
      },
    ],
  };
  // prettier-ignore
  return navigator.credentials
    .get({ publicKey: options })
    .then((credential) => {
      return window.btoa(new Uint8Array(credential.response.userHandle));
    })
}
