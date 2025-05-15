export interface Event {
  id: number;
  title: string;
  venue: string;
  time?: string;
  date?: string;
  image?: string;
}

export const latestEvents = [
  {
    id: 1,
    title: "Baby Music Class",
    venue: "Community Center",
    time: "10:00 AM",
    date: "Fri, 12 Apr",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Parent & Baby Yoga",
    venue: "Wellness Studio",
    time: "11:30 AM",
    date: "Sat, 13 Apr",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Baby Sensory Play",
    venue: "Early Learning Center",
    time: "2:00 PM",
    date: "Sun, 14 Apr",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop&q=60",
  },
];

export const popularEvents = [
  {
    id: 1,
    title: "Baby Music Class",
    venue: "Community Center",
  },
  {
    id: 2,
    title: "Parent & Baby Yoga",
    venue: "Wellness Studio",
  },
  {
    id: 3,
    title: "Baby Sensory Play",
    venue: "Early Learning Center",
  },
  {
    id: 4,
    title: "New Parents Meetup",
    venue: "Family Cafe",
  },
  {
    id: 5,
    title: "Baby Swimming Lessons",
    venue: "Aquatic Center",
  },
];

export interface Playground {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
  openingHours: string;
  district: string;
}

export const popularPlaygrounds: Playground[] = [
  {
    id: 1,
    name: "Fælledparken Playground",
    address: "Fælledparken 1, 2200 København N",
    description:
      "Large playground with multiple play areas, including a water feature in summer",
    image:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
    openingHours: "24/7",
    district: "Østerbro",
  },
  {
    id: 2,
    name: "Viktoria Park",
    address: "Viktoriagade 1, 1655 København V",
    description:
      "Modern playground with climbing structures and sand play area",
    image:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
    openingHours: "24/7",
    district: "Vesterbro",
  },
  {
    id: 3,
    name: "Hans Tavsens Park",
    address: "Hans Tavsens Gade 1, 2200 København N",
    description: "Family-friendly park with playground and sports facilities",
    image:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
    openingHours: "24/7",
    district: "Nørrebro",
  },
  {
    id: 4,
    name: "Ørstedsparken",
    address: "Nørre Voldgade 1, 1358 København K",
    description: "Historic park with playground and beautiful surroundings",
    image:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
    openingHours: "24/7",
    district: "Østerbro",
  },
];

export const districtPlaygrounds: Record<string, Playground[]> = {
  Østerbro: [
    {
      id: 5,
      name: "Trianglen Playground",
      address: "Trianglen 1, 2100 København Ø",
      description: "Small but well-equipped playground near shopping area",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Østerbro",
    },
    {
      id: 6,
      name: "Søndermarken",
      address: "Søndermarken 1, 2100 København Ø",
      description: "Large park with multiple play areas and nature trails",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Østerbro",
    },
  ],
  Vesterbro: [
    {
      id: 7,
      name: "Skydebanegade Playground",
      address: "Skydebanegade 1, 1700 København V",
      description: "Modern playground with unique climbing structures",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Vesterbro",
    },
    {
      id: 8,
      name: "Matthæusgade Playground",
      address: "Matthæusgade 1, 1660 København V",
      description: "Small neighborhood playground with basic equipment",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Vesterbro",
    },
  ],
  Nørrebro: [
    {
      id: 9,
      name: "Superkilen Playground",
      address: "Nørrebrogade 210, 2200 København N",
      description: "Unique playground with international design elements",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Nørrebro",
    },
    {
      id: 10,
      name: "Jagtvej Playground",
      address: "Jagtvej 1, 2200 København N",
      description: "Community playground with sports facilities",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60",
      openingHours: "24/7",
      district: "Nørrebro",
    },
  ],
};
