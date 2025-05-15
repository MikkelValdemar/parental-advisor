"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Venues() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">
          {t("venues.title")}
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-50 p-8 rounded-lg">
            <div className="text-center py-12 text-[var(--color-text-secondary)]">
              {t("venues.comingSoon")}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
