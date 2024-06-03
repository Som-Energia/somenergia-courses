import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // import the i18n configuration

const Article = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('ca')}>Català</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default Article;