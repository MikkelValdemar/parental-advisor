import React from "react";
import Image from "next/image";

interface EventCardProps {
  id: number;
  title: string;
  venue: string;
  date: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, venue, date, image }) => {
  return (
    <div className="bg-[#FFF5E6] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200 shadow-sm border border-[#FFE5D4]">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-[#2D3047]">{title}</h3>
        <p className="text-[#2D3047]">{venue}</p>
        <p className="text-[#2D3047]">{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
