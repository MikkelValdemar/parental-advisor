import React from "react";

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
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-[#2D3047]">{title}</h3>
        <p className="text-[#2D3047]">{venue}</p>
        <p className="text-[#2D3047]">{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
