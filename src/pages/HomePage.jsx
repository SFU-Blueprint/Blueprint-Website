import React from "react";
import {useTranslation} from "react-i18next";
import {PageHeader} from "../components/Common";

const HomePage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <PageHeader>{t('home.title')}</PageHeader>
    </div>
  );
};
export default HomePage;
