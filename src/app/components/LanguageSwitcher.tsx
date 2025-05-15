"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/theme.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "da" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-[var(--color-text-primary)] hover-underline"
    >
      DA / EN
    </button>
  );
};

export default LanguageSwitcher;
