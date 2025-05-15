"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaygroundCard from "../components/PlaygroundCard";
import PlaygroundList from "../components/PlaygroundList";
import { popularPlaygrounds, districtPlaygrounds } from "../data/mockData";

const PlaygroundsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">
          {t("playgrounds.title")}
        </h1>

        {/* Popular Playgrounds Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
            {t("playgrounds.popularPlaygrounds")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPlaygrounds.map((playground) => (
              <PlaygroundCard key={playground.id} playground={playground} />
            ))}
          </div>
        </section>

        {/* District Sections */}
        {Object.entries(districtPlaygrounds).map(([district, playgrounds]) => (
          <section key={district} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
              {district}
            </h2>
            <PlaygroundList playgrounds={playgrounds} />
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PlaygroundsPage;
