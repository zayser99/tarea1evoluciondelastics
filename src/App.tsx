import Timeline from "./timeline";



const timelineData = [
  {
    year: "1957",
    title: "ARPA",
    description:
      "Organismo impulsor del desarrollo tecnológico",
    icon: "/arpa.png",
    category: "internet",
  },
  {
    year: "2004",
    title: "Facebook",
    description: "An online social media and social networking service based in Menlo Park, California.",
    icon: "/facebook-icon.png",
    category: "internet",
  },
  {
    year: "2005",
    title: "YouTube",
    description: "First large-scale video sharing website that makes it easy to watch videos online",
    icon: "/youtube-icon.png",
    category: "internet",
  },
  {
    year: "2006",
    title: "Twitter",
    description:
      "A service for friends, family, and coworkers to communicate and stay connected through the exchange of quick, frequent messages",
    icon: "/twitter-icon.png",
    category: "internet",
  },
  {
    year: "2007",
    title: "Tumblr",
    description:
      "Lets you effortlessly share anything. Post text, photos, quotes, links, music, and videos from your browser, phone, desktop, email.",
    icon: "/tumblr-icon.png",
    category: "internet",
  },
  {
    year: "2010",
    title: "Instagram",
    description:
      "The home for visual storytelling for everyone from celebrities, newsrooms and brands, to teens, musicians and anyone with a creative passion.",
    icon: "/instagram-icon.png",
    category: "internet",
  },
  {
    year: "2010",
    title: "Pinterest",
    description: "A visual bookmarking tool that helps you discover and save creative ideas.",
    icon: "/pinterest-icon.png",
    category: "internet",
  },
  {
    year: "1995",
    title: "Windows 95",
    description: "A major release of Microsoft Windows operating system that introduced the Start menu and taskbar.",
    icon: "/windows-icon.png",
    category: "computo",
  },
  {
    year: "1973",
    title: "Ethernet",
    description: "A family of wired computer networking technologies commonly used in local area networks.",
    icon: "/ethernet-icon.png",
    category: "redes de computadoras",
  },
  {
    year: "1983",
    title: "Motorola DynaTAC",
    description: "The first commercially available handheld cellular mobile phone.",
    icon: "/phone-icon.png",
    category: "telefonía móvil",
  },
];



function App() {
  return (
    <Timeline data={timelineData}/>
  );
}

export default App;
