"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Events() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">
          {t("events.title")}
        </h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 font-semibold ${
              activeTab === "upcoming"
                ? "text-[var(--color-text-primary)] border-b-2 border-[var(--color-accent-peach)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            {t("events.upcomingEvents")}
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 font-semibold ${
              activeTab === "past"
                ? "text-[var(--color-text-primary)] border-b-2 border-[var(--color-accent-peach)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            {t("events.pastEvents")}
          </button>
        </div>

        {/* Content */}
        <div className="text-center py-12 text-[var(--color-text-secondary)]">
          {t("events.comingSoon")}
        </div>
      </div>
      <Footer />
    </div>
  );
}
