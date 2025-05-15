import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 w-full bg-[var(--color-background)]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-12">
          <h3 className="font-bold text-[var(--color-text-primary)]">
            {t("footer.about")}
          </h3>
          <h3 className="font-bold text-[var(--color-text-primary)]">
            {t("footer.contact")}
          </h3>
          <h3 className="font-bold text-[var(--color-text-primary)]">
            {t("footer.contribute")}
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
