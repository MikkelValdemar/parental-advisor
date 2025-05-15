import { popularPlaygrounds } from "@/app/data/mockData";

export default {
  navigation: {
    events: "Begivenheder",
    cafes: "Caféer",
    playgrounds: "Legepladser",
    myAccount: "Min Konto",
  },
  home: {
    latestEvents: "Seneste Begivenheder",
    popularEvents: "Populære Begivenheder",
    time: "{{time}}",
    date: "{{date}}",
  },
  events: {
    title: "Begivenheder",
    upcomingEvents: "Kommende Begivenheder",
    pastEvents: "Tidligere Begivenheder",
    comingSoon: "Kommer snart...",
  },
  cafes: {
    title: "Caféer",
    description: "Find familievenlige caféer i dit område",
    comingSoon: "Kommer snart...",
  },
  playgrounds: {
    title: "Legepladser",
    popularPlaygrounds: "Populære Legepladser",
  },
  account: {
    title: "Min Konto",
    description: "Administrer dine kontoindstillinger",
    editProfile: "Rediger Profil",
    accountSettings: "Kontoindstillinger",
    comingSoon:
      "Kontoindstillinger og præferencer vil være tilgængelige snart.",
  },
  footer: {
    about: "Om",
    contact: "Kontakt",
    contribute: "Bidrag",
  },
} as const;
