"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Event } from "../data/mockData";
import "../styles/theme.css";

interface PopularEventsProps {
  events: Event[];
}

const PopularEvents = ({ events }: PopularEventsProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-1/3">
      <h2 className="text-3xl font-bold mb-6">{t("home.popularEvents")}</h2>
      <div className="space-y-0">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="group py-4 border-b border-[#FFE5D4] last:border-0"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-[#FEC5BB]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold mb-1 hover-underline">
                  {event.title}
                </h3>
                <p className="text-[#666666] text-sm">{event.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularEvents;
