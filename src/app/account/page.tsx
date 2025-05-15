"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Account() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">
          {t("account.title")}
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                  {t("account.editProfile")}
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  {t("account.comingSoon")}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                  {t("account.accountSettings")}
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  {t("account.comingSoon")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
