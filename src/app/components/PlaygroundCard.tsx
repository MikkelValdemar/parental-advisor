import React from "react";
import Image from "next/image";
import { Playground } from "../data/mockData";

interface PlaygroundCardProps {
  playground: Playground;
}

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({ playground }) => {
  return (
    <div>
      <div className="relative h-48 w-full">
        <Image
          src={playground.image}
          alt={playground.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
          {playground.name}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          {playground.address}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          {playground.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-[var(--color-text-secondary)]">
            {playground.openingHours}
          </span>
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            {playground.district}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundCard;
