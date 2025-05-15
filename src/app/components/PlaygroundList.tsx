import React from "react";
import Image from "next/image";
import { Playground } from "../data/mockData";

interface PlaygroundListProps {
  playgrounds: Playground[];
}

const PlaygroundList: React.FC<PlaygroundListProps> = ({ playgrounds }) => {
  return (
    <div className="space-y-6">
      {playgrounds.map((playground) => (
        <div key={playground.id} className="group">
          <div className="flex">
            <div className="w-48 h-32 relative">
              <Image
                src={playground.image}
                alt={playground.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[var(--color-accent-peach)] font-bold">
                  {playground.openingHours}
                </span>
                <span className="text-[var(--color-text-primary)]">
                  {playground.district}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 hover-underline text-[var(--color-text-primary)]">
                {playground.name}
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-2">
                {playground.address}
              </p>
              <p className="text-[var(--color-text-secondary)]">
                {playground.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaygroundList;
