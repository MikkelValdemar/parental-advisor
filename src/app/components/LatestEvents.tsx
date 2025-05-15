"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Event } from "../data/mockData";
import "../styles/theme.css";

interface LatestEventsProps {
  events: Event[];
}

const LatestEvents = ({ events }: LatestEventsProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-2/3">
      <h2 className="text-3xl font-bold mb-6">{t("home.latestEvents")}</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="group">
            <div className="flex">
              <div className="w-48 h-32 relative">
                <Image
                  src={event.image || ""}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#FEC5BB] font-bold">
                    {t("home.time", { time: event.time })}
                  </span>
                  <span className="text-[#2D3047]">{event.venue}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 hover-underline">
                  {event.title}
                </h3>
                <p className="text-[#666666]">
                  {t("home.date", { date: event.date })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
