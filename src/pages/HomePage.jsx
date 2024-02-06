import React from "react";
import {useTranslation} from "react-i18next";

const HomePage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <h1>{t('home.title')}</h1>
    </div>
  );
};
export default HomePage;
