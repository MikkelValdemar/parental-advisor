"use client";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestEvents from "./components/LatestEvents";
import PopularEvents from "./components/PopularEvents";
import { latestEvents, popularEvents } from "./data/mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF5E6] text-[#2D3047]">
      <Header />
      <div className="pt-16">
        <HeroSection />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <LatestEvents events={latestEvents} />
            <PopularEvents events={popularEvents} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
